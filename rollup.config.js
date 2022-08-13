import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

import babel from "rollup-plugin-babel";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  plugins: [typescript(), babel(), terser()],
};
