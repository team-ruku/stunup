module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@root": "./",
          "@app": "./src",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
