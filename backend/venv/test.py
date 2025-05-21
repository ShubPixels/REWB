from backend.venv.app import app  # Import the app instance from app.py
import requests

# Test the /test-smtp route
response = requests.get("http://127.0.0.1:5000/test-smtp")
print(response.json())