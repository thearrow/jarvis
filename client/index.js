// @flow
import { get } from './util'

(async() => {

  const msg = await get('http://localhost:8081')
  document.body.innerHTML = msg

})()
