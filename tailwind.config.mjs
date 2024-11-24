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
        },
  },
  plugins: [],
}