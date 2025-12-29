import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart, Package, Sparkles } from 'lucide-react';
import type { Product, ProductVariation } from '../types';

interface MenuItemCardProps {
  product: Product;
  onAddToCart: (product: Product, variation?: ProductVariation, quantity?: number) => void;
  cartQuantity?: number;
  onUpdateQuantity?: (index: number, quantity: number) => void;
  onProductClick?: (product: Product) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  product,
  onAddToCart,
  cartQuantity = 0,
  onProductClick,
}) => {
  const [selectedVariation, setSelectedVariation] = useState<ProductVariation | undefined>(
    product.variations && product.variations.length > 0 ? product.variations[0] : undefined
  );
  const [quantity, setQuantity] = useState(1);

  // Calculate current price considering both product and variation discounts
  const currentPrice = selectedVariation
    ? (selectedVariation.discount_active && selectedVariation.discount_price)
      ? selectedVariation.discount_price
      : selectedVariation.price
    : (product.discount_active && product.discount_price)
      ? product.discount_price
      : product.base_price;

  // Check if there's an active discount
  const hasDiscount = selectedVariation
    ? (selectedVariation.discount_active && selectedVariation.discount_price !== null)
    : (product.discount_active && product.discount_price !== null);

  // Get original price for strikethrough
  const originalPrice = selectedVariation ? selectedVariation.price : product.base_price;

  const handleAddToCart = () => {
    onAddToCart(product, selectedVariation, quantity);
    setQuantity(1);
  };

  const availableStock = selectedVariation ? selectedVariation.stock_quantity : product.stock_quantity;

  // Check if product has any available stock (either in variations or product itself)
  const hasAnyStock = product.variations && product.variations.length > 0
    ? product.variations.some(v => v.stock_quantity > 0)
    : product.stock_quantity > 0;

  const incrementQuantity = () => {
    setQuantity(prev => {
      if (prev >= availableStock) {
        alert(`Only ${availableStock} item(s) available in stock.`);
        return prev;
      }
      return prev + 1;
    });
  };

  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div
      className="h-full flex flex-col group relative rounded-2xl overflow-hidden transition-all duration-400"
      style={{
        backgroundColor: '#1a1a1a',
        border: '2px solid rgba(212, 175, 55, 0.4)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 4px 16px rgba(212, 175, 55, 0.1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = '#D4AF37';
        e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.5), 0 0 30px rgba(212, 175, 55, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4), 0 4px 16px rgba(212, 175, 55, 0.1)';
      }}
    >
      {/* Click overlay for product details */}
      <div
        onClick={() => onProductClick?.(product)}
        className="absolute inset-x-0 top-0 h-48 z-10 cursor-pointer"
        title="View details"
      />

      {/* Product Image */}
      <div className="relative h-48 overflow-hidden" style={{ backgroundColor: '#252525' }}>
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ color: '#404040' }}>
            <Package className="w-12 h-12" />
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 pointer-events-none">
          {product.featured && (
            <span
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #E8C97A 100%)',
                color: '#0a0a0a',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <Sparkles className="w-3 h-3" />
              Featured
            </span>
          )}
          {hasDiscount && (
            <span
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{
                background: 'linear-gradient(135deg, #D18CA3 0%, #C47A91 100%)',
                color: '#FFF9FB'
              }}
            >
              {Math.round((1 - currentPrice / originalPrice) * 100)}% OFF
            </span>
          )}
        </div>

        {/* Stock Status Overlay */}
        {(!product.available || !hasAnyStock) && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
            <span
              className="px-4 py-2 text-xs font-semibold rounded-full"
              style={{
                backgroundColor: '#2a2a2a',
                color: '#A3A3A3',
                border: '1px solid rgba(163, 163, 163, 0.3)'
              }}
            >
              {!product.available ? 'Unavailable' : 'Out of Stock'}
            </span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-white mb-1 line-clamp-2 font-playfair">{product.name}</h3>
        <p className="text-sm text-neutral-500 mb-3 line-clamp-2 min-h-[2.5rem]">{product.description}</p>

        {/* Variations (Sizes) */}
        <div className="mb-4 min-h-[4rem]">
          {product.variations && product.variations.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.variations.slice(0, 3).map((variation) => {
                const isOutOfStock = variation.stock_quantity === 0;
                const isSelected = selectedVariation?.id === variation.id && !isOutOfStock;
                return (
                  <button
                    key={variation.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!isOutOfStock) {
                        setSelectedVariation(variation);
                      }
                    }}
                    disabled={isOutOfStock}
                    className="px-2 py-1 text-xs rounded-lg transition-all duration-300 relative z-20"
                    style={{
                      background: isSelected
                        ? 'linear-gradient(135deg, #D4AF37 0%, #B8972F 100%)'
                        : isOutOfStock
                          ? '#252525'
                          : 'transparent',
                      color: isSelected
                        ? '#0a0a0a'
                        : isOutOfStock
                          ? '#525252'
                          : '#D4AF37',
                      border: isSelected
                        ? '1px solid #D4AF37'
                        : isOutOfStock
                          ? '1px solid #333'
                          : '1px solid rgba(212, 175, 55, 0.4)',
                      cursor: isOutOfStock ? 'not-allowed' : 'pointer',
                      opacity: isOutOfStock ? 0.6 : 1,
                    }}
                  >
                    {variation.name}
                  </button>
                );
              })}
              {product.variations.length > 3 && (
                <span className="text-xs text-neutral-500 self-center">
                  +{product.variations.length - 3}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="flex-1" />

        {/* Price and Cart Actions */}
        <div className="flex flex-col gap-3 mt-2">
          {hasDiscount ? (
            <div className="flex flex-col gap-1">
              {/* Original Price - Strikethrough */}
              <div className="flex items-center gap-2">
                <span className="text-base text-neutral-500 line-through font-medium">
                  ₱{originalPrice.toLocaleString('en-PH', { minimumFractionDigits: 0 })}
                </span>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #D18CA3 0%, #C47A91 100%)',
                    color: '#FFF9FB'
                  }}
                >
                  {Math.round((1 - currentPrice / originalPrice) * 100)}% OFF
                </span>
              </div>
              {/* Sale Price - Prominent */}
              <div className="flex items-baseline gap-1">
                <span
                  className="text-xl font-bold"
                  style={{ color: '#D4AF37' }}
                >
                  ₱{currentPrice.toLocaleString('en-PH', { minimumFractionDigits: 0 })}
                </span>
                <span className="text-xs text-neutral-500">Sale Price</span>
              </div>
            </div>
          ) : (
            <div className="flex items-baseline gap-2">
              <span
                className="text-lg font-bold"
                style={{ color: '#D4AF37' }}
              >
                ₱{currentPrice.toLocaleString('en-PH', { minimumFractionDigits: 0 })}
              </span>
            </div>
          )}

          <div className="flex items-center gap-1.5 sm:gap-2 relative z-20">
            {/* Quantity Controls */}
            <div
              className="flex items-center rounded-lg flex-shrink-0"
              style={{ border: '1px solid rgba(212, 175, 55, 0.4)', backgroundColor: '#252525' }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  decrementQuantity();
                }}
                className="p-1 sm:p-1.5 hover:bg-neutral-700 transition-colors rounded-l-lg"
                disabled={!hasAnyStock || !product.available}
              >
                <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-400" />
              </button>
              <span className="w-6 sm:w-8 text-center text-xs sm:text-sm font-medium text-white">
                {quantity}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  incrementQuantity();
                }}
                className="p-1 sm:p-1.5 hover:bg-neutral-700 transition-colors rounded-r-lg"
                disabled={quantity >= availableStock || !hasAnyStock || !product.available}
              >
                <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-400" />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (quantity > availableStock) {
                  alert(`Only ${availableStock} item(s) available in stock.`);
                  setQuantity(availableStock);
                  return;
                }
                handleAddToCart();
              }}
              disabled={!hasAnyStock || availableStock === 0 || !product.available}
              className="flex-1 min-w-0 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1 sm:gap-2"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #B8972F 100%)',
                color: '#0a0a0a',
              }}
              onMouseEnter={(e) => {
                if (!e.currentTarget.disabled) {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #E8C97A 0%, #D4AF37 100%)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #D4AF37 0%, #B8972F 100%)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Add</span>
            </button>
          </div>

          {/* Cart Status */}
          {cartQuantity > 0 && (
            <div
              className="text-center text-xs font-medium"
              style={{ color: '#D4AF37' }}
            >
              {cartQuantity} in cart
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
