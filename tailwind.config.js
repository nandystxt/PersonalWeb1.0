/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	mode: "jit",
  theme: {
    extend: {
		screens: {
			sm: "360px", // Mobile (min-width: 360px)
			md: "768px", // Tablet Potrait (min-width: 768px)
			lg: "1024px", // Tablet Landscape (min-width: 1024px)
			xl: "1280px", // Desktop (min-width: 1280px)
		},
	colors: {
		primary : "#3F265F",
		secondary : "#AC9FA9",
	}
	},
  },
  plugins: [],
}

