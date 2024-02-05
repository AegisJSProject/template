import nodeResolve from '@rollup/plugin-node-resolve';

const externalPackages = ['@shgysk8zer0/aegis'];

export default {
	input: 'index.js',
	output: {
		file: 'index.cjs',
		format: 'cjs',
	},
	plugins: [nodeResolve()],
	external: id => externalPackages.some(pkg => id.startsWith(pkg)),
};

