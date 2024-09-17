import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/index.js',
  output: [
    {
      file: 'dist/AGantt.cjs.js', // CommonJS 格式，适用于 CommonJS 环境（如 Node.js）
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/AGantt.esm.js', // ES 模块格式，适用于 ES 模块环境（如现代浏览器）
      format: 'es',
      sourcemap: true
    },
    {
      file: 'dist/AGantt.umd.js', // UMD 格式，适用于 UMD 模块系统，通常用于浏览器和其他环境，同时支持 amd，cjs 和 iife
      format: 'umd',
      name: 'AGantt', // UMD 模块名称
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    commonjs({
      include: 'node_modules/**', // 转换 CommonJS 模块为 ES6 模块
      namedExports: {
        'dayjs': ['default'],  // 将 dayjs 的 "default" 导出指向命名导出
      },
    }),
    postcss({
      extensions: ['.less'],    // 支持 .less 文件
      extract: 'AGantt.css', // 将 CSS 输出为单独文件并指定路径
      minimize: true,           // 是否压缩 CSS
      plugins: [autoprefixer()],
      use: [
        ['less', { javascriptEnabled: true }] // 使用 less 编译器，并传递选项
      ]
    }),
  ],
}