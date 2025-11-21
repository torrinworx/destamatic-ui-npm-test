import { defineConfig } from 'vite';
import assertRemove from 'destam-dom/transform/assertRemove';
import compileHTMLLiteral from 'destam-dom/transform/htmlLiteral';

const createTransform = (name, transform, jsx, options) => ({
  name,
  transform(code, id) {
    console.log(id);
    const [cleanId] = id.split('?', 1);

    if (cleanId.endsWith('.js') || (jsx && cleanId.endsWith('.jsx'))) {
      const transformed = transform(code, {
        sourceFileName: cleanId,
        plugins: cleanId.endsWith('.jsx') ? ['jsx'] : [],
        ...options,
      });
      return {
        code: transformed.code,
        map: transformed.map,
      };
    }
  },
});

const plugins = [];

plugins.push(createTransform('transform-literal-html', compileHTMLLiteral, true, {
    jsx_auto_import: {
        h: 'destamatic-ui',
        'mark': 'destamatic-ui',

        raw: {
            name: 'h',
            location: 'destam-dom'
        }
    },
}));

if (process.env.ENV === 'production') {
    plugins.push(createTransform('assert-remove', assertRemove));
}

export default defineConfig({
    root: './',
    plugins,
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
    },
    server: {
        port: 3000,
    },
    optimizeDeps: {
        exclude: ['destamatic-ui', 'destam-dom', 'destam'],
    },
    ssr: {
        noExternal: ['destamatic-ui', 'destam-dom', 'destam'],
    },
    esbuild: {
        jsx: 'preserve',
    },
});
