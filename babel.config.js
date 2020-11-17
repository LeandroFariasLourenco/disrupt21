module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    ['module-resolver', {
      root: ['./'],
      alias: {
        '@Components': './src/components',
        '@Screens': './src/screens',
        '@Style': './src/style',
        '@Redux': './src/redux',
        '@Actions': './src/actions',
        '@Constants': './src/constants',
        '@Icons': './src/icons',
        '@Utils': './src/utils',
      },
    }],
  ],
};
