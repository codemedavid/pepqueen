-- PepQueen Product Catalog Reset
-- Clear all existing products and add the official PepQueen product line
-- Date: 2025-12-29

-- Step 1: Clear existing product variations first (due to foreign key constraints)
DELETE FROM product_variations;

-- Step 2: Clear existing products
DELETE FROM products;

-- Step 3: Insert PepQueen Products
-- Note: Categories use the text 'category' field in products, not the categories table id

-- Tirzepatide 15mg
INSERT INTO products (
  id, name, description, category, base_price, 
  purity_percentage, stock_quantity, available, featured,
  storage_conditions, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  'Tirzepatide 15mg',
  'Premium Tirzepatide peptide for research purposes. High-quality GLP-1/GIP receptor agonist.',
  'research',
  0,
  99.0,
  100,
  true,
  true,
  'Store at -20°C, keep away from light',
  NOW(),
  NOW()
);

-- Tirzepatide 30mg
INSERT INTO products (
  id, name, description, category, base_price, 
  purity_percentage, stock_quantity, available, featured,
  storage_conditions, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  'Tirzepatide 30mg',
  'Premium Tirzepatide peptide 30mg for research purposes. High-quality GLP-1/GIP receptor agonist.',
  'research',
  0,
  99.0,
  100,
  true,
  true,
  'Store at -20°C, keep away from light',
  NOW(),
  NOW()
);

-- Retatrutide 10mg
INSERT INTO products (
  id, name, description, category, base_price, 
  purity_percentage, stock_quantity, available, featured,
  storage_conditions, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  'Retatrutide 10mg',
  'Premium Retatrutide peptide for research purposes. Triple hormone receptor agonist (GLP-1, GIP, Glucagon).',
  'research',
  0,
  99.0,
  100,
  true,
  true,
  'Store at -20°C, keep away from light',
  NOW(),
  NOW()
);

-- Retatrutide 30mg
INSERT INTO products (
  id, name, description, category, base_price, 
  purity_percentage, stock_quantity, available, featured,
  storage_conditions, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  'Retatrutide 30mg',
  'Premium Retatrutide peptide 30mg for research purposes. Triple hormone receptor agonist (GLP-1, GIP, Glucagon).',
  'research',
  0,
  99.0,
  100,
  true,
  true,
  'Store at -20°C, keep away from light',
  NOW(),
  NOW()
);

-- GHK-Cu 50mg
INSERT INTO products (
  id, name, description, category, base_price, 
  purity_percentage, stock_quantity, available, featured,
  storage_conditions, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  'GHK-Cu 50mg',
  'Premium GHK-Cu (Copper Peptide) for research purposes. Known for promoting collagen production and skin rejuvenation.',
  'cosmetic',
  0,
  99.0,
  100,
  true,
  false,
  'Store at -20°C, protect from moisture',
  NOW(),
  NOW()
);

-- GHK-Cu 100mg
INSERT INTO products (
  id, name, description, category, base_price, 
  purity_percentage, stock_quantity, available, featured,
  storage_conditions, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  'GHK-Cu 100mg',
  'Premium GHK-Cu (Copper Peptide) 100mg for research purposes. Known for promoting collagen production and skin rejuvenation.',
  'cosmetic',
  0,
  99.0,
  100,
  true,
  false,
  'Store at -20°C, protect from moisture',
  NOW(),
  NOW()
);

-- Glow 70mg
INSERT INTO products (
  id, name, description, category, base_price, 
  purity_percentage, stock_quantity, available, featured,
  storage_conditions, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  'Glow 70mg',
  'PepQueen Glow formula for radiant skin research. Premium blend for skin health and rejuvenation.',
  'cosmetic',
  0,
  99.0,
  100,
  true,
  true,
  'Store at 2-8°C, protect from light',
  NOW(),
  NOW()
);

-- Klow 80mg
INSERT INTO products (
  id, name, description, category, base_price, 
  purity_percentage, stock_quantity, available, featured,
  storage_conditions, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  'Klow 80mg',
  'PepQueen Klow formula for enhanced research. Premium peptide blend for optimal results.',
  'cosmetic',
  0,
  99.0,
  100,
  true,
  true,
  'Store at 2-8°C, protect from light',
  NOW(),
  NOW()
);

-- Pharma Bac Water 10ml
INSERT INTO products (
  id, name, description, category, base_price, 
  purity_percentage, stock_quantity, available, featured,
  storage_conditions, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  'Pharma Bacteriostatic Water 10ml',
  'Pharmaceutical grade bacteriostatic water for peptide reconstitution. Contains 0.9% benzyl alcohol as preservative.',
  'supplies',
  0,
  100.0,
  200,
  true,
  false,
  'Store at room temperature, protect from freezing',
  NOW(),
  NOW()
);

-- Verify results
DO $$
DECLARE
  product_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO product_count FROM products;
  
  RAISE NOTICE '✅ PepQueen catalog reset complete!';
  RAISE NOTICE '✅ Products added: %', product_count;
END $$;
