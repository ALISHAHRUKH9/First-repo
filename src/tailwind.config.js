// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in",
        slideInLeft: "slideInLeft 1s ease-out",
        slideInRight: "slideInRight 1s ease-out",
        fadeInUp: "fadeInUp 1s ease-in-out",
        zoomIn: "zoomIn 1s ease-in",
        bounceIn: "bounceIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        zoomIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.5)", opacity: 0 },
          "60%": { transform: "scale(1.2)", opacity: 1 },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
};