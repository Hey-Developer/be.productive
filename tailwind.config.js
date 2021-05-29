module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        appPrimary: "#FFFFFF",
        appAccent1: "#08003C", // dark blue
        appAccent2: "#FDA900", // yellow
        appAccent3: "#F91650", // pink
        appAccent4: "#00AD95", // green
        appAccent5: "#E86F3C", //orange
        appAccent6: "#2486AF", // blue
      },
    },
  },
  variants: {
    extend: {},
  },
  important: true,
  plugins: [require("@tailwindcss/forms")],
};
