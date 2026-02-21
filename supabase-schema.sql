-- =============================================
-- Supabase Schema for Anti-Gravity Portfolio
-- Run this in the Supabase SQL Editor
-- =============================================

-- Guestbook messages table
CREATE TABLE guestbook_messages (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE guestbook_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read messages
CREATE POLICY "Allow public read"
  ON guestbook_messages
  FOR SELECT
  USING (true);

-- Allow anyone to insert messages
CREATE POLICY "Allow public insert"
  ON guestbook_messages
  FOR INSERT
  WITH CHECK (true);
