# Render Deployment Checklist ✅

## Pre-deployment Verification

### 1. Dependencies ✅
- [x] All required dependencies in package.json
- [x] Google Sheets dependencies added
- [x] Removed crypto (built-in Node.js module)
- [x] Node.js version specified (>=18.0.0)

### 2. Environment Variables 🔧
**Required for Render Dashboard:**
- `RAZORPAY_KEY_ID` - Your Razorpay key ID
- `RAZORPAY_KEY_SECRET` - Your Razorpay secret key
- `FRONTEND_URL` - Your frontend URL (e.g., https://nil-s-kitchen.vercel.app/)

**Optional (for Google Sheets):**
- `GOOGLE_SHEETS_PRIVATE_KEY` - Service account private key
- `GOOGLE_SHEETS_CLIENT_EMAIL` - Service account email
- `GOOGLE_SHEET_ID` - Google Sheet ID

### 3. Render Configuration ✅
- [x] render.yaml configured with all env vars
- [x] Health check endpoint: `/health`
- [x] Readiness probe: `/ready`
- [x] Proper start command: `npm start`
- [x] Build command: `npm install`

### 4. Server Configuration ✅
- [x] Listens on `0.0.0.0` (not localhost)
- [x] Uses `process.env.PORT` for dynamic port
- [x] CORS configured for frontend URL
- [x] Graceful shutdown handling
- [x] Error handling middleware
- [x] 404 handler
- [x] Startup timeout protection

### 5. Endpoints Ready ✅
- [x] `/` - API documentation
- [x] `/health` - Health check
- [x] `/ready` - Readiness probe
- [x] `/api/test` - Basic test
- [x] `/api/create-razorpay-order` - Create payment order
- [x] `/api/verify-payment` - Verify payment
- [x] `/api/log-order` - Log to Google Sheets (optional)
- [x] `/api/update-payment-status` - Update payment status (optional)
- [x] `/api/orders` - Get all orders (optional)
- [x] `/api/test-sheets` - Test Google Sheets connection (optional)

## Deployment Steps

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "feat: optimize for Render deployment"
   git push origin main
   ```

2. **In Render Dashboard:**
   - Connect your GitHub repository
   - Select "Web Service"
   - Choose your repository and branch
   - Render will auto-detect the render.yaml configuration

3. **Set Environment Variables:**
   - Go to Environment tab in Render dashboard
   - Add all required environment variables
   - Make sure to paste the exact values (especially for Google Sheets private key)

4. **Deploy:**
   - Click "Create Web Service"
   - Monitor the build logs
   - Wait for deployment to complete

## Testing After Deployment

1. **Basic Health Check:**
   ```
   GET https://your-app.onrender.com/health
   ```

2. **API Test:**
   ```
   GET https://your-app.onrender.com/api/test
   ```

3. **Payment Flow Test:**
   - Create order: `POST /api/create-razorpay-order`
   - Verify payment: `POST /api/verify-payment`

## Important Notes

- ✅ Server gracefully handles missing Google Sheets credentials
- ✅ Razorpay will work even if Google Sheets is not configured
- ✅ All endpoints have proper error handling
- ✅ CORS is configured for your frontend
- ✅ Server binds to 0.0.0.0 (required for Render)
- ✅ Health checks are properly configured

## Troubleshooting

If deployment fails:
1. Check build logs in Render dashboard
2. Verify all environment variables are set correctly
3. Ensure your GitHub repository is accessible
4. Check that render.yaml is in the root directory

Your backend is now ready for Render deployment! 🚀