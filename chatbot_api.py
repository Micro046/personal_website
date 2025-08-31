from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from openai import OpenAI
import json
import os
import requests
from pypdf import PdfReader
from typing import List, Optional

# Load environment variables
load_dotenv(override=True)

app = FastAPI(title="Hassan Iftikhar Portfolio Chatbot API")

# Add CORS middleware to allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://hassan-portfolio-frontend.onrender.com", "https://hassan-portfolio-api.onrender.com", "https://portfolio-frontend-tbsb.onrender.com"],  # Add your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health_check():
    return {"message": "Hassan Iftikhar Portfolio Chatbot API", "status": "running"}

# Initialize Gemini
google_api_key = os.getenv("GOOGLE_API_KEY")
gemini = OpenAI(
    api_key=google_api_key,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)
model_name = "gemini-2.5-flash"

# Pushover configuration
pushover_user = os.getenv("PUSHOVER_USER")
pushover_token = os.getenv("PUSHOVER_TOKEN")
pushover_url = "https://api.pushover.net/1/messages.json"

# Pydantic models for API
class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    message: str
    history: List[ChatMessage] = []

class ChatResponse(BaseModel):
    response: str
    success: bool

# Load resume and summary
def load_resume_and_summary():
    try:
        # Load resume PDF - update this path to your resume folder
        resume_path = "resume/HassanIftikharResume.pdf"  # Adjust filename if different
        reader = PdfReader(resume_path)
        linkedin = ""
        for page in reader.pages:
            text = page.extract_text()
            if text:
                linkedin += text
        
        # Load summary - update this path to your resume folder
        summary_path = "resume/summary.txt"
        with open(summary_path, "r", encoding="utf-8") as f:
            summary = f.read()
        
        return summary, linkedin
    except Exception as e:
        print(f"Error loading resume/summary: {e}")
        print(f"Make sure your resume folder contains the PDF and summary.txt files")
        return "Error loading resume", "Error loading summary"

# Load data once at startup
summary, linkedin = load_resume_and_summary()
name = "Hassan Iftikhar"

# System prompt
system_prompt = f"""You are acting as {name}. You are answering questions on {name}'s website, \
particularly questions related to {name}'s career, background, skills and experience. \
Your responsibility is to represent {name} for interactions on the website as faithfully as possible. \
You are given a summary of {name}'s background and LinkedIn profile which you can use to answer questions. \
Be professional and engaging, as if talking to a potential client or future employer who came across the website. \
If you don't know the answer to any question, use your record_unknown_question tool to record the question that you couldn't answer, even if it's about something trivial or unrelated to career. \
If the user is engaging in discussion, try to steer them towards getting in touch via email; ask for their email and record it using your record_user_details tool."""

system_prompt += f"\n\n## Summary:\n{summary}\n\n## LinkedIn Profile:\n{linkedin}\n\n"
system_prompt += f"With this context, please chat with the user, always staying in character as {name}."

# Tool definitions
record_user_details_json = {
    "name": "record_user_details",
    "description": "Use this tool to record that a user is interested in being in touch and provided an email address",
    "parameters": {
        "type": "object",
        "properties": {
            "email": {
                "type": "string",
                "description": "The email address of this user"
            },
            "name": {
                "type": "string",
                "description": "The user's name, if they provided it"
            },
            "notes": {
                "type": "string",
                "description": "Any additional information about the conversation that's worth recording to give context"
            }
        },
        "required": ["email"],
        "additionalProperties": False
    }
}

record_unknown_question_json = {
    "name": "record_unknown_question",
    "description": "Always use this tool to record any question that couldn't be answered as you didn't know the answer",
    "parameters": {
        "type": "object",
        "properties": {
            "question": {
                "type": "string",
                "description": "The question that couldn't be answered"
            },
        },
        "required": ["question"],
        "additionalProperties": False
    }
}

tools = [{"type": "function", "function": record_user_details_json},
         {"type": "function", "function": record_unknown_question_json}]

# Tool functions
def push(message):
    print(f"Push: {message}")
    if pushover_user and pushover_token:
        payload = {"user": pushover_user, "token": pushover_token, "message": message}
        try:
            requests.post(pushover_url, data=payload)
        except Exception as e:
            print(f"Pushover error: {e}")

def record_user_details(email, name="Name not provided", notes="not provided"):
    push(f"Recording interest from {name} with email {email} and notes {notes}")
    return {"recorded": "ok"}

def record_unknown_question(question):
    push(f"Recording {question} asked that I couldn't answer")
    return {"recorded": "ok"}

def handle_tool_calls(tool_calls):
    results = []
    for tool_call in tool_calls:
        tool_name = tool_call.function.name
        arguments = json.loads(tool_call.function.arguments)
        print(f"Tool called: {tool_name}", flush=True)

        tool = globals().get(tool_name)
        result = tool(**arguments) if tool else {}

        results.append({
            "role": "tool",
            "content": json.dumps(result),
            "tool_call_id": tool_call.id
        })
    return results

# Chat endpoint
@app.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    try:
        # Prepare messages
        messages = [{"role": "system", "content": system_prompt}] + [msg.dict() for msg in request.history] + [{"role": "user", "content": request.message}]
        
        done = False
        while not done:
            # Call Gemini
            response = gemini.chat.completions.create(
                model=model_name,
                messages=messages,
                tools=tools
            )

            finish_reason = response.choices[0].finish_reason

            # Handle tool calls
            if finish_reason == "tool_calls":
                message = response.choices[0].message
                tool_calls = message.tool_calls
                results = handle_tool_calls(tool_calls)
                messages.append(message)
                messages.extend(results)
            else:
                done = True

        return ChatResponse(
            response=response.choices[0].message.content,
            success=True
        )
    
    except Exception as e:
        print(f"Chat error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy", "message": "Chatbot API is running"}

# Root endpoint
@app.get("/")
async def root():
    return {"message": "Hassan Iftikhar Portfolio Chatbot API", "status": "running"}

def main():
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

if __name__ == "__main__":
    main()
