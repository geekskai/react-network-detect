import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

import babel from "rollup-plugin-babel";

export default {
  input: "src/index.ts",
  output: {
    file: "index.js",
    format: "es",
  },
  plugins: [typescript(), babel(), terser()],
};
