module.exports = {
  presets: [
    ['@babel/preset-react', {"runtime": "automatic"}], 
    '@babel/preset-env',
  ],
  plugins: ["react-hot-loader/babel"]
};
