import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";

const extensions = [".mjs", ".js", ".jsx", ".ts", ".tsx"];

const plugins = [
  babel({
    extensions,
    exclude: "node_modules/**",
  }),
  json({
    preferConst: true,
    indent: "  ",
  }),
  resolve({
    extensions,
  }),
  commonjs({
    include: "node_modules/**",
  }),
];

const output = [
  {
    format: "cjs",
    file: "dist/index.cjs.js",
  },
  {
    format: "esm",
    file: "dist/index.esm.js",
  },
];

export default {
  input: "src/index.ts",
  plugins,
  output,
};
