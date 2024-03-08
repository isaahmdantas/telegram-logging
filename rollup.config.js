import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default [
  // Configuração para o ambiente Node.js (CommonJS)
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
    },
    plugins: [
      nodeResolve({
        extensions: ['.ts'],
      }),
      commonjs(),
      typescript(), // Adicionando o plugin TypeScript
    ],
    external: ['axios', 'date-fns'],
  },
  // Configuração para navegadores (ES module)
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
    plugins: [
      nodeResolve({
        extensions: ['.ts'],
      }),
      commonjs(),
      typescript(), // Adicionando o plugin TypeScript
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'TelegramLogging',
    },
    plugins: [
      nodeResolve({
        extensions: ['.ts'],
      }),
      commonjs(),
      typescript(), // Adicionando o plugin TypeScript
    ],
    external: ['axios', 'date-fns'],
  },
];
