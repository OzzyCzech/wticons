import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';
//const svgr = require('@svgr/rollup').default;

const config = {
	input: 'src/index.ts',
	output: [
		{
			dir: 'dist/index.d.js',
			format: 'esm',
			sourcemap: true,
		}
	],
	plugins: [
		peerDepsExternal(),
		resolve(),
		typescript(),
		filesize(),
	],
};

export default config;