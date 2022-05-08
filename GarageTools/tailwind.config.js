module.exports = {
    content: [
        './Views/**/*.cshtml',
        './**/*.cshtml',
        './Pages/**/*.cshtml'
    ],
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif']
        }
    },
    plugins: [
        require('@tailwindcss/aspect-ratio')
    ],
}