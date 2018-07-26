const connection = require('../tools/db_config')


function jyFrom(email,callback) {
    const sqlstr = 'SELECT * FROM `users` WHERE `email`=?';
    connection.connection.query(sqlstr,email ,(err,results)=>{
    
    if(err){
        return callback(err)
    }
    callback(null,results)
    })
}
module.exports.jyFrom = jyFrom;