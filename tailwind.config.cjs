/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        geist: {
          primary: {
            background: "#FFF",
            "accent-1": "#FAFAFA",
            "accent-2": "#EAEAEA",
            "accent-3": "#999",
            "accent-4": "#888",
            "accent-5": "#666",
            "accent-6": "#444",
            "accent-7": "#333",
            "accent-8": "#111",
            foreground: "#000",
          },
          status: {
            success: {
              lighter: "#D3E5FF",
              light: "#3291FF",
              default: "#0070F3",
              dark: "#0761D1",
            },
            error: {
              lighter: "#F7D4D6",
              light: "#FF1A1A",
              default: "#E00",
              dark: "#C50000",
            },
            warning: {
              lighter: "#FFEFCF",
              light: "#F7B955",
              default: "#F5A623",
              dark: "#AB507A",
            },
            cyan: {
              lighter: "#AAFFEC",
              light: "#79FFE1",
              default: "#50E3C2",
              dark: "#29BC9B",
            },
            violet: {
              lighter: "#E3D7FC",
              light: "#8A63D2",
              default: "#7928CA",
              dark: "#4C2889",
            },
            highlight: {
              alert: "#FF0080",
              purple: "#F81CE5",
              magenta: "#EB367F",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
