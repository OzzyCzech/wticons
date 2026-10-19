// svgr index template: like the default one, but with explicit .js extensions
// so the published ESM entry point also resolves in plain Node, not only in bundlers.
const { basename, extname } = require('node:path');

module.exports = (paths) =>
  paths
    .map(({ path }) => {
      const name = basename(path, extname(path));
      const exportName = /^\d/.test(name) ? `Svg${name}` : name;
      return `export { default as ${exportName} } from './${name}.js';`;
    })
    .join('\n') + '\n';
