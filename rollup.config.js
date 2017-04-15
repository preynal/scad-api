import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'src/index.js',
  dest: 'dist/index.js',
  format: 'cjs',
  moduleName: '@jscad/scad-api',
  sourceMap: 'true',
  external: [
    '@jscad/csg'
  ],
  plugins: [
    buble(),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      namedExports: {
        'node_modules/@jscad/csg': [ 'CSG', 'CAG' ]
      }
    })
  ]
}
