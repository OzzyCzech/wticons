let prefixCounter = 0;

export default {
  //js2svg: { indent: 2, pretty: true },
  plugins: [
    'preset-default',
    'removeDimensions',
    {
      name: 'prefixIds',
      params: {
        delim: '',
        prefix: () => `w${prefixCounter++}`,
      },
    },
  ],
};