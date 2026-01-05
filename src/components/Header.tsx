import React, { useState } from 'react';
import { useCOAPageSetting } from '../hooks/useCOAPageSetting';
import { ShoppingCart, Menu, X, Calculator, FileText, HelpCircle, Truck, ClipboardCheck, Users } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick, onMenuClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { coaPageEnabled } = useCOAPageSetting();

  return (
    <>
      <header
        className="backdrop-blur-md sticky top-0 z-50 shadow-sm"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.3)'
        }}
      >
        <div className="container mx-auto px-4 md:px-6 py-2 md:py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo Only - No Text */}
            <button
              onClick={() => { onMenuClick(); setMobileMenuOpen(false); }}
              className="flex items-center hover:opacity-90 transition-all group"
            >
              <div className="relative flex-shrink-0">
                <div
                  className="h-12 sm:h-14 md:h-16 rounded-lg overflow-hidden"
                  style={{ border: '1px solid rgba(212, 175, 55, 0.3)' }}
                >
                  <img
                    src="/assets/logo.jpg"
                    alt="PepQueen - Royal Results"
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
            </button>

            {/* Right Side Navigation */}
            <div className="flex items-center gap-2 md:gap-4 ml-auto">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-2 lg:gap-4">
                <button
                  onClick={onMenuClick}
                  className="text-sm font-medium text-neutral-600 hover:text-gold transition-colors"
                >
                  Products
                </button>
                <a
                  href="/track-order"
                  className="text-sm font-medium text-neutral-600 hover:text-gold transition-colors flex items-center gap-1"
                >
                  <Truck className="w-4 h-4" />
                  Track Order
                </a>
                <a
                  href="/calculator"
                  className="text-sm font-medium text-neutral-600 hover:text-gold transition-colors flex items-center gap-1"
                >
                  <Calculator className="w-4 h-4" />
                  Calculator
                </a>
                {coaPageEnabled && (
                  <a
                    href="/coa"
                    className="text-sm font-medium text-neutral-600 hover:text-gold transition-colors flex items-center gap-1"
                  >
                    <FileText className="w-4 h-4" />
                    Lab Tests
                  </a>
                )}
                <a
                  href="/faq"
                  className="text-sm font-medium text-neutral-600 hover:text-gold transition-colors flex items-center gap-1"
                >
                  <HelpCircle className="w-4 h-4" />
                  FAQ
                </a>
                <a
                  href="/assessment"
                  className="text-sm font-medium text-neutral-600 hover:text-gold transition-colors flex items-center gap-1"
                >
                  <ClipboardCheck className="w-4 h-4" />
                  Assessment
                </a>
                <a
                  href="/testimonials"
                  className="text-sm font-medium text-neutral-600 hover:text-gold transition-colors flex items-center gap-1"
                >
                  <Users className="w-4 h-4" />
                  Reviews
                </a>

              </nav>

              {/* Cart Button */}
              <button
                onClick={onCartClick}
                className="relative p-2 text-neutral-600 hover:text-gold transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItemsCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 text-black text-[11px] font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1"
                    style={{
                      background: 'linear-gradient(135deg, #D4AF37 0%, #E8C97A 100%)',
                      border: '1px solid rgba(212, 175, 55, 0.5)'
                    }}
                  >
                    {cartItemsCount > 99 ? '99+' : cartItemsCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-neutral-600 hover:text-gold transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar Drawer */}
          <div
            className="absolute top-0 right-0 bottom-0 w-[280px] flex flex-col animate-in slide-in-from-right duration-300"
            style={{
              backgroundColor: '#0a0a0a',
              borderLeft: '1px solid rgba(212, 175, 55, 0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header with Logo */}
            <div
              className="flex items-center justify-between p-4"
              style={{
                backgroundColor: '#0a0a0a',
                borderBottom: '1px solid rgba(212, 175, 55, 0.15)'
              }}
            >
              <div className="h-10 rounded-lg overflow-hidden" style={{ border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                <img
                  src="/assets/logo.jpg"
                  alt="PepQueen"
                  className="h-full w-auto object-contain"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 text-neutral-500 hover:text-gold transition-colors rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 overflow-y-auto p-4" style={{ backgroundColor: '#0a0a0a' }}>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => {
                    onMenuClick();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 p-3 rounded-brand text-left font-medium text-base text-neutral-300 hover:text-gold hover:bg-neutral-900 transition-all group"
                >
                  <div
                    className="p-2 rounded-brand transition-all"
                    style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.2)' }}
                  >
                    <span className="w-5 h-5 text-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    </span>
                  </div>
                  Products
                </button>
                <a
                  href="/track-order"
                  className="flex items-center gap-3 p-3 rounded-brand text-left font-medium text-base text-neutral-300 hover:text-gold hover:bg-neutral-900 transition-all group"
                >
                  <div
                    className="p-2 rounded-brand transition-all"
                    style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.2)' }}
                  >
                    <Truck className="w-5 h-5 text-gold" />
                  </div>
                  Track Order
                </a>
                <a
                  href="/calculator"
                  className="flex items-center gap-3 p-3 rounded-brand text-left font-medium text-base text-neutral-300 hover:text-gold hover:bg-neutral-900 transition-all group"
                >
                  <div
                    className="p-2 rounded-brand transition-all"
                    style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.2)' }}
                  >
                    <Calculator className="w-5 h-5 text-gold" />
                  </div>
                  Peptide Calculator
                </a>
                <a
                  href="/coa"
                  className="flex items-center gap-3 p-3 rounded-brand text-left font-medium text-base text-neutral-300 hover:text-gold hover:bg-neutral-900 transition-all group"
                >
                  <div
                    className="p-2 rounded-brand transition-all"
                    style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.2)' }}
                  >
                    <FileText className="w-5 h-5 text-gold" />
                  </div>
                  Lab Tests (COA)
                </a>
                <a
                  href="/faq"
                  className="flex items-center gap-3 p-3 rounded-brand text-left font-medium text-base text-neutral-300 hover:text-gold hover:bg-neutral-900 transition-all group"
                >
                  <div
                    className="p-2 rounded-brand transition-all"
                    style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.2)' }}
                  >
                    <HelpCircle className="w-5 h-5 text-gold" />
                  </div>
                  FAQ
                </a>
                <a
                  href="/assessment"
                  className="flex items-center gap-3 p-3 rounded-brand text-left font-medium text-base text-neutral-300 hover:text-gold hover:bg-neutral-900 transition-all group"
                >
                  <div
                    className="p-2 rounded-brand transition-all"
                    style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.2)' }}
                  >
                    <ClipboardCheck className="w-5 h-5 text-gold" />
                  </div>
                  Assessment
                </a>
                <a
                  href="/testimonials"
                  className="flex items-center gap-3 p-3 rounded-brand text-left font-medium text-base text-neutral-300 hover:text-gold hover:bg-neutral-900 transition-all group"
                >
                  <div
                    className="p-2 rounded-brand transition-all"
                    style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.2)' }}
                  >
                    <Users className="w-5 h-5 text-gold" />
                  </div>
                  Customer Reviews
                </a>

              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
