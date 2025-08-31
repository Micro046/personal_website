# 🚀 UV Setup Guide for Chatbot

## What is UV?
UV is a fast Python package installer and resolver, written in Rust. It's much faster than pip and provides better dependency resolution.

## 📋 Prerequisites
- Python 3.8+ installed
- UV installed (if not, see installation below)

## 🔧 Install UV (if not already installed)

### Windows (PowerShell):
```powershell
# Install UV using PowerShell
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
```

### Alternative Windows installation:
```bash
# Using pip
pip install uv
```

### macOS/Linux:
```bash
# Install UV
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## 🚀 Setup Steps with UV

### Step 1: Install Dependencies with UV (Recommended)
```bash
# Navigate to your portfolio directory
cd /path/to/your/portfolio

# Install dependencies using UV sync (modern approach)
uv sync

# Or if you prefer the traditional approach:
# uv pip install -r requirements.txt
```

### Step 2: Create Virtual Environment (Optional but Recommended)
```bash
# Create a new virtual environment
uv venv

# Activate the virtual environment
# On Windows:
.venv\Scripts\activate

# On macOS/Linux:
source .venv/bin/activate
```

### Step 3: Install Dependencies in Virtual Environment
```bash
# Install dependencies in the virtual environment
uv sync

# Or if you prefer the traditional approach:
# uv pip install -r requirements.txt
```

## 🔧 Alternative UV Commands

### Using UV with pyproject.toml (Modern approach):
The project now includes a `pyproject.toml` file for modern dependency management:

```bash
# Install all dependencies using pyproject.toml
uv sync

# Add new dependencies
uv add package-name

# Add development dependencies
uv add --dev package-name

# Remove dependencies
uv remove package-name
```

### Using UV for Development:
```bash
# Install in development mode
uv pip install -e .

# Install with dev dependencies
uv pip install -r requirements.txt --dev
```

## 🚨 Troubleshooting UV Issues

### Common UV Issues:

#### 1. "uv command not found"
```bash
# Make sure UV is in your PATH
# On Windows, restart PowerShell after installation
# On macOS/Linux, restart terminal or run:
source ~/.bashrc
```

#### 2. "Permission denied" on Windows
```powershell
# Run PowerShell as Administrator
# Or use the user installation:
powershell -c "irm https://astral.sh/uv/install.ps1 | iex -s -- --user"
```

#### 3. "SSL certificate errors"
```bash
# Try updating UV
uv self update

# Or install with trusted hosts
uv pip install -r requirements.txt --trusted-host pypi.org --trusted-host pypi.python.org
```

#### 4. "Package not found"
```bash
# Update UV and try again
uv self update
uv pip install -r requirements.txt
```

## 🎯 UV vs Pip Comparison

| Feature | UV | Pip |
|---------|----|-----|
| Speed | ⚡ Very Fast | 🐌 Slower |
| Dependency Resolution | ✅ Better | ⚠️ Basic |
| Lock Files | ✅ Yes | ❌ No |
| Virtual Environments | ✅ Built-in | ⚠️ External |
| Cross-platform | ✅ Yes | ✅ Yes |

## 🚀 Start the Chatbot with UV

### Option 1: Direct execution
```bash
# Make sure you're in the virtual environment
uv run python chatbot_api.py
```

### Option 2: Using UV run
```bash
# UV will automatically create a virtual environment and run
uv run python chatbot_api.py
```

### Option 3: Development mode
```bash
# Install in development mode and run
uv pip install -e .
uv run python chatbot_api.py
```

## 📁 File Structure Check

Make sure your project structure looks like this:
```
portfolio/
├── resume/
│   ├── HassanIftikharResume.pdf
│   └── summary.txt
├── src/
│   └── components/
│       └── Chatbot.jsx
├── chatbot_api.py
├── pyproject.toml          # ✅ Modern dependency management
├── requirements.txt        # ✅ Legacy support (optional)
├── .env
└── UV_SETUP.md
```

## 🔧 Environment Variables

Make sure your `.env` file contains:
```env
# Required: Google Gemini API Key
GOOGLE_API_KEY=your_google_api_key_here

# Optional: Pushover notifications
PUSHOVER_USER=your_pushover_user_key
PUSHOVER_TOKEN=your_pushover_app_token
```

## 🎉 Success!

Once everything is set up with UV:
1. ✅ Dependencies installed with UV
2. ✅ Virtual environment created (optional)
3. ✅ Resume files in place
4. ✅ Environment variables set
5. ✅ Start the backend: `uv run python chatbot_api.py`
6. ✅ Start React: `npm start`

Your chatbot should now work perfectly with UV! 🚀

## 🔄 Updating Dependencies

To update dependencies with UV:
```bash
# Update all packages
uv pip install --upgrade -r requirements.txt

# Update specific package
uv pip install --upgrade fastapi
```

## 📚 UV Documentation

For more information about UV:
- Official docs: https://docs.astral.sh/uv/
- GitHub: https://github.com/astral-sh/uv
- Installation guide: https://docs.astral.sh/uv/getting-started/installation/
