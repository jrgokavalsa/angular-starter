/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
        },
        extend: {
            keyframes: {
                indeterminate: {
                    '0%': { transform: 'translateX(-100%)' },
                    '50%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
            },
            animation: {
                indeterminate: 'indeterminate 1.5s infinite',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
