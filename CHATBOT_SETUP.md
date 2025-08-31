# 🤖 Chatbot Integration Setup Guide

## Overview
This guide will help you integrate your Python chatbot with your React portfolio website. The chatbot will provide an AI-powered assistant that can answer questions about your professional background, skills, and projects.

## 🏗️ Architecture
- **Frontend**: React component with Material-UI
- **Backend**: FastAPI Python server
- **AI Model**: Google Gemini 2.5 Flash
- **Integration**: REST API communication

## 📋 Prerequisites
- Python 3.8+
- Node.js and npm (for React)
- Google API key for Gemini
- Pushover credentials (optional, for notifications)

## 🚀 Setup Steps

### Step 1: Install Python Dependencies
```bash
# Navigate to your portfolio directory
cd /path/to/your/portfolio

# Install Python dependencies
pip install -r requirements.txt
```

### Step 2: Environment Variables
Create a `.env` file in your portfolio root directory:

```env
# Required: Google Gemini API Key
GOOGLE_API_KEY=your_google_api_key_here

# Optional: Pushover notifications
PUSHOVER_USER=your_pushover_user_key
PUSHOVER_TOKEN=your_pushover_app_token
```

**To get Google API Key:**
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy and paste it to your `.env` file

### Step 3: Update File Paths
In `chatbot_api.py`, update these file paths to match your system:

```python
# Update these paths to your actual resume and summary files
reader = PdfReader(r"path/to/your/HassanIftikharResume.pdf")
with open(r"path/to/your/summary.txt", "r", encoding="utf-8") as f:
    summary = f.read()
```

### Step 4: Start the Backend
```bash
# Start the FastAPI server
python chatbot_api.py
```

The server will run on `http://localhost:8000`

### Step 5: Test the Backend
```bash
# Test if the API is running
curl http://localhost:8000/health

# Expected response:
# {"status": "healthy", "message": "Chatbot API is running"}
```

### Step 6: Start React Frontend
```bash
# In a new terminal, start your React app
npm start
```

## 🔧 Configuration Options

### CORS Settings
If you deploy to production, update the CORS origins in `chatbot_api.py`:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # Development
        "https://yourdomain.com",  # Production
        "https://www.yourdomain.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### API URL Configuration
In your React app, you can set the chatbot API URL via environment variable:

```bash
# Create .env file in React app root
REACT_APP_CHATBOT_API_URL=http://localhost:8000
```

## 🎯 Features

### What the Chatbot Can Do:
- ✅ Answer questions about your experience and skills
- ✅ Discuss your ML projects and research
- ✅ Provide information from your resume
- ✅ Record user interest and contact details
- ✅ Track unknown questions for improvement
- ✅ Multi-language support (EN/ES/RU)

### Tool Functions:
1. **`record_user_details`**: Records when users provide contact information
2. **`record_unknown_question`**: Tracks questions the bot couldn't answer

## 🚨 Troubleshooting

### Common Issues:

#### 1. "Module not found" errors
```bash
# Make sure you're in the right directory and have installed requirements
pip install -r requirements.txt
```

#### 2. API connection errors
- Check if the Python server is running on port 8000
- Verify CORS settings match your frontend URL
- Check browser console for CORS errors

#### 3. Gemini API errors
- Verify your `GOOGLE_API_KEY` is correct
- Check if you have sufficient API quota
- Ensure the API key has access to Gemini models

#### 4. File path errors
- Update the resume and summary file paths in `chatbot_api.py`
- Use absolute paths or relative paths from the script location

### Debug Mode
To see detailed logs, you can add logging to the Python script:

```python
import logging
logging.basicConfig(level=logging.DEBUG)
```

## 🚀 Production Deployment

### Option 1: Same Server
- Deploy both React and Python on the same server
- Use nginx to route `/api/*` to Python and `/*` to React

### Option 2: Separate Servers
- Deploy Python API on a cloud service (Heroku, Railway, etc.)
- Update CORS origins and API URL in React

### Option 3: Serverless
- Convert to AWS Lambda or similar serverless function
- Update the React component to call the serverless endpoint

## 📱 Usage

### For Users:
1. Click the "Chatbot" menu item or floating chat button
2. Type questions about your experience, skills, or projects
3. Get instant AI-powered responses
4. Provide contact information if interested in collaboration

### For You:
1. Monitor the Python console for user interactions
2. Check Pushover notifications (if configured)
3. Review unknown questions to improve responses
4. Track user interest and contact details

## 🔒 Security Considerations

- **API Keys**: Never commit `.env` files to version control
- **Rate Limiting**: Consider adding rate limiting for production
- **Input Validation**: The API validates all inputs using Pydantic
- **CORS**: Restrict origins to your actual domains

## 📈 Monitoring and Analytics

The chatbot automatically tracks:
- User questions and interactions
- Contact information from interested users
- Questions it couldn't answer
- API usage and errors

## 🎉 Success!

Once everything is set up:
- Users can chat with your AI assistant
- Get instant answers about your background
- Capture leads and interest automatically
- Provide a professional, engaging experience

Your portfolio now has a cutting-edge AI chatbot that represents you professionally! 🚀
