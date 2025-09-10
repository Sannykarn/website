module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Breaking news urgency, editorial authority
        primary: {
          DEFAULT: "#DC2626", // red-600
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
          700: "#B91C1C", // red-700
          800: "#991B1B", // red-800
          900: "#7F1D1D", // red-900
        },
        // Secondary Colors - Professional depth, extended reading comfort
        secondary: {
          DEFAULT: "#374151", // gray-700
          50: "#F9FAFB", // gray-50
          100: "#F3F4F6", // gray-100
          200: "#E5E7EB", // gray-200
          300: "#D1D5DB", // gray-300
          400: "#9CA3AF", // gray-400
          500: "#6B7280", // gray-500
          600: "#4B5563", // gray-600
          700: "#374151", // gray-700
          800: "#1F2937", // gray-800
          900: "#111827", // gray-900
        },
        // Accent Colors - Trending topics, interactive elements highlight
        accent: {
          DEFAULT: "#F59E0B", // amber-500
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          200: "#FDE68A", // amber-200
          300: "#FCD34D", // amber-300
          400: "#FBBF24", // amber-400
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
          800: "#92400E", // amber-800
          900: "#78350F", // amber-900
        },
        // Background Colors
        background: "#FFFFFF", // white - Clean content canvas, maximum readability
        surface: "#F9FAFB", // gray-50 - Subtle content separation, card backgrounds
        
        // Text Colors
        text: {
          primary: "#111827", // gray-900 - Extended article reading, headline clarity
          secondary: "#6B7280", // gray-500 - Bylines, timestamps, supporting information
        },
        
        // Status Colors
        success: {
          DEFAULT: "#059669", // emerald-600 - Fact-check verification, positive confirmation
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
        },
        warning: {
          DEFAULT: "#D97706", // amber-600 - Developing stories, editorial notes
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
        },
        error: {
          DEFAULT: "#DC2626", // red-600 - Corrections, urgent alerts
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
          700: "#B91C1C", // red-700
        },
        
        // Border Colors
        border: {
          DEFAULT: "#E5E7EB", // gray-200 - Clean content separation
          light: "#F3F4F6", // gray-100
        },
      },
      fontFamily: {
        // Headlines: Inter (600;700;800) - Strong, modern authority
        inter: ['Inter', 'sans-serif'],
        // Accents: JetBrains Mono (400;500) - Technical precision for timestamps, data
        mono: ['JetBrains Mono', 'monospace'],
        // Default sans-serif stack
        sans: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      boxShadow: {
        // Minimal elevation for floating elements
        editorial: '0 1px 3px rgba(0, 0, 0, 0.1)',
        'editorial-lg': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        // Smooth transitions for interactive states
        'micro': '200ms',
        'editorial': '300ms',
        'breaking': '400ms',
      },
      transitionTimingFunction: {
        'editorial': 'ease-in-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'editorial': '0.5rem',
      },
      lineHeight: {
        'tight': '1.1',
        'snug': '1.375',
        'relaxed': '1.625',
      },
    },
  },
  plugins: [],
}