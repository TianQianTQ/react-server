
const path = require('path');
const { merge } = require('webpack-merge')
const config = require('./webpack.base.js')

const clientConfig = {
  mode: 'development',  // 区分项目运行环境
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',// 输出文件名
    path: path.resolve(__dirname, 'public'), // 输出文件的目标文件夹
    clean: true,									// 每次打包后是否清除dist
  }
};

module.exports = merge(config, clientConfig)