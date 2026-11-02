import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';

  return {
    plugins: [
      react(),
      ...(isBuild
        ? [
            dts({
              tsconfigPath: './tsconfig.app.json',
              entryRoot: 'src/lib',
              include: ['src/lib/**/*'],
              outDir: 'dist',
              insertTypesEntry: true,
              rollupTypes: false,
            }),
          ]
        : []),
    ],

    resolve: {
      alias: {
        '@': resolve(import.meta.dirname, './src'),
      },
    },

    ...(isBuild && {
      build: {
        lib: {
          entry: resolve(import.meta.dirname, 'src/lib/index.ts'),
          name: 'ModularUiKitReact',
          formats: ['es', 'cjs'],
          fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
        },

        rollupOptions: {
          external: ['react', 'react-dom', 'react/jsx-runtime'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'react/jsx-runtime': 'jsxRuntime',
            },
            assetFileNames: (assetInfo) => {
              if (assetInfo.name?.endsWith('.css')) {
                return 'modular-ui-kit-react.css';
              }
              return assetInfo.name || '';
            },
          },
        },
      },
    }),
  };
});