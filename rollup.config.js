import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'src/setup.js',
  plugins: [
    nodeResolve(),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      babelHelpers: 'bundled',
      presets: [['@babel/preset-env', { modules: false }]],
    }),
  ],
  output: {
    format: 'cjs',
    file: 'dist/setup.js',
  },
};
