/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
            'page-bg': '#f2e8d5',
            'text-primary': '#2c1810',
            },
            fontFamily: {
                'baskerville': ['Baskerville', 'serif'],
            },
            keyframes: {
                blink: {
                    '0%, 45%': { opacity: '1' },
                    '46%, 100%': { opacity: '0' }
                }
            },
            animation: {
                'blink': 'blink 1s infinite'
            }
        },
  },
  plugins: [],
}