module.exports = {
	arrowParens: "avoid",
	overrides: [
		{
			files: "*.html",
			options: {
				parser: "html",
			},
		},
		{
			files: "*.component.html",
			options: {
				parser: "angular",
			},
		},
	],
	plugins: [require("prettier-plugin-tailwindcss")],
	tailwindConfig: "./tailwind.config.js",
};
