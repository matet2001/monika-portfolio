import typography from "@tailwindcss/typography";

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-quicksand)", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "2.25rem", // 36px
              fontWeight: "700",
              lineHeight: "1.3",
              marginBottom: "1rem",
            },
            h2: {
              fontSize: "1.875rem", // 30px
              fontWeight: "700",
              lineHeight: "1.3",
              marginBottom: "0.75rem",
            },
            p: {
              fontSize: "1.125rem", // 18px
              lineHeight: "1.75",
              marginBottom: "1rem",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
