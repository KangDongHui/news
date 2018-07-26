const connection = require('../tools/db_config')
const M_user = require('../models/m_user')
//   开启数据库连接
//   connection.connect();
// 登录页面渲染
exports.showLogin = (req,res)=>{
    
    res.render('signin.html')
}
// 表单请求验证
exports.requestLogin = (req,res)=>{
    const body = req.body;
    // data是个对象
    M_user.jyFrom(body.email,function (err,results){
        if(err){
            return res.send({
                code:500,
                message:err
            })  

        }
        if(!results[0]){
            return res.send({
                code:2,
                message:"请输入正确的邮箱"
            })
        }
        // 邮箱输入正确 ，开始验证密码是否正确 
        if(body.password !== results[0].password){
            return res.send({
                message:'密码输入错误，请重新输入'
            })
        }

        // 校验通过 用户登录成功
        return res.send({
            code:1,
            message:'用户登录成功'
        })
    })

}
