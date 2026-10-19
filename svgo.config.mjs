import { createHash } from 'node:crypto';
import { basename } from 'node:path';

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
        // Hash the file name, not the full path, so ids are identical on every machine and in CI.
        prefix: (element, extra) => createHash('shake256', { outputLength: 4 }).update(basename(extra.path)).digest('hex'),
      },
    },
  ],
};