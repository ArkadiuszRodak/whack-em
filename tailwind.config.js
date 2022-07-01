module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        '1/2': '50%',
        full: '100%',
      },
      dropShadow: {
        xl: '0 15px 15px rgba(0, 0, 0, 0.5)',
      },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '728px',
        xl: '728px',
        '2xl': '728px',
      },
    },
  },
  safelist: [
    {
      pattern: /grid-cols-(2|3|4)/,
    },
    {
      pattern: /(border|text)-stone-(300|700)/,
    },
    {
      pattern: /(bg|border)-(sky|emerald|red|slate)-500/,
      variants: ['hover'],
    },
  ],
  plugins: [],
};
