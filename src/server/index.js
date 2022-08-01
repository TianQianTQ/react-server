// const express = require('express')
// const app = express()
// const port = 3000
// const Home = require('./containers/Home')

import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from '../containers/Home'
import { StaticRouter } from 'react-router-dom/server'
// import routers from '../routers'

const app = express()
const port = 3000
// const content = renderToString(<Home />)
// 虚拟dom是真实dom的一个js对象映射
// 提升渲染性能；服务端渲染简单
// 浏览器端渲染：react代码在浏览器上执行，消耗的是用户浏览器的性能
// 服务端渲染：首屏加载速度快，有利于seo；消耗浏览器性能
// "start": "node ./build/bundle.js",
// 如果访问静态文件，则到public中寻找
app.use(express.static('public'))
app.get('/', function (req, res) {
	const content = renderToString((
		<StaticRouter >
			<Home />
		</StaticRouter>
	))
	res.send(
		`<html>
			<head>
				<title>ssr</title>
			</head>
			<body>
				<h1>first lesson</h1>
				<p>hello world</p>
				<div id='root'>${content}</div>
				<script src="/index.js"></script>
			</body>
		</html>`
	);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})