# Hassan Portfolio - AI-Powered Portfolio Website

A modern, AI-powered portfolio website for Hassan Iftikhar featuring an intelligent chatbot that can answer questions about his experience, skills, and projects.

## Features

- 🤖 AI-powered chatbot using Google Gemini
- 💬 Real-time chat interface with full conversation history
- 📄 Resume and summary integration
- 🌐 Multi-language support (English, Spanish, Russian)
- 📧 Contact tracking and notifications
- 🚀 FastAPI backend with React frontend
- 🎨 Modern Material-UI design
- 📱 Responsive design for all devices

## Quick Start

1. **Install dependencies:**
   ```bash
   # Python dependencies
   uv sync
   
   # React dependencies
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   # Copy the template
   cp env.template .env
   
   # Edit .env with your actual values
   GOOGLE_API_KEY=your_google_api_key_here
   PUSHOVER_USER=your_pushover_user_key  # Optional
   PUSHOVER_TOKEN=your_pushover_app_token  # Optional
   ```

3. **Start the backend:**
   ```bash
   uv run python chatbot_api.py
   ```

4. **Start the React frontend:**
   ```bash
   npm start
   ```

## Architecture

- **Backend:** FastAPI with Google Gemini AI
- **Frontend:** React with Material-UI
- **Package Manager:** UV for Python dependencies
- **AI Model:** Google Gemini 2.5 Flash
- **Deployment:** Render.com with Docker

## File Structure

```
hassan-portfolio/
├── resume/
│   ├── HassanIftikharResume.pdf
│   └── summary.txt
├── src/
│   ├── components/
│   │   └── Chatbot.jsx
│   └── pages/
│       └── Chatbot.jsx
├── chatbot_api.py
├── pyproject.toml
├── requirements.txt
├── render.yaml
├── .env
└── README.md
```

## API Endpoints

- `POST /chat` - Chat with the AI assistant
- `GET /health` - Health check
- `GET /` - API information

## Deployment

The project is configured for deployment on Render.com:

- **Backend Service:** `hassan-portfolio-api`
- **Frontend Service:** `hassan-portfolio-frontend`

## Development

This project uses UV for Python dependency management and npm for React dependencies.

For more detailed setup instructions, see `UV_SETUP.md` and `CHATBOT_SETUP.md`.
