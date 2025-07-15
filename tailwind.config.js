module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0E0E10',
        text: '#F5F5F5',
        secondary: '#B3B3B3',
        primary: '#3B82F6',
        purple: '#A855F7',
        success: '#22C55E',
        error: '#EF4444',
        glass: 'rgba(255,255,255,0.05)',
      },
      boxShadow: {
        'card-glow': '0 0 20px rgba(168, 85, 247, 0.4)',
        'button-glow': '0 0 10px #3B82F6',
        'depth': '0 10px 30px rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #3B82F6, #A855F7)',
      },
      borderColor: {
        glass: 'rgba(255,255,255,0.1)',
      },
    },
  },
  plugins: [],
}; 