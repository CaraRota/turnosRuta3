/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                blackRussian: {
                    50: "#e9f2ff",
                    100: "#d6e7ff",
                    200: "#b6d1ff",
                    300: "#8ab1ff",
                    400: "#5c82ff",
                    500: "#3755ff",
                    600: "#1524ff",
                    700: "#0b16f7",
                    800: "#0c17c7",
                    900: "#14209b",
                    950: "#050725",
                },
            },
        },
    },
    plugins: [],
};
