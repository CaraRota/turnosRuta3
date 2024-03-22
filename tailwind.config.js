/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                blackRussian: {
                    50: "#f2f8fd",
                    100: "#e4f0fa",
                    200: "#c2e0f5",
                    300: "#8dc8ec",
                    400: "#50ace0",
                    500: "#2992ce",
                    600: "#1b75b0",
                    700: "#175c8d",
                    800: "#174f75",
                    900: "#184362",
                    950: "#102a41",
                },
            },
        },
    },
    plugins: [],
};
