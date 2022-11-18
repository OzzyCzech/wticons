import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const config = {
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/index.esm.js',
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve(),
		typescript(),
	],
};

export default config;