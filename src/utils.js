export const API_ROOT = import.meta.env.DEV ? import.meta.env.VITE_API_ROOT_DEV : import.meta.env.VITE_API_ROOT_PROD
export const HOST_ROOT = import.meta.env.DEV ? import.meta.env.VITE_HOST_ROOT_DEV : import.meta.env.VITE_HOST_ROOT_PROD

export const re_param = (url, params) => {
  let _url = new URL(`${API_ROOT}/${url}`)
  for (let i in params) _url.searchParams.append(i, params[i])
  return _url.href
}

export const re_get = async (url, params) => {
  let res = await fetch(re_param(url, params))
  return await res.json()
}

export const clean_item = v => {
  const temp = {}
  Object.assign(temp, v)

  for(let i in temp) {
    if (i.startsWith('_') && i != '_id') {
      delete temp[i]
    }
  }

  return temp
}

export const clean_entries = entries => entries.map(v => clean_item(v))
