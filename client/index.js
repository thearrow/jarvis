// @flow
import { get, post } from './util'

(async() => {
  const api = 'http://localhost:8081'

  const msg = await get(api)
  document.getElementById('connected').innerHTML = msg

  document.getElementById('lights-on').addEventListener('click', (e) => {
    post(`${api}/lights`, 'on')
  })

  document.getElementById('lights-off').addEventListener('click', (e) => {
    post(`${api}/lights`, 'off')
  })

})()
