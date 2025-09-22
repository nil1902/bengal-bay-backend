# Bengal Bay Server

A Node.js backend server with Razorpay payment integration, ready for deployment on Render.

## Features

- Express.js REST API
- Razorpay payment gateway integration
- CORS enabled for frontend integration
- Health check endpoints
- Production-ready error handling

## API Endpoints

- `GET /` - API information
- `GET /health` - Health check
- `GET /api/test` - Test endpoint
- `POST /api/create-razorpay-order` - Create payment order
- `POST /api/verify-payment` - Verify payment signature

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy environment variables:
   ```bash
   copy .env.example .env
   ```

3. Update `.env` with your Razorpay credentials

4. Start development server:
   ```bash
   npm run dev
   ```

## Deployment on Render

### Option 1: Using render.yaml (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to Render
3. Render will automatically detect the `render.yaml` file
4. Set environment variables in Render dashboard:
   - `RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`
   - `FRONTEND_URL` (optional)

### Option 2: Manual Setup

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Node
4. Add environment variables in the Render dashboard

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RAZORPAY_KEY_ID` | Your Razorpay Key ID | Yes |
| `RAZORPAY_KEY_SECRET` | Your Razorpay Key Secret | Yes |
| `PORT` | Server port (auto-set by Render) | No |
| `NODE_ENV` | Environment (production/development) | No |
| `FRONTEND_URL` | Frontend domain for CORS | No |

## Testing

After deployment, test your endpoints:

- Health check: `https://your-app.onrender.com/health`
- API test: `https://your-app.onrender.com/api/test`