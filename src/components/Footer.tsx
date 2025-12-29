import React from 'react';
import { MessageCircle, Heart, HelpCircle, Calculator, FileText, Truck, ClipboardCheck, Sparkles } from 'lucide-react';
import { useCOAPageSetting } from '../hooks/useCOAPageSetting';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { coaPageEnabled } = useCOAPageSetting();

  return (
    <footer className="bg-white pt-12 pb-6" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
      {/* Gold accent line */}
      <div className="w-full h-[1px] mb-12" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.4) 30%, rgba(212, 175, 55, 0.4) 70%, transparent 100%)' }} />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">

          {/* Brand Section - Logo Only */}
          <div className="flex items-center">
            <div
              className="h-14 md:h-16 rounded-lg overflow-hidden"
              style={{ border: '1px solid rgba(212, 175, 55, 0.3)' }}
            >
              <img
                src="/assets/logo.jpg"
                alt="PepQueen - Royal Results"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Contact Emails */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-neutral-500">
            <span className="text-xs font-medium uppercase" style={{ color: '#D4AF37' }}>Contact Us:</span>
            <a href="mailto:peptidewhisperer@gmail.com" className="hover:text-rose-400 transition-colors">
              peptidewhisperer@gmail.com
            </a>
            <span className="hidden sm:inline text-blush-300">|</span>
            <a href="mailto:thepeptidepulse@gmail.com" className="hover:text-rose-400 transition-colors">
              thepeptidepulse@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-end">
            <a
              href="/track-order"
              className="text-neutral-500 hover:text-rose-400 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Truck className="w-4 h-4" />
              Track Order
            </a>
            <a
              href="/calculator"
              className="text-neutral-500 hover:text-sage-500 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Calculator className="w-4 h-4" />
              Calculator
            </a>
            {coaPageEnabled && (
              <a
                href="/coa"
                className="text-neutral-500 hover:text-rose-400 transition-colors flex items-center gap-2 text-sm font-medium"
              >
                <FileText className="w-4 h-4" />
                Lab Tests
              </a>
            )}
            <a
              href="/faq"
              className="text-neutral-500 hover:text-sage-500 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <HelpCircle className="w-4 h-4" />
              FAQ
            </a>
            <a
              href="/assessment"
              className="text-neutral-500 hover:text-rose-400 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <ClipboardCheck className="w-4 h-4" />
              Assessment
            </a>
            <a
              href="https://t.me/+k3SfL4WjnMQ3NGRl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-[#0088cc] transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              Join Community
            </a>
            <a
              href="https://www.tiktok.com/@peptidepulse20?_r=1&_t=ZS-92SrpIepm5s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-black transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              TikTok
            </a>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-6 text-center" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
          <p className="text-xs text-neutral-400 flex items-center justify-center gap-2">
            Made with
            <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
            <Sparkles className="w-3 h-3" style={{ color: '#D4AF37' }} />
            © {currentYear} PepQueen.
          </p>
          <p className="text-[10px] mt-2 font-medium tracking-wider" style={{ color: '#D4AF37' }}>
            Royal Confidence. Refined Power.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
