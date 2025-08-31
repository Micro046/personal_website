# 🚀 Deployment Guide for Portfolio Website

## Deploying on Render (Free Tier)

### ✅ What's Already Done:
- ✅ Code pushed to GitHub: https://github.com/Micro046/personal_website.git
- ✅ Render configuration files created (`render.yaml`)
- ✅ Environment variables template created (`env.template`)

### 🎯 Next Steps:

#### 1. Go to Render.com
- Visit [render.com](https://render.com)
- Sign up with your GitHub account
- Connect your `personal_website` repository

#### 2. Deploy Backend First
- Click "New +" → "Web Service"
- Connect your GitHub repository
- Render will auto-detect the `render.yaml` configuration
- Set environment variables:
  - `GOOGLE_API_KEY`: Your Google API key
  - `PUSHOVER_USER`: Your Pushover user ID
  - `PUSHOVER_TOKEN`: Your Pushover token
- Click "Create Web Service"

#### 3. Deploy Frontend
- Click "New +" → "Static Site"
- Connect your GitHub repository
- Render will auto-detect the configuration
- Click "Create Static Site"

#### 4. Update CORS in Backend
After backend deploys, update `chatbot_api.py`:
```python
allow_origins=[
    "http://localhost:3000", 
    "https://portfolio-frontend.onrender.com",
    "https://hassaniftikhar.github.io"
]
```

### 🔑 Required Environment Variables:
- `GOOGLE_API_KEY`: For Gemini AI chatbot
- `PUSHOVER_USER`: For notifications
- `PUSHOVER_TOKEN`: For notifications

### 📱 Your App URLs:
- **Backend**: `https://portfolio-backend.onrender.com`
- **Frontend**: `https://portfolio-frontend.onrender.com`

### ⚠️ Important Notes:
- Free tier: 750 hours/month backend runtime
- Backend will auto-pause after 750 hours
- You can manually resume when needed
- Frontend is unlimited (static hosting)

### 🆘 Need Help?
- Check Render logs in dashboard
- Verify environment variables are set
- Ensure CORS origins are updated
