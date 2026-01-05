-- Add category column to testimonials table
ALTER TABLE testimonials 
ADD COLUMN IF NOT EXISTS category text DEFAULT 'customer_reviews';

-- Add check constraint for valid categories
ALTER TABLE testimonials 
ADD CONSTRAINT testimonials_category_check 
CHECK (category IN ('proof_of_transactions', 'proof_of_delivered', 'customer_reviews'));

-- Update existing records to have a default category if any are null (though default handles new ones)
UPDATE testimonials 
SET category = 'customer_reviews' 
WHERE category IS NULL;
