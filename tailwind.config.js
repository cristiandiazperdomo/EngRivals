import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {},
    },
    plugins: [animations],
};
