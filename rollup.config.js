import { readFileSync } from "fs";

import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";

const extensions = [".mjs", ".js", ".jsx", ".ts", ".tsx"];

const plugins = [
  babel({
    extensions,
    exclude: "node_modules/**",
    runtimeHelpers: true,
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

const pkg = JSON.parse(readFileSync("./package.json", "utf8"));
const deps = Object.keys(pkg.dependencies);
function external(id) {
  for (const dep of deps) {
    if (id.startsWith(dep)) {
      return true;
    }
  }
  return false;
}

export default {
  input: "src/index.ts",
  // This external function is for demostrating the expected output of preset-env + transform-runtime.
  external,
  plugins,
  output,
};
