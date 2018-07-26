var express = require('express');
var c_user = require('./controller/c_user')



// 获取路由实例
var router = express.Router();

router.get('/login',c_user.showLogin)

router.post('/requestLogin',c_user.requestLogin)

module.exports = router;