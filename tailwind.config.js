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
  safelist: [ // always include these classes for dynamic styling
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'text-stone-300',
    'bg-sky-800',
    'border-sky-800',
    'bg-emerald-800',
    'border-emerald-800',
    'bg-red-800',
    'border-red-800',
    'border-stone-800',
  ],
  plugins: [],
};
