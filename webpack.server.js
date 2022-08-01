
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge')
const config = require('./webpack.base.js')

const serverConfig = {
  target: 'node',  // 区分前端or服务端
  mode: 'development',  // 区分项目运行环境
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',// 输出文件名
    path: path.resolve(__dirname, 'build'), // 输出文件的目标文件夹
    clean: true,									// 每次打包后是否清除dist
  },
  externals: [nodeExternals()]
};

module.exports = merge(config, serverConfig)