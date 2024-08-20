import { createHash } from 'node:crypto';


export default {
  //js2svg: { indent: 2, pretty: true },
  plugins: [
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