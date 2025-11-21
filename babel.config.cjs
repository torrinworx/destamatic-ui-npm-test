module.exports = function (api) {
  api.cache(true);
  const isProd = process.env.NODE_ENV === 'production';

  return {
    presets: [],
    plugins: [
      ['@babel/plugin-syntax-jsx'],
      // optional: other Babel plugins if you want,
      // but **do not** include compileHTMLLiteral or assertRemove here.
    ],
  };
};
