import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Truck, Clock, Beaker, Award, Zap } from 'lucide-react';
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

  const description = siteSettings?.hero_description || 'Your all-in-one destination for high-quality peptides, peptide pens, and essential accessories for your wellness journey.';

  return (
    <div className="relative min-h-[95vh] overflow-hidden bg-[#0a0a1a]">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        {/* Main gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3a] to-[#0a0a1a]" />

        {/* Glowing orbs */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-transparent rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-30%] left-[-20%] w-[700px] h-[700px] bg-gradient-to-tr from-purple-600/25 via-blue-500/15 to-transparent rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Floating particles */}
        <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[25%] right-[15%] w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-50" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
        <div className="absolute top-[60%] left-[20%] w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-40" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
        <div className="absolute top-[70%] right-[25%] w-2 h-2 bg-blue-300 rounded-full animate-bounce opacity-50" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />
        <div className="absolute top-[45%] left-[80%] w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce opacity-60" style={{ animationDuration: '3s', animationDelay: '2s' }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,26,0.4)_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32">

        {/* Main Content */}
        <div className={`flex flex-col items-center transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>

          {/* Premium Badge */}
          <div className={`mb-8 transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 border border-white/10 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300">
                Premium Peptide & Medical Supplies
              </span>
              <Zap className="w-4 h-4 text-yellow-400" />
            </div>
          </div>

          {/* Main Headline - Dramatic */}
          <div className={`text-center mb-8 transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="font-grotesk text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-4">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 drop-shadow-lg">
                Connected Science.
              </span>
              <span className="block text-white mt-2">
                Clean Solutions.
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className={`text-lg md:text-xl text-slate-300 text-center max-w-2xl mb-12 leading-relaxed transition-all duration-700 delay-[400ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {description}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Primary CTA - Glowing */}
            <button
              onClick={onShopAll}
              className="group relative px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300"
            >
              {/* Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              {/* Content */}
              <span className="relative flex items-center justify-center gap-3 text-white">
                Shop All Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* Secondary CTA - Glass */}
            <button
              onClick={onShopAll}
              className="group px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                <Beaker className="w-5 h-5 text-cyan-400" />
                View Lab Reports
              </span>
            </button>
          </div>

          {/* Feature Cards - Glassmorphism */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl mb-16 transition-all duration-700 delay-[600ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Card 1 */}
            <div className="group p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg shadow-blue-500/30">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Lab Tested</p>
                  <p className="text-sm text-slate-400">99%+ Purity Verified</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg shadow-purple-500/30">
                  <Beaker className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Science-Forward</p>
                  <p className="text-sm text-slate-400">Research Grade Quality</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl shadow-lg shadow-cyan-500/30">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Trusted</p>
                  <p className="text-sm text-slate-400">By Our Community</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Bar */}
          <div className={`flex flex-wrap justify-center items-center gap-8 md:gap-12 py-6 px-10 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="flex items-center gap-3 text-slate-300">
              <Truck className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Fast Shipping</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/20" />
            <div className="flex items-center gap-3 text-slate-300">
              <Clock className="w-5 h-5 text-purple-400" />
              <span className="font-medium">24/7 Support</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/20" />
            <div className="flex items-center gap-3 text-slate-300">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span className="font-medium">Secure Checkout</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Hero;
