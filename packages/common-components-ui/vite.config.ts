import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: '@foodby/common-components-ui',
      fileName: (format) => `main.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
      plugins: [
        // @ts-ignore
        typescript({
          target: 'ESNext',
          useDefineForClassFields: true,
          lib: ['DOM', 'DOM.Iterable', 'ESNext'],
          allowJs: false,
          skipLibCheck: true,
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
          strict: true,
          forceConsistentCasingInFileNames: true,
          module: 'ESNext',
          moduleResolution: 'Node',
          resolveJsonModule: true,
          isolatedModules: true,
          declaration: true,
          declarationDir: './dist',
          jsx: 'react',
          exclude: [
            'node_modules',
            './src/**/*.stories.tsx',
            './src/**/*.test.tsx',
            './src/__mocks__/**/*.ts',
            './src/setupTests.ts',
          ],
        }),
      ],
    },
  },
});
