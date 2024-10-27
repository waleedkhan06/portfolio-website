// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include all relevant directories
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bright-cyan': '#00e5ff',      // Cyan shade for dark mode
        'soft-gold': '#FFD700',        // Soft gold for light mode text
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFD700, #FFC300)',  // Gold gradient for light mode
        'cyan-gradient': 'linear-gradient(135deg, #00e5ff, #00c6ff, #00aaff)', // Cyan gradient for dark mode
      },
      animation: {
        'gradient-move': 'gradientAnimation 6s ease infinite', // Gradient animation
      },
      keyframes: {
        gradientAnimation: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};

