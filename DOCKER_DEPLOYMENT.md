# 🐳 Docker Deployment Guide for Portfolio Website

## 🚀 **Deployment Options with Docker**

### **Option 1: Render with Docker (Recommended)**
- ✅ **No GitHub permission issues**
- ✅ **Uses your Dockerfile**
- ✅ **Easy environment variable setup**

### **Option 2: Railway with Docker**
- ✅ **Great free tier**
- ✅ **Automatic deployments**
- ✅ **Easy scaling**

### **Option 3: Fly.io with Docker**
- ✅ **Generous free tier**
- ✅ **Global edge deployment**
- ✅ **Great performance**

## 🎯 **Step-by-Step Docker Deployment on Render**

### **Step 1: Update render.yaml for Docker**
```yaml
services:
  - type: web
    name: portfolio-backend
    env: docker
    dockerfilePath: ./Dockerfile
    envVars:
      - key: GOOGLE_API_KEY
        sync: false
      - key: PUSHOVER_USER
        sync: false
      - key: PUSHOVER_TOKEN
        sync: false

  - type: web
    name: portfolio-frontend
    env: docker
    dockerfilePath: ./Dockerfile.frontend.prod
    envVars:
      - key: REACT_APP_API_URL
        value: https://portfolio-backend.onrender.com
```

### **Step 2: Deploy on Render**
1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Render will auto-detect Docker
5. Set environment variables
6. Deploy!

## 🔧 **Local Testing with Docker**

### **Test Backend Only:**
```bash
docker build -t portfolio-backend .
docker run -p 8000:8000 -e GOOGLE_API_KEY=your_key portfolio-backend
```

### **Test Full Stack:**
```bash
docker-compose up --build
```

### **Test Production Frontend:**
```bash
docker build -f Dockerfile.frontend.prod -t portfolio-frontend .
docker run -p 80:80 portfolio-frontend
```

## 📱 **Your App URLs After Deployment:**
- **Backend**: `https://portfolio-backend.onrender.com`
- **Frontend**: `https://portfolio-frontend.onrender.com`

## 🔑 **Required Environment Variables:**
- `GOOGLE_API_KEY` - For Gemini AI chatbot
- `PUSHOVER_USER` - For notifications
- `PUSHOVER_TOKEN` - For notifications

## ⚠️ **Important Notes:**
- Docker builds take longer but are more reliable
- Environment variables are set in Render dashboard
- Health checks ensure your app stays running
- Automatic restarts on failure

## 🆘 **Troubleshooting:**
- Check Render logs for build errors
- Verify environment variables are set
- Ensure Dockerfile paths are correct
- Check if ports are properly exposed

## 🎉 **Ready to Deploy?**
1. **Commit and push these Docker files**
2. **Go to render.com**
3. **Create new Web Service**
4. **Select Docker deployment**
5. **Set environment variables**
6. **Deploy!**

**Your portfolio will be live in minutes!** 🚀
