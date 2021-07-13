const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');
const template = require('./core/template.js');

fs.writeFileSync(
	path.resolve(__dirname, './src/index.html'),
	template('./build/bundle.js')
);

esbuild
	.build({
		entryPoints: ['src/index.js'],
		outfile: 'scr/build/bundle.js',
		loader: {
			'.html': 'text'
		},
		bundle: true,
		minify: true,
		sourcemap: true,
		target: ['es2020', 'chrome58', 'firefox57', 'safari11', 'edge16'],
		watch: true
	})
	.catch(() => process.exit(1));
