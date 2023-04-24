import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";

export default {
	input: "src/index.js",
	output: [
		{
			file: "dist/cjs/index.cjs",
			format: "cjs",
		},
		{
			file: "dist/esm/index.js",
			format: "esm",
		},
		{
			file: "dist/index.js",
			format: "umd",
			name: "autoResize",
		},
	],
	plugins: [
		babel({
			exclude: "node_modules/**",
			babelHelpers: "bundled",
		}),
		terser(),
	],
};
