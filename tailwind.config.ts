module.exports = {
  darkMode: 'class', 
  content: [
    './app/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bright-cyan': '#00e5ff',   
        'soft-gold': '#FFD700',      
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFD700, #FFC300)',  
        'cyan-gradient': 'linear-gradient(135deg, #00e5ff, #00c6ff, #00aaff)',
      },
      animation: {
        'gradient-move': 'gradientAnimation 6s ease infinite', 
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

