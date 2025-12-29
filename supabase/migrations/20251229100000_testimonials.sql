-- Create testimonials table for customer reviews with chat screenshots
CREATE TABLE IF NOT EXISTS testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_testimonials_active ON testimonials(is_active);
CREATE INDEX IF NOT EXISTS idx_testimonials_order ON testimonials(display_order);

-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to active testimonials"
    ON testimonials FOR SELECT
    USING (is_active = true);

CREATE POLICY "Allow all operations for authenticated users"
    ON testimonials FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_testimonials_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_testimonials_updated_at
    BEFORE UPDATE ON testimonials
    FOR EACH ROW
    EXECUTE FUNCTION update_testimonials_updated_at();

-- Insert real testimonials
INSERT INTO testimonials (title, description, image_url, display_order) VALUES
(
    'Visible Weight Loss in 5 Weeks',
    'Customer shares excitement about visible weight loss results in just 5 weeks - friends noticed the difference, clothes are fitting looser again!',
    '/testimonials/review1.jpg',
    1
),
(
    'Effective Appetite Suppression',
    'Customer reports significant appetite suppression - didn''t feel the urge to eat all day, much more effective than before.',
    '/testimonials/review2.jpg',
    2
),
(
    'Doctor-Verified & Trusted Supplier',
    'Customer shares that even doctors are discussing the product in forums. Hubby confirms finding a legit and trustworthy supplier with proper guidance.',
    '/testimonials/review3.jpg',
    3
),
(
    'Friend Referral - Noticeable Results',
    'Returning customer places reorder and refers a friend who noticed their weight loss. Word-of-mouth testimonial showing visible results.',
    '/testimonials/review4.jpg',
    4
),
(
    'Potent Product with Less Side Effects',
    'Customer feedback praising the product''s potency compared to alternatives, with fewer side effects and better tolerance.',
    '/testimonials/review5.jpg',
    5
);
