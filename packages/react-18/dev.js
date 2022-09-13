require('esbuild').build({
  entryPoints: ['index.jsx'],
  bundle: true,
  loader: { '.js': 'jsx' },
  outfile: 'dist/bundle.js',
  watch: {
    onRebuild(error) {
      if (error) {
        console.error(error);
      } else {
        console.log('Rebuild complete');
      }
    },
  },
});