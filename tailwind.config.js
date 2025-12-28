/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ChainForm - Clean Scientific Wellness Theme
        'theme-bg': '#FAFAFC',        // Warm white background
        'theme-text': '#3A3A44',      // Soft charcoal (text)
        'theme-accent': '#6F6AD9',    // Soft Scientific Purple (primary)
        'theme-accent-hover': '#5B56C5', // Darker purple for hover
        'theme-secondary': '#EEF0F6', // Cool light gray (sections)
        'text-secondary': '#5A5A66',  // Medium gray (body text)

        // Purple scale (primary brand color)
        purple: {
          50: '#F0F0FA',
          100: '#E0E0F5',
          200: '#C5C4ED',
          300: '#A9A7E5',
          400: '#8D8ADE',
          500: '#6F6AD9', // Primary soft purple
          600: '#5B56C5',
          700: '#4A45A8',
          800: '#3A368A',
          900: '#2B296B',
        },
        // Primary scale mapped to purple for compatibility
        primary: {
          50: '#F0F0FA',
          100: '#E0E0F5',
          200: '#C5C4ED',
          300: '#A9A7E5',
          400: '#8D8ADE',
          500: '#6F6AD9',
          600: '#5B56C5',
          700: '#4A45A8',
          800: '#3A368A',
          900: '#2B296B',
        },
        // Maroon for depth/trust
        maroon: {
          50: '#F5EDF1',
          100: '#EBDAE3',
          200: '#D6B5C7',
          300: '#C291AB',
          400: '#AD6C8F',
          500: '#7A3E5C', // Muted maroon
          600: '#6A3550',
          700: '#5A2C43',
          800: '#4A2437',
          900: '#3A1B2A',
        },
        // Accent colors
        accent: {
          pink: '#E8A6B8',   // Soft blush pink
          sage: '#8CBFA8',   // Calm sage green
          DEFAULT: '#6F6AD9', // Purple
          white: '#FAFAFC',
          charcoal: '#3A3A44',
        },
        // Sage green scale (health & supplies)
        sage: {
          50: '#F2F7F4',
          100: '#E4EFE9',
          200: '#C9DFD3',
          300: '#AECFBD',
          400: '#9DCFAD',
          500: '#8CBFA8', // Main sage
          600: '#7AAD96',
          700: '#679A83',
          800: '#548770',
          900: '#41745D',
        },
        // Blush pink scale (human touch)
        blush: {
          50: '#FCF5F7',
          100: '#F9EBEF',
          200: '#F3D7DF',
          300: '#EEC3CF',
          400: '#E8B0BF',
          500: '#E8A6B8', // Main blush
          600: '#D98FA6',
          700: '#CA7894',
          800: '#BB6182',
          900: '#AC4A70',
        },
        // Backward compatibility mappings
        magenta: {
          50: '#F0F0FA',
          100: '#E0E0F5',
          200: '#C5C4ED',
          300: '#A9A7E5',
          400: '#8D8ADE',
          500: '#6F6AD9',
          600: '#5B56C5',
          700: '#4A45A8',
          800: '#3A368A',
          900: '#2B296B',
        },
        teal: {
          50: '#F2F7F4',
          100: '#E4EFE9',
          200: '#C9DFD3',
          300: '#AECFBD',
          400: '#9DCFAD',
          500: '#8CBFA8',
          600: '#7AAD96',
          700: '#679A83',
          800: '#548770',
          900: '#41745D',
        },
        navy: {
          50: '#F0F0FA',
          100: '#E0E0F5',
          200: '#C5C4ED',
          300: '#A9A7E5',
          400: '#8D8ADE',
          500: '#6F6AD9',
          600: '#5B56C5',
          700: '#4A45A8',
          800: '#3A368A',
          900: '#2B296B',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        'brand': '10px', // ChainForm 8-12px rounded corners
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'medium': '0 4px 15px rgba(0, 0, 0, 0.05)',
        'hover': '0 8px 25px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out',
        'slideIn': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
