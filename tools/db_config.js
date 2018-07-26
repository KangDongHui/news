var mysql = require('mysql')

// 配置mysql
exports.connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'newsql'
  });

