module.exports = {
  plugins: [
    "@babel/plugin-transform-typescript",
    "@babel/plugin-proposal-class-properties",
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3,
        useESModules: true,
      },
    ],
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        loose: true,
      },
    ],
  ],
};
