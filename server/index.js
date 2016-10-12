const Koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const app = new Koa()
app.use(bodyParser({ enableTypes: ['text', 'json'] }))
const Wemo = require('wemo-client')
const wemo = new Wemo()

let device
let client

console.log('starting wemo discovery')
wemo.discover((deviceInfo) => {
  console.log('device found: ', deviceInfo.friendlyName)
  device = deviceInfo.friendlyName
  client = wemo.client(deviceInfo)
})

router.get('/', (ctx, next) => {
  ctx.body = `Connected To ${device}`
  ctx.set('Access-Control-Allow-Origin', '*')
})

router.post('/lights', (ctx, next) => {
  const body = ctx.request.body
  console.log(`turning lights ${body}`)
  const state = body === 'on' ? 1 : 0
  client.setBinaryState(state)
  ctx.body = 'true'
  ctx.set('Access-Control-Allow-Origin', '*')
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(8081)
