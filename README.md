# Hassan Iftikhar Portfolio Chatbot

An AI-powered chatbot for Hassan Iftikhar's portfolio website that can answer questions about his experience, skills, and projects.

## Features

- 🤖 AI-powered chatbot using Google Gemini
- 💬 Real-time chat interface
- 📄 Resume and summary integration
- 🌐 Multi-language support (English, Spanish, Russian)
- 📧 Contact tracking and notifications
- 🚀 FastAPI backend with React frontend

## Quick Start

1. **Install dependencies:**
   ```bash
   uv sync
   ```

2. **Set up environment variables:**
   ```bash
   # Create .env file
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

## File Structure

```
portfolio/
├── resume/
│   ├── HassanIftikharResume.pdf
│   └── summary.txt
├── src/
│   └── components/
│       └── Chatbot.jsx
├── chatbot_api.py
├── pyproject.toml
├── requirements.txt
├── .env
└── README.md
```

## API Endpoints

- `POST /chat` - Chat with the AI assistant
- `GET /health` - Health check
- `GET /` - API information

## Development

This project uses UV for Python dependency management and npm for React dependencies.

For more detailed setup instructions, see `UV_SETUP.md` and `CHATBOT_SETUP.md`.
