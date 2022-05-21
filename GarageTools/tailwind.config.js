module.exports = {
    content: [
        './Views/**/*.cshtml',
        './**/*.cshtml',
        './Pages/**/*.cshtml'
    ],
    theme: {
        extend: {
            colors: {
                'site-primary': '#1a1a1a', // gray
                'site-secondary': '#00A0DD', // light blue/logo blue
                'site-tertiary': '#c8c8c8', // light-gray
                'ryobi-green': '#e1e723', 
                'dewalt-yellow': '#febd17',
                'milwaukee-red': '#db011c',
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