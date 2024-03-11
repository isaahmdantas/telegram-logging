import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json'; 

export default [
  {
    input: 'src/index.js', 
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'auto',
    },
    plugins: [
      resolve(),
      commonjs(),
      json()
    ],
  },
  {
    input: 'src/index.js', 
    output: {
      file: 'dist/index.min.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'auto',
    },
    plugins: [
      resolve(),
      commonjs(),
      terser(),
      json()
    ],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'examples/bundle.js',
      format: 'umd',
      name: 'TelegramLogging',
      sourcemap: true,
    },
    plugins: [],
  }
];
