/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // PepQueen Dark Luxury Theme
        'theme-bg': '#0a0a0a',           // Deep Black Background
        'theme-text': '#F5F5F5',         // Light Text
        'theme-accent': '#D4AF37',       // Gold - Primary Accent
        'theme-accent-hover': '#E8C97A', // Gold hover state
        'theme-secondary': '#1a1a1a',    // Slightly Lighter Black
        'text-secondary': '#A0A0A0',     // Muted text

        // Gold Accents (Primary Brand Color)
        gold: {
          DEFAULT: '#D4AF37',  // Royal Metallic Gold
          light: '#E8C97A',    // Soft Champagne Gold
          dark: '#B8972F',     // Deeper gold for contrast
          50: '#FDF9E8',
          100: '#FAF0C8',
          200: '#F5E08F',
          300: '#EFCE56',
          400: '#E8C97A',
          500: '#D4AF37',
          600: '#B8972F',
          700: '#9A7C26',
          800: '#7C621E',
          900: '#5E4A16',
        },

        // Dusty Rose Scale (Secondary accent)
        rose: {
          50: '#FDF5F7',
          100: '#FBE8EC',
          200: '#F5CCD6',
          300: '#ECAABB',
          400: '#D18CA3',
          500: '#C47A91',
          600: '#B0677D',
          700: '#935566',
          800: '#784551',
          900: '#633A44',
        },

        // Dark Scale
        dark: {
          50: '#2a2a2a',
          100: '#252525',
          200: '#202020',
          300: '#1a1a1a',
          400: '#151515',
          500: '#101010',
          600: '#0d0d0d',
          700: '#0a0a0a',
          800: '#050505',
          900: '#000000',
        },

        // Neutrals (Dark Theme)
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },

        // Primary scale mapped to gold for compatibility
        primary: {
          50: '#FDF9E8',
          100: '#FAF0C8',
          200: '#F5E08F',
          300: '#EFCE56',
          400: '#E8C97A',
          500: '#D4AF37',
          600: '#B8972F',
          700: '#9A7C26',
          800: '#7C621E',
          900: '#5E4A16',
        },

        // Blush kept for compatibility
        blush: {
          50: '#1a1a1a',
          100: '#252525',
          200: '#2a2a2a',
          300: '#333333',
          400: '#404040',
          500: '#525252',
          600: '#666666',
          700: '#808080',
          800: '#999999',
          900: '#B3B3B3',
        },

        // Sage kept for subtle accents
        sage: {
          50: '#F4F9F6',
          100: '#E9F3EE',
          200: '#D3E7DD',
          300: '#B8D9C9',
          400: '#8CBFA8',
          500: '#6BA98C',
          600: '#559274',
          700: '#457560',
          800: '#395E4E',
          900: '#2E4B3F',
        },

        // Navy for admin/dark accents
        navy: {
          50: '#1a1a1a',
          100: '#252525',
          200: '#2a2a2a',
          800: '#151515',
          900: '#0a0a0a',
        },

        // Accent colors for quick access
        accent: {
          light: '#E8C97A',      // Champagne gold
          DEFAULT: '#D4AF37',    // Metallic gold
          dark: '#B8972F',
          white: '#F5F5F5',      // Light text
          black: '#0a0a0a',      // Deep black
        },
      },
      fontFamily: {
        // Serif fonts for headings - queen energy
        'playfair': ['Playfair Display', 'Georgia', 'serif'],
        'cormorant': ['Cormorant Garamond', 'Georgia', 'serif'],
        'dm-serif': ['DM Serif Display', 'Georgia', 'serif'],
        // Clean sans-serif for body
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'lato': ['Lato', 'system-ui', 'sans-serif'],
        // Compatibility
        'space-grotesk': ['Playfair Display', 'Georgia', 'serif'],
        'ibm-plex': ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'brand': '12px',
        'brand-lg': '16px',
        'brand-xl': '20px',
      },
      boxShadow: {
        'soft': '0 2px 12px rgba(0, 0, 0, 0.3)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.4)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.5)',
        'card': '0 1px 4px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.15)',
        'gold': '0 4px 20px rgba(212, 175, 55, 0.25)',
        'rose': '0 4px 20px rgba(209, 140, 163, 0.20)',
        'luxury': '0 8px 40px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(212, 175, 55, 0.1)',
        'glow-gold': '0 0 30px rgba(212, 175, 55, 0.3)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'fadeIn': 'fadeIn 0.8s ease-out',
        'slideIn': 'slideIn 0.6s ease-out',
        'float': 'float 8s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
