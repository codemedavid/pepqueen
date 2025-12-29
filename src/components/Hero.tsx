import React, { useState, useEffect } from 'react';
import { ArrowRight, Crown, Sparkles, Star, Heart } from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';

interface HeroProps {
  onShopAll: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopAll }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { siteSettings } = useSiteSettings();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Use settings or fallbacks if loading/missing
  const badgeText = siteSettings?.hero_badge_text || 'Royal Feminine Wellness';
  const description = 'Premium peptides designed for real, visible results.';

  return (
    <div className="relative min-h-[90vh] overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Top gold accent line */}
        <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: 'linear-gradient(90deg, transparent 0%, #D4AF37 30%, #E8C97A 50%, #D4AF37 70%, transparent 100%)' }} />

        {/* Radial glow effects */}
        <div
          className="absolute top-20 right-[10%] w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-40 left-[5%] w-80 h-80 rounded-full opacity-15 animate-pulse-soft"
          style={{ background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-32 right-[15%] w-72 h-72 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)' }}
        />

        {/* Subtle gold sparkle accents */}
        <div className="absolute top-1/4 left-[20%] w-2 h-2 bg-gold rounded-full opacity-40 animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-[25%] w-1.5 h-1.5 bg-gold-light rounded-full opacity-50 animate-pulse-soft" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-1/3 left-[30%] w-2 h-2 bg-gold rounded-full opacity-30 animate-pulse-soft" style={{ animationDelay: '3.5s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36 z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Content */}
          <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

            {/* Royal Badge */}
            <div className="flex justify-center mb-10">
              <div
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.8)',
                  border: '1px solid rgba(212, 175, 55, 0.4)'
                }}
              >
                <Crown className="w-4 h-4" style={{ color: '#D4AF37' }} />
                <span className="text-sm font-medium tracking-widest uppercase" style={{ color: '#D4AF37' }}>
                  {badgeText}
                </span>
                <Sparkles className="w-4 h-4" style={{ color: '#E8C97A' }} />
              </div>
            </div>

            {/* Main Headline - Serif Typography */}
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.15] mb-8 font-playfair">
                <span className="text-gradient-gold">Own Your Results.</span>
                <br />
                <span className="text-white">Elevate Your Body.</span>
                <span className="inline-block ml-3" style={{ color: '#D4AF37' }}>✦</span>
              </h1>

              {/* Elegant divider */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent 0%, #D4AF37 100%)' }} />
                <Star className="w-4 h-4" style={{ color: '#D4AF37' }} fill="#D4AF37" />
                <div className="w-16 h-[1px]" style={{ background: 'linear-gradient(90deg, #D4AF37 0%, transparent 100%)' }} />
              </div>

              <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
                {description}
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(26, 26, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.3)' }}
                >
                  <Sparkles className="w-4 h-4" style={{ color: '#D4AF37' }} />
                </div>
                <span className="font-medium">99%+ Purity</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(26, 26, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.3)' }}
                >
                  <Heart className="w-4 h-4" style={{ color: '#D4AF37' }} fill="currentColor" />
                </div>
                <span className="font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(26, 26, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.3)' }}
                >
                  <Crown className="w-4 h-4" style={{ color: '#D4AF37' }} />
                </div>
                <span className="font-medium">Royal Service</span>
              </div>
            </div>

            {/* CTA Buttons - Luxury Style */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
              {/* Primary CTA: Gold Button */}
              <button
                onClick={onShopAll}
                className="group relative px-10 py-4 rounded-brand-lg font-semibold text-lg hover:-translate-y-1 transition-all duration-400 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #B8972F 100%)',
                  color: '#0a0a0a',
                  boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-3">
                  Shop Collection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              {/* Secondary CTA: Transparent + Gold Outline */}
              <a
                href="/coa"
                className="px-8 py-4 bg-transparent rounded-brand-lg font-semibold text-lg transition-all duration-400 hover:-translate-y-1"
                style={{
                  color: '#D4AF37',
                  border: '2px solid #D4AF37'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                  e.currentTarget.style.borderColor = '#E8C97A';
                  e.currentTarget.style.color = '#E8C97A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = '#D4AF37';
                  e.currentTarget.style.color = '#D4AF37';
                }}
              >
                View Lab Reports
              </a>
            </div>

            {/* Bottom Accent */}
            <div className="flex justify-center">
              <div className="w-32 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.5) 50%, transparent 100%)' }} />
            </div>

          </div>
        </div>
      </div>

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px]" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.3) 30%, rgba(212, 175, 55, 0.3) 70%, transparent 100%)' }} />
    </div>
  );
};

export default Hero;
