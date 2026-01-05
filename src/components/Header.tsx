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

                <div className="h-4 w-px bg-neutral-200 mx-2 hidden lg:block"></div>
              </nav>

              {/* Contact Icons - Visible on all devices */}
              <div className="flex items-center gap-3 mr-2">
                <a
                  href="https://api.whatsapp.com/send?phone=639190023598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-[#25D366] transition-colors"
                  title="WhatsApp: 0919 002 3598"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
                <a
                  href="https://t.me/pepqmae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-[#0088cc] transition-colors"
                  title="Telegram: @pepqmae"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
              </div>

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
