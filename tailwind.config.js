/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Pastikan ini mencakup file HTML Anda
    // tambahkan path lain jika ada
  ],
  plugins: [
    function ({ addVariant }) {
      addVariant("group-not-buy-hover", ({ modifySelectors, separator }) => {
        return modifySelectors(({ className }) => {
          return `.group:hover a:not(.buy, .buy-cta, .learn).${e(
            `group-not-buy-hover${separator}${className}`
          )}`;
        });
      });
      // Utility untuk a:not(.buy, .buy-cta, .learn)
      addVariant("not-buy-hover", ({ modifySelectors, separator }) => {
        return modifySelectors(({ className }) => {
          return `.not-buy-hover\\:${className}:hover:not(.buy, .buy-cta, .learn)`;
        });
      });
    },
  ],
  theme: {
    extend: {
      colors: {
        dark: "#191f1d",
        "mid-dark": "#555a57",
        light: "#ece0c8",
        "mid-light": "#949993",
        shadow: "rgba(0, 0, 0, 0.3)", // Menggunakan format rgba untuk transparansi
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        dm: ["DM Serif Display", "serif"],
      },
      backgroundImage: {
        "noise-texture":
          'url("https://i.gyazo.com/a26366e538851a5c569ff648e99b7fd4.png")',
        "gif-texture":
          'url("https://64.media.tumblr.com/da60c13b478dda09ab90c27e880983b8/tumblr_nd4pwdPKdc1tun3l0o1_1280.gifv")',
        "linear-rainbow":
          "linear-gradient(to right, #ede6bf, #ecc947, #cb5a31, #6f5d79, #4e779a)",
        "circle-rainbow":
          "radial-gradient(circle at left top, #ede6bf, #ecc947, #cb5a31, #6f5d79, #4e779a)",
      },
      transitionProperty: {
        main: "all",
      },
      transitionTimingFunction: {
        "in-out": "ease-in-out",
      },
      transitionDuration: {
        200: "0.2s",
        400: "0.4s",
      },
      keyframes: {
        spawn: {
          "0%": { boxShadow: "0 0 0 var(--tw-shadow-color)", opacity: "0%" },
          "100%": {
            boxShadow: "0 0 32px var(--tw-shadow-color)",
            opacity: "100%",
          },
        },
      },
      animation: {
        spawn: "spawn 2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
