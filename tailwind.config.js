const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class",
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            yellow: colors.yellow,
            blue: {
                darker: "hsl(200, 15%, 8%)",
                dark: "hsl(207, 26%, 17%)",
                DEFAULT: "hsl(209, 23%, 22%)",
            },
            gray: {
                DEFAULT: "hsl(0, 0%, 52%)",
                light: "hsl(0, 0%, 98%)",
            },
            white: "hsl(0, 0%, 100%)",
        },
        fontWeight: {
            light: 300,
            semibold: 600,
            bold: 800,
        },
        container: {
            padding: "2rem",
            center: true,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
