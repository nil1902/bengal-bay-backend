const express = require('express');
const cors = require('cors');
const Razorpay = require('razorpay');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Startup validation
console.log('🔍 Starting Bengal Bay Server...');
console.log(`📍 Port: ${PORT}`);
console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
console.log(`🔑 Razorpay Key ID: ${process.env.RAZORPAY_KEY_ID ? 'Set' : 'Missing'}`);
console.log(`🔐 Razorpay Secret: ${process.env.RAZORPAY_KEY_SECRET ? 'Set' : 'Missing'}`);

// Validate required environment variables
if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  console.warn('⚠️  Warning: Razorpay credentials not set. Payment endpoints will not work.');
}

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
app.use(express.json());

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Startup/readiness probe for Render
app.get('/ready', (req, res) => {
  res.status(200).json({
    status: 'ready',
    timestamp: new Date().toISOString()
  });
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({
    message: 'Bengal Bay Server is running!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Create order endpoint
app.post('/api/create-razorpay-order', async (req, res) => {
  try {
    const { amount, currency, receipt } = req.body;

    console.log('Creating order with amount:', amount);

    const options = {
      amount: amount,
      currency: currency || "INR",
      receipt: receipt || `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    console.log('Order created:', order.id);

    res.json({
      success: true,
      order: order
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to create order'
    });
  }
});

// Verify payment endpoint
app.post('/api/verify-payment', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    console.log('Verifying payment:', razorpay_payment_id);

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      console.log('Payment verified successfully:', razorpay_payment_id);
      res.json({
        success: true,
        message: "Payment verified successfully"
      });
    } else {
      console.log('Invalid signature for payment:', razorpay_payment_id);
      res.status(400).json({
        success: false,
        error: "Invalid signature"
      });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to verify payment'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Bengal Bay API Server',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      test: '/api/test',
      createOrder: '/api/create-razorpay-order',
      verifyPayment: '/api/verify-payment'
    }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// Graceful shutdown handling
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});

// Start server with proper error handling
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Bengal Bay Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🧪 Test endpoint: http://localhost:${PORT}/api/test`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔧 Process ID: ${process.pid}`);

  // Signal that the server is ready (important for Render)
  if (process.send) {
    process.send('ready');
  }
});

server.on('error', (error) => {
  console.error('Server error:', error);
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`);
  }
  process.exit(1);
});

// Timeout safety - if server doesn't start in 30 seconds, exit
const startupTimeout = setTimeout(() => {
  console.error('Server startup timeout - exiting');
  process.exit(1);
}, 30000);

server.on('listening', () => {
  clearTimeout(startupTimeout);
  console.log('✅ Server is listening and ready to accept connections');
});