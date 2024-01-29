/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	safelist: [
		{
			pattern: /bg-(purple)-(700)/,
		},
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
