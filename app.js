const Koa = require('koa')
const app = new Koa()
const debug = require('debug')('koa-weapp-demo')
const response = require('./middlewares/response')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
var cors=require('koa2-cors');


const router = require('koa-router')({
    prefix: '/heyushuo'
})
router.get('/index/index',function(ctx,body){
    console.log('i am');
    console.log('ctx',ctx)
    ctx.body='i am ready'
})

app.use(cors())

// 使用响应处理中间件
//app.use(response)

// 解析请求体
app.use(bodyParser())

// 引入路由分发
//const router = require('./routes')
//app.use(router.routes()) // 添加路由中间件
app.use(router.routes())

// 启动程序，监听端口
app.listen(config.port, () => debug(`listening on port ${config.port}`))
