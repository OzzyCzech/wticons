import { createHash } from 'node:crypto';


export default {
  //js2svg: { indent: 2, pretty: true },
  plugins: [
    // Remove Affinity editor metadata before generating React/Astro components.
    {
      name: 'removeAttrs',
      params: {
        elemSeparator: ';',
        attrs: ['affinity:.*', 'xmlns:affinity'],
      },
    },
    'preset-default',
    'removeDimensions',
    {
      name: 'prefixIds',
      params: {
        delim: '',
        prefix: (element, extra) => createHash('shake256', { outputLength: 4 }).update(extra.path).digest('hex'),
      },
    },
  ],
};