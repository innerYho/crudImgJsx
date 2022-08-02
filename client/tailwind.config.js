module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                nochero: {
                    100: "#F3F5F9",
                    200: "#FFC107",
                    300: "#FFA000",
                    400: "#F57C00",
                    500: "#111827",
                    101: "#F2F2F2",
                    201: "#FFDD78",
                    301: "#FFC96E",
                    401: "#F6B069",
                    501: "#333333",
                    600: "#E5E5E5"
                },
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ["active"],
        },
    },
    fontFamily: {
        poppins: ["poppins", "sans-serif"],
        raleway: ["raleway", "sans-serif"],
    },

    plugins: [require("daisyui")],
};
