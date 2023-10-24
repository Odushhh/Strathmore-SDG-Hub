/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [
        require('@acmecorp/tailwind-base'),
        require('@acmecorp/base-tailwind-config')
    ],
    content: [
        "./dist/*.{html,js}",
        ".}",
        './pages/index.html',
        './components/tailwindstyle.css',

    ],
    theme: {
        margin: {
            'margin': '3px'
        },
        extend: {
            backgroundImage: {
                'background1': url("images/background1.png")
            },

            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                georgia: ['Georgia', 'sans'],
                lato: ['Lato'],
                questrial: ['Questrial', 'sans'],
                chakrapetch: ['Chakra Petch', 'cursive'],
                opensans: ['Open Sans', 'serif'],
                roboto: ['Roboto', 'mono']
            },
            fontSize: {
                '4xl': '2.25 rem',
                '5xl': '3rem',
                '6xl': '3.75rem',
                '7xl': '4.5rem',
                '8xl': '6rem',
                '9xl': '8rem'
            }
        },
        colors: {
            'white': '#FFFFFF',
            'button': '#b8defb',
            'button-hover': '#a5c7e1',
            'box-color': '#f2e8df',
            'blue': '#1fb6ff',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
            'black': '#000000',
            'red': '#FF0000',
            'yellow': '#FFFF00',
            'blue': '#0000FF',
            'orange': '#FFA500',
            'purple': '#800080',
            'pink': '#FFC0CB',
            'gray': '#808080',
            'navy': '#000080',
            'aqua': '#00FFFF',
            'cyan': '#00FFFF',
            'fuchsia': '#FF00FF',
            'lime': '#00FF00',
            'olive': '#808000',
            'teal': '#008080'
        }



    },
    plugins: [
        plugin(function({ addUtilities, addComponents, e, config }) {

        }),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ]
}