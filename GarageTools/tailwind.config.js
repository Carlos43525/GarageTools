module.exports = {
    content: [
        './Views/**/*.cshtml',
        './**/*.cshtml',
        './Pages/**/*.cshtml'
    ],
    theme: {
        extend: {
            colors: {
                'site-primary': '#2446A3',
                'site-secondary': '#A38124', 
                'site-tertiary': '#DEBE69',
                'site-gray': '#1a1a1a'
            }
        }, 
        fontFamily: {
            sans: ['Roboto', 'sans-serif']
        }
    },
    plugins: [
        require('@tailwindcss/aspect-ratio')
    ],
}