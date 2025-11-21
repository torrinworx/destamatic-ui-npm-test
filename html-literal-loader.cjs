// html-literal-loader.cjs
const compileHTMLLiteral = require('destam-dom/transform/htmlLiteral').default;

module.exports = function htmlLiteralLoader(source, map) {
  const callback = this.async();
  const id = this.resourcePath;

  try {
    const transformed = compileHTMLLiteral(source, {
      sourceFileName: id,
      plugins: id.endsWith('.jsx') ? ['jsx'] : [],
      jsx_auto_import: {
        h: 'destamatic-ui',
        mark: 'destamatic-ui',
        raw: { name: 'h', location: 'destam-dom' },
      },
    });

    callback(null, transformed.code, transformed.map || map);
  } catch (err) {
    callback(err);
  }
};