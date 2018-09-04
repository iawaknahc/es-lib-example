// Use all presets except @babel/preset-stage-x and @babel/preset-minify.
// @babel/preset-stage-x are going to be deprecated.
// @babel/preset-minify is supposed to be used by application.
const presets = [
  {
    presets: [
      [
        "@babel/preset-env",
        {
          // Do not transform module syntax.
          // It is because module syntax is bound to
          // bundle output format, which is the job of the bundler.
          modules: false,
        },
      ],
    ],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          corejs: 2,
          helpers: true,
          regenerator: true,
          useESModules: true,
        },
      ],
    ],
  },
  "@babel/preset-react",
  {
    plugins: [
      [
        "@babel/plugin-transform-flow-strip-types",
        {
          requireDirective: true,
        },
      ],
    ],
  },
  {
    plugins: ["@babel/plugin-proposal-class-properties"],
  },
  "@babel/preset-typescript",
];

module.exports = {
  presets,
};
