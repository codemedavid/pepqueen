import React, { useState, useRef } from 'react';
import MenuItemCard from './MenuItemCard';
import Hero from './Hero';
import ProductDetailModal from './ProductDetailModal';
import type { Product, ProductVariation, CartItem } from '../types';
import { Search, Filter, Package } from 'lucide-react';

interface MenuProps {
  menuItems: Product[];
  addToCart: (product: Product, variation?: ProductVariation, quantity?: number) => void;
  cartItems: CartItem[];
  updateQuantity: (index: number, quantity: number) => void;
}

const Menu: React.FC<MenuProps> = ({ menuItems, addToCart, cartItems }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'purity'>('name');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const productsRef = useRef<HTMLDivElement | null>(null);

  // Filter products based on search
  const filteredProducts = menuItems.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return a.base_price - b.base_price;
      case 'purity':
        return b.purity_percentage - a.purity_percentage;
      default:
        return 0;
    }
  });

  const getCartQuantity = (productId: string, variationId?: string) => {
    return cartItems
      .filter(item =>
        item.product.id === productId &&
        (variationId ? item.variation?.id === variationId : !item.variation)
      )
      .reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <>
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(product, variation, quantity) => {
            addToCart(product, variation, quantity);
          }}
        />
      )}

      <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
        <Hero
          onShopAll={() => {
            productsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        />

        <div className="container mx-auto px-4 py-8" ref={productsRef}>
          {/* Search and Filter Controls */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#D4AF37' }} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-base rounded-xl focus:outline-none transition-all"
                style={{
                  backgroundColor: '#1a1a1a',
                  border: '2px solid rgba(212, 175, 55, 0.3)',
                  color: '#F5F5F5',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#D4AF37';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.2)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
                }}
              />
            </div>

            {/* Sort Dropdown */}
            <div
              className="flex items-center gap-3 sm:w-auto rounded-xl px-4 py-3"
              style={{
                backgroundColor: '#1a1a1a',
                border: '2px solid rgba(212, 175, 55, 0.3)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)'
              }}
            >
              <Filter className="w-5 h-5" style={{ color: '#D4AF37' }} />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'purity')}
                className="focus:outline-none bg-transparent font-medium text-sm"
                style={{ color: '#F5F5F5' }}
              >
                <option value="name" style={{ backgroundColor: '#1a1a1a' }}>Sort by Name</option>
                <option value="price" style={{ backgroundColor: '#1a1a1a' }}>Sort by Price</option>
                <option value="purity" style={{ backgroundColor: '#1a1a1a' }}>Sort by Purity</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 flex items-center gap-2">
            <p className="text-neutral-500 font-medium text-sm">
              Showing <span className="font-bold text-gold">{sortedProducts.length}</span> products
            </p>
          </div>

          {/* Products Grid */}
          {sortedProducts.length === 0 ? (
            <div className="text-center py-20">
              <div
                className="rounded-xl p-12 max-w-md mx-auto"
                style={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid rgba(212, 175, 55, 0.2)'
                }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: '#252525' }}
                >
                  <Package className="w-10 h-10 text-neutral-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No products found</h3>
                <p className="text-neutral-500 mb-6">
                  {searchQuery
                    ? `No products match "${searchQuery}".`
                    : 'No products available.'}
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="btn-primary"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {sortedProducts.map((product) => (
                <MenuItemCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  cartQuantity={getCartQuantity(product.id)}
                  onProductClick={setSelectedProduct}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
