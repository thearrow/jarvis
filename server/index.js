const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.body = 'Hello From Jarvis Server'
  ctx.set('Access-Control-Allow-Origin', '*')
})

app.listen(8081)
