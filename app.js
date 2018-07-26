// 导包
var express = require('express');
var router = require('./router')
var bodyParser = require('body-parser')
// 创建实例
var app = express();

// 配置express-art-template
app.engine('html', require('express-art-template'));
// 配置body-parser
app.use(bodyParser.urlencoded({ extended: false }))

// 统一配置静态文件
app.use('/node_modules',express.static('./node_modules/'))
app.use('/public',express.static('./public'))


// 挂载路由
app.use(router)
// 绑定端口，启动服务器
app.listen(12345,()=>{
    console.log('服务器跑起来了 ————————————————————————————————————————')
})