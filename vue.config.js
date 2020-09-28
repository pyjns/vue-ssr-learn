const SSRServer = require('vue-server-renderer/server-plugin')
const SSRClient = require('vue-server-renderer/client-plugin')
const nodeExternals = require('webpack-node-externals')
const merge = require('lodash.merge')

const TARGET_NODE = process.env.WEBPACK_TARGET === "node"
const Target = TARGET_NODE ? 'server' : 'client'

module.exports = {
  css: {
    extract: false
  },
  outputDir: `./dist/${Target}`,
  configureWebpack: () => ({
    entry: `./src/entry-${Target}.js`,
    devtool: 'source-map',
    target: TARGET_NODE ? 'node' : 'web',
    node: TARGET_NODE ? undefined : false,
    output: {
      libraryTarget: TARGET_NODE ? 'commonjs2' : undefined
    },
    externals: TARGET_NODE ? nodeExternals({ whitelist: [/\.css/] }) : undefined,
    optimization: {
      splitChunks: false
    },
    plugins: [TARGET_NODE ? new SSRServer() : new SSRClient()]
  }),
  chainWebpack: config => {
    config.module.rule("vue").use("vue-loader").tap(options => {
      merge(options, () => {
        optimizeSSR: false
      })
    })
  }
}






