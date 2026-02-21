import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from supabase import create_client, Client
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()

app = Flask(__name__)
CORS(app)

# ── Supabase client ──────────────────────────────────────────
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    print("⚠️  SUPABASE_URL and SUPABASE_KEY must be set in .env")

supabase: Client = create_client(SUPABASE_URL or "", SUPABASE_KEY or "")


# ── GET /api/messages ────────────────────────────────────────
@app.route("/api/messages", methods=["GET"])
def get_messages():
    """Retrieve all guestbook messages, newest first."""
    try:
        response = (
            supabase.table("guestbook_messages")
            .select("*")
            .order("created_at", desc=True)
            .execute()
        )
        return jsonify(response.data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ── POST /api/messages ───────────────────────────────────────
@app.route("/api/messages", methods=["POST"])
def create_message():
    """Create a new guestbook message."""
    data = request.get_json()

    if not data:
        return jsonify({"error": "Request body is required"}), 400

    name = data.get("name", "").strip()
    message = data.get("message", "").strip()

    if not name or not message:
        return jsonify({"error": "Both 'name' and 'message' are required"}), 400

    if len(name) > 100:
        return jsonify({"error": "Name must be 100 characters or fewer"}), 400

    if len(message) > 500:
        return jsonify({"error": "Message must be 500 characters or fewer"}), 400

    try:
        response = (
            supabase.table("guestbook_messages")
            .insert({"name": name, "message": message})
            .execute()
        )
        return jsonify(response.data[0]), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ── Health check ─────────────────────────────────────────────
@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok", "timestamp": datetime.utcnow().isoformat()})


if __name__ == "__main__":
    app.run(debug=True, port=5000)
