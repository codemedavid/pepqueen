-- ============================================
-- TESTIMONIALS STORAGE SETUP
-- ============================================
-- Run this in Supabase SQL Editor to fix testimonial image upload issues

-- 1. Create testimonials bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'testimonials',
  'testimonials',
  true,
  10485760, -- 10MB limit
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif', 'image/bmp', 'image/tiff', 'image/svg+xml', 'image/heic', 'image/heif']
) ON CONFLICT (id) DO UPDATE
SET 
  public = true,
  file_size_limit = 10485760,
  allowed_mime_types = ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif', 'image/bmp', 'image/tiff', 'image/svg+xml', 'image/heic', 'image/heif'];

-- 2. Set up RLS policies for testimonials bucket

-- Allow public read access
DROP POLICY IF EXISTS "Public read access for testimonials" ON storage.objects;
CREATE POLICY "Public read access for testimonials"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'testimonials');

-- Allow public upload (for admin usage)
DROP POLICY IF EXISTS "Anyone can upload testimonials" ON storage.objects;
CREATE POLICY "Anyone can upload testimonials"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'testimonials');

-- Allow public update
DROP POLICY IF EXISTS "Anyone can update testimonials" ON storage.objects;
CREATE POLICY "Anyone can update testimonials"
ON storage.objects FOR UPDATE
TO public
USING (bucket_id = 'testimonials')
WITH CHECK (bucket_id = 'testimonials');

-- Allow public delete
DROP POLICY IF EXISTS "Anyone can delete testimonials" ON storage.objects;
CREATE POLICY "Anyone can delete testimonials"
ON storage.objects FOR DELETE
TO public
USING (bucket_id = 'testimonials');

-- 3. Verify creation
SELECT 
    id as bucket_id,
    name,
    public,
    CASE 
        WHEN id = 'testimonials' AND public = true THEN '✅ Non-Authenticated users can read (Public)'
        ELSE '❌ Issue detected'
    END as status
FROM storage.buckets
WHERE id = 'testimonials';
