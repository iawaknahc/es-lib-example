// Use all presets except @babel/preset-stage-x and @babel/preset-minify.
// @babel/preset-stage-x are going to be deprecated.
// @babel/preset-minify is supposed to be used by application.
const presets = [
  [
    "@babel/env",
    {
      // Do not transform module syntax.
      // It is because module syntax is bound to
      // bundle output format, which is the job of the bundler.
      modules: false,
    },
  ],
  "@babel/react",
  "@babel/flow",
  "@babel/typescript",
];

const plugins = [
  // Do not inline runtime.
  [
    "@babel/plugin-transform-runtime",
    {
      corejs: 2,
      helpers: true,
      regenerator: true,
      useESModules: true,
    },
  ],
  // TypeScript supports the following proposals
  // which are not stage-4 yet. So they are not
  // included by @babel/preset-env.
  "@babel/proposal-class-properties",
  "@babel/proposal-object-rest-spread",
];

module.exports = {
  presets,
  plugins,
};
