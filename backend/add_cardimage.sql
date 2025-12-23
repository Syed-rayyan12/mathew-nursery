-- Add cardImage column to nurseries table
ALTER TABLE nurseries ADD COLUMN IF NOT EXISTS "cardImage" TEXT;

-- Drop rating column if exists
ALTER TABLE nurseries DROP COLUMN IF EXISTS rating;
