// @flow

export const get = async(url:string) => {
  try {
    const response = await fetch(url)
    const data = await response.text()
    return data
  } catch (e) {
    console.log(e)
  }
}

export const post = async(url:string, body:string) => {
  try {
    const response = await fetch(url, { method: 'POST', body })
    const data = await response.text()
    return data
  } catch (e) {
    console.log(e)
  }
}
