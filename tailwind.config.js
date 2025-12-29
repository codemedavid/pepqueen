/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ChainForm Brand Theme - Clean Scientific Wellness
        'theme-bg': '#FAFAFC',           // Warm white background
        'theme-text': '#3A3A44',         // Soft charcoal text
        'theme-accent': '#6F6AD9',       // Primary soft purple
        'theme-accent-hover': '#5854C7', // Purple hover state
        'theme-secondary': '#EEF0F6',    // Light gray sections
        'text-secondary': '#5A5A64',     // Secondary text

        // Primary Purple scale (main brand color)
        purple: {
          50: '#F5F5FC',
          100: '#EBEBF9',
          200: '#D4D3F3',
          300: '#B5B3EA',
          400: '#9592E0',
          500: '#6F6AD9', // Primary soft purple
          600: '#5854C7',
          700: '#4744A8',
          800: '#3A3889',
          900: '#2D2B6B',
        },
        // Secondary Maroon (trust/depth)
        maroon: {
          50: '#F9F2F5',
          100: '#F3E5EB',
          200: '#E5C7D5',
          300: '#D4A3BC',
          400: '#B97398',
          500: '#7A3E5C', // Main maroon
          600: '#6B3651',
          700: '#5A2D44',
          800: '#492537',
          900: '#3A1D2C',
        },
        // Accent Blush Pink (human touch)
        blush: {
          50: '#FDF6F8',
          100: '#FBEDF1',
          200: '#F7DBE3',
          300: '#F2C5D2',
          400: '#E8A6B8', // Main blush pink
          500: '#DE879E',
          600: '#D16884',
          700: '#B84D6A',
          800: '#993F58',
          900: '#7A3348',
        },
        // Accent Sage Green (health & supplies)
        sage: {
          50: '#F4F9F6',
          100: '#E9F3EE',
          200: '#D3E7DD',
          300: '#B8D9C9',
          400: '#8CBFA8', // Main sage green
          500: '#6BA98C',
          600: '#559274',
          700: '#457560',
          800: '#395E4E',
          900: '#2E4B3F',
        },
        // Neutrals
        neutral: {
          50: '#FAFAFC',  // Warm white
          100: '#EEF0F6', // Light gray
          200: '#E5E7EF',
          300: '#D1D4E0',
          400: '#A8ACBD',
          500: '#7A7F94',
          600: '#5A5E70',
          700: '#3A3A44', // Charcoal
          800: '#2A2A32',
          900: '#1A1A20',
        },
        // Primary scale mapped to purple for compatibility
        primary: {
          50: '#F5F5FC',
          100: '#EBEBF9',
          200: '#D4D3F3',
          300: '#B5B3EA',
          400: '#9592E0',
          500: '#6F6AD9',
          600: '#5854C7',
          700: '#4744A8',
          800: '#3A3889',
          900: '#2D2B6B',
        },
        // Accent colors for quick access
        accent: {
          light: '#9592E0',
          DEFAULT: '#6F6AD9',
          dark: '#5854C7',
          white: '#FAFAFC',
          black: '#3A3A44',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'sans-serif'],
      },
      borderRadius: {
        'brand': '10px',
        'brand-lg': '12px',
        'brand-xl': '16px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(58, 58, 68, 0.04)',
        'medium': '0 4px 12px rgba(58, 58, 68, 0.06)',
        'hover': '0 8px 20px rgba(58, 58, 68, 0.08)',
        'card': '0 1px 3px rgba(58, 58, 68, 0.05), 0 1px 2px rgba(58, 58, 68, 0.03)',
        'purple': '0 4px 14px rgba(111, 106, 217, 0.15)',
        'sage': '0 4px 14px rgba(140, 191, 168, 0.15)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideIn': 'slideIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-8px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
