import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
  },
  // css: {
  //   // css预处理器
  //   preprocessorOptions: {
  //     scss: {
  //       charset: false,
  //       additionalData: '@import "./src/assets/style/public-class.scss";',
  //     },
  //   },
  // },
  // 'style-resources-loader': {
  //   preProcessor: 'scss',
  //   patterns: [
  //     path.resolve(__dirname, './src/assets/style/public-class.scss'),
  //   ]
  // }
})
