/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // PepQueen Royal Feminine Luxury Theme
        'theme-bg': '#F6E1E7',           // Soft Blush Pink - Main Background
        'theme-text': '#2E2E2E',         // Soft Charcoal Text
        'theme-accent': '#D18CA3',       // Dusty Rose - Primary Brand Pink
        'theme-accent-hover': '#C47A91', // Dusty Rose hover state
        'theme-secondary': '#FFF9FB',    // Warm White
        'text-secondary': '#4A4A4A',     // Secondary text

        // Gold Accents (use sparingly - like jewelry)
        gold: {
          DEFAULT: '#D4AF37',  // Royal Metallic Gold
          light: '#E8C97A',    // Soft Champagne Gold
          dark: '#B8972F',     // Deeper gold for contrast
        },

        // Dusty Rose Scale (Primary Brand Color)
        rose: {
          50: '#FDF5F7',
          100: '#FBE8EC',
          200: '#F5CCD6',
          300: '#ECAABB',
          400: '#D18CA3',  // Primary dusty rose
          500: '#C47A91',
          600: '#B0677D',
          700: '#935566',
          800: '#784551',
          900: '#633A44',
        },

        // Blush Pink Scale (Backgrounds)
        blush: {
          50: '#FFF9FB',   // Warm white
          100: '#F6E1E7',  // Main blush background
          200: '#F0CDD8',
          300: '#E8B5C6',
          400: '#DD96AC',
          500: '#D18CA3',
          600: '#C47A91',
          700: '#A86175',
          800: '#8C4E5E',
          900: '#734049',
        },

        // Neutrals (Luxury Balance)
        neutral: {
          50: '#FFF9FB',   // Warm White
          100: '#F6E1E7',  // Soft Blush
          200: '#F3ECE8',  // Light Nude Beige
          300: '#E5D6D9',
          400: '#C9B4BA',
          500: '#A8919A',
          600: '#7A6970',
          700: '#2E2E2E',  // Charcoal
          800: '#232323',
          900: '#1A1A1A',
        },

        // Primary scale mapped to dusty rose for compatibility
        primary: {
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

        // Purple kept for compatibility (mapped to rose tones)
        purple: {
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

        // Pink mapped to rose palette
        pink: {
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

        // Accent colors for quick access
        accent: {
          light: '#E8C97A',      // Champagne gold
          DEFAULT: '#D4AF37',    // Metallic gold
          dark: '#B8972F',
          white: '#FFF9FB',      // Warm white
          black: '#2E2E2E',      // Charcoal
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
        'soft': '0 2px 12px rgba(209, 140, 163, 0.08)',
        'medium': '0 4px 20px rgba(209, 140, 163, 0.12)',
        'hover': '0 8px 30px rgba(209, 140, 163, 0.15)',
        'card': '0 1px 4px rgba(209, 140, 163, 0.06), 0 2px 8px rgba(209, 140, 163, 0.04)',
        'gold': '0 4px 20px rgba(212, 175, 55, 0.20)',
        'rose': '0 4px 20px rgba(209, 140, 163, 0.20)',
        'luxury': '0 8px 40px rgba(209, 140, 163, 0.12), 0 2px 8px rgba(212, 175, 55, 0.08)',
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
