const presets = [
  [
    "@babel/preset-env",
    {
      modules: false,
    },
  ],
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
