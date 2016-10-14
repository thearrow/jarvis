// @flow
import { get, post } from './util'
import annyang from 'annyang'

const api = 'http://localhost:8081'

function on() {
  console.log('turning lights on')
  post(`${api}/lights`, 'on')
}

function off() {
  console.log('turning lights off')
  post(`${api}/lights`, 'off')
}

(async() => {
  const msg = await get(api)
  document.getElementById('connected').innerHTML = msg
})()

if (annyang) {
  const commands = {
    "lights on": () => on(),
    "lights off": () => off(),
  }
  annyang.addCommands(commands)

  annyang.addCallback('start', () =>
    document.getElementById('listening').innerHTML = 'Annyang is Listening...'
  )
  annyang.addCallback('result', (result) =>
    console.log(result)
  )
  annyang.addCallback('error', (error) =>
    console.log(error)
  )

  annyang.start()
}

document.getElementById('lights-on').addEventListener('click', (e) => on())
document.getElementById('lights-off').addEventListener('click', (e) => off())
