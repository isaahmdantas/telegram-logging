import typescript from 'rollup-plugin-typescript2';
// import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs', // CommonJS
  },
  plugins: [
    resolve(), // Resolve dependências externas
    commonjs(), // Converte módulos CommonJS para ES6
    typescript(), // Compila arquivos TypeScript
  ],
  external: ['axios', 'date-fns'], // Excluir dependências externas da bundling
};
