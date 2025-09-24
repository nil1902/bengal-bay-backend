# Environment Variables Setup Guide 🔧

## 🚀 Backend (Render) Environment Variables

### Required Variables:
```
RAZORPAY_KEY_ID=your_razorpay_key_id_here
RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here
FRONTEND_URL=https://nil-s-kitchen.vercel.app/
NODE_ENV=production
```

### Google Sheets Variables:
```
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCmOt8pOgsEw//Q\nobzUOjBuhC++8cG2NyQkAQrMvmRUDf9jW+fXA0b2EBje1OIMrGw0WGU5+tPfqPAX\n59LuMomC2Zd4eu3yty+FEmBGiFnzwTNCGk2yiFRDdJJzFEv9kTlCdtncp7VKnkHQ\nAn2hfo/Voc0TgDcChrOblJXjHqhDi3oBSC/r7uJVQoQN3kLDzIqBeuuHpB/Ypsjp\ndo0dmSkzcrDwYho6VkVKqBfGBWSq63P54CU+FZs+FSlBaZuRTtc7ZK0wvD2NIKp4\ngTgi+Vz5zFCt1O0i8NZ/lwbR7VO9ZUc1sk4FjyXV7D6s3wiQ+GpT7fD6JTzr1fiZ\nC4DwUyg1AgMBAAECggEAFmywuDYNUHpEY1e+Sn8DE5Wff0nL0RIFPRoq4833aONu\nhW/bicT2aLFpOX5MdFs6SaF3Hmg49t4qbX8nlFya8lz6MxWaTfjqXzBIbptsTxbM\nHGnB+4iqnWL3crDVQ4K4z7+KylqReVx6El6TphqVusMWEEBmq1+SkTVtNvNmzZ2m\nkclnx8DypUEcdb3HVEXgdn3xzxVQ0pAh36euHbukcwsISxMoGQyppXThW58i6gRi\nGBadHbbMLjYaWjubvLLg9fZljaNVf52+XSOxC0PYoZsDAWTGaspc+EknrJhiz3x\nOxbOXkijCRFpUS86QfFL7bnyFKsdPOUt2OL1e6zGrQKBgQDQOxGX3oTp0dY0+Y6N\nH9QAGZMBLb8rkcGwUfU8ym71tDcoxeuGTgsSQ3B2Cvyy8YFKy3/dQGZlKSbCtYud\nKmB5mzaq6oeSScUnc1ZktdWgdcyvPDadf+ezLP+ZdNqM5Xxw49l97d2GeyH7leT/\nfIKZjDDnOBO7DCqaCTN5xHyKowKBgQDMXTDJTUx7Y33dUMO785CgDeYch/WxiW/m\nAwgcTtQUqwAEf/UNeW6meOmK9OcW+p1se1eZa6Z5/ux05rE0D59GAhHDq2cnAVfz\nfNO4RfeXWR7MuF5uPH6yIeYzt4C+oXyzqJGvBa7cx2Qfg7g8EQcBManCTkvxeEjP\nhHDY2izHRwKBgAu7CCayFnLFq3eYh3tTy7Glvy5V0Ws27t5r/5DJJq8Y0/KsE7Sh\nOOZyfidoPwwlps7739wrAJm6U8CsUY0tEfpH0DCYvcJz/XNXgAp0Y/CCMmG81qbQ\nydDCPDP87UL6uqPxchMyD0TAMw3lR91Mul7EEw0zj4j+CnhbBFdbxlhZAoGBAIcc\nFWUA9c+dt1jaTI22OaeXiMrUGFuHwbMPzgzpEM2ZQCm5bwm5fq4QwlZcE2vdxLYz\n1XZY9XcyUqH24rDIo0RlmdkDOO9QtBUGMfNiTo6BHRu7yLKYzCp4vvjyGOvvV8Jv\nb+GGoFTWfhtXujX8C+V+L/2GRi8elwSbSwATPgeBAoGAUzW4x699bxJqVaaL5WoH\nvmgN2JKyNd/aO+2rZqGMzXc8F+T3k27Ug12rBRU7wvewB9ASMegVM3URg/HhhCxr\np+qBPm3QZpGQPW66k+Tstg8qmK7kU5Jubp4TAU4cYCoyCbWL3YPtOa4fKDFUKJJ8\n9ybCM52t2hCIrQ340WVkMM8=\n-----END PRIVATE KEY-----\n"

GOOGLE_SHEETS_CLIENT_EMAIL=bengal-bay-sheets@restaurantdatasheet.iam.gserviceaccount.com

GOOGLE_SHEET_ID=1Z_ujaIqaXoReK-75BR9vcxLGxHd5ctI3683DOayFwpU
```

## 🌐 Frontend (Vercel) Environment Variables

### For your frontend to communicate with backend:
```
NEXT_PUBLIC_API_URL=https://your-render-app.onrender.com
RAZORPAY_KEY_ID=your_razorpay_key_id_here
```

### If you want Google Sheets access from frontend too:
```
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCmOt8pOgsEw//Q\nobzUOjBuhC++8cG2NyQkAQrMvmRUDf9jW+fXA0b2EBje1OIMrGw0WGU5+tPfqPAX\n59LuMomC2Zd4eu3yty+FEmBGiFnzwTNCGk2yiFRDdJJzFEv9kTlCdtncp7VKnkHQ\nAn2hfo/Voc0TgDcChrOblJXjHqhDi3oBSC/r7uJVQoQN3kLDzIqBeuuHpB/Ypsjp\ndo0dmSkzcrDwYho6VkVKqBfGBWSq63P54CU+FZs+FSlBaZuRTtc7ZK0wvD2NIKp4\ngTgi+Vz5zFCt1O0i8NZ/lwbR7VO9ZUc1sk4FjyXV7D6s3wiQ+GpT7fD6JTzr1fiZ\nC4DwUyg1AgMBAAECggEAFmywuDYNUHpEY1e+Sn8DE5Wff0nL0RIFPRoq4833aONu\nhW/bicT2aLFpOX5MdFs6SaF3Hmg49t4qbX8nlFya8lz6MxWaTfjqXzBIbptsTxbM\nHGnB+4iqnWL3crDVQ4K4z7+KylqReVx6El6TphqVusMWEEBmq1+SkTVtNvNmzZ2m\nkclnx8DypUEcdb3HVEXgdn3xzxVQ0pAh36euHbukcwsISxMoGQyppXThW58i6gRi\nGBadHbbMLjYaWjubvLLg9fZljaNVf52+XSOxC0PYoZsDAWTGaspc+EknrJhiz3x\nOxbOXkijCRFpUS86QfFL7bnyFKsdPOUt2OL1e6zGrQKBgQDQOxGX3oTp0dY0+Y6N\nH9QAGZMBLb8rkcGwUfU8ym71tDcoxeuGTgsSQ3B2Cvyy8YFKy3/dQGZlKSbCtYud\nKmB5mzaq6oeSScUnc1ZktdWgdcyvPDadf+ezLP+ZdNqM5Xxw49l97d2GeyH7leT/\nfIKZjDDnOBO7DCqaCTN5xHyKowKBgQDMXTDJTUx7Y33dUMO785CgDeYch/WxiW/m\nAwgcTtQUqwAEf/UNeW6meOmK9OcW+p1se1eZa6Z5/ux05rE0D59GAhHDq2cnAVfz\nfNO4RfeXWR7MuF5uPH6yIeYzt4C+oXyzqJGvBa7cx2Qfg7g8EQcBManCTkvxeEjP\nhHDY2izHRwKBgAu7CCayFnLFq3eYh3tTy7Glvy5V0Ws27t5r/5DJJq8Y0/KsE7Sh\nOOZyfidoPwwlps7739wrAJm6U8CsUY0tEfpH0DCYvcJz/XNXgAp0Y/CCMmG81qbQ\nydDCPDP87UL6uqPxchMyD0TAMw3lR91Mul7EEw0zj4j+CnhbBFdbxlhZAoGBAIcc\nFWUA9c+dt1jaTI22OaeXiMrUGFuHwbMPzgzpEM2ZQCm5bwm5fq4QwlZcE2vdxLYz\n1XZY9XcyUqH24rDIo0RlmdkDOO9QtBUGMfNiTo6BHRu7yLKYzCp4vvjyGOvvV8Jv\nb+GGoFTWfhtXujX8C+V+L/2GRi8elwSbSwATPgeBAoGAUzW4x699bxJqVaaL5WoH\nvmgN2JKyNd/aO+2rZqGMzXc8F+T3k27Ug12rBRU7wvewB9ASMegVM3URg/HhhCxr\np+qBPm3QZpGQPW66k+Tstg8qmK7kU5Jubp4TAU4cYCoyCbWL3YPtOa4fKDFUKJJ8\n9ybCM52t2hCIrQ340WVkMM8=\n-----END PRIVATE KEY-----\n"

GOOGLE_SHEETS_CLIENT_EMAIL=bengal-bay-sheets@restaurantdatasheet.iam.gserviceaccount.com

GOOGLE_SHEET_ID=1Z_ujaIqaXoReK-75BR9vcxLGxHd5ctI3683DOayFwpU
```

## 📋 Step-by-Step Setup Instructions

### 1. Render (Backend) Setup:
1. Go to your Render dashboard
2. Select your web service
3. Go to "Environment" tab
4. Add each variable one by one
5. **Important**: For `GOOGLE_SHEETS_PRIVATE_KEY`, make sure to include the quotes and all the `\n` characters exactly as shown

### 2. Vercel (Frontend) Setup:
1. Go to your Vercel dashboard
2. Select your project
3. Go to "Settings" → "Environment Variables"
4. Add each variable
5. **Important**: For `GOOGLE_SHEETS_PRIVATE_KEY`, paste the entire value including quotes

## ⚠️ Important Notes:

### For Private Key:
- **Always include the quotes** around the private key
- **Keep all the `\n` characters** - they represent line breaks
- **Don't modify the key format** - paste exactly as provided

### Security:
- Never commit these values to Git
- These are already in your `.env.example` for reference only
- The actual values should only be in your deployment platforms

### Testing:
After setting up, test your endpoints:
- Backend: `https://your-render-app.onrender.com/api/test-sheets`
- Frontend: Make sure it can call your backend APIs

## 🔗 API Endpoints Available:

Your backend will have these endpoints once deployed:
- `POST /api/log-order` - Log order to Google Sheets
- `GET /api/orders` - Get all orders from Google Sheets
- `POST /api/update-payment-status` - Update payment status
- `GET /api/test-sheets` - Test Google Sheets connection

Perfect setup for both platforms! 🚀