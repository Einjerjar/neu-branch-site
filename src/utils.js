export const API_ROOT = import.meta.env.DEV ? import.meta.env.VITE_API_ROOT_DEV : import.meta.env.VITE_API_ROOT_PROD
export const HOST_ROOT = import.meta.env.DEV ? import.meta.env.VITE_HOST_ROOT_DEV : import.meta.env.VITE_HOST_ROOT_PROD

export const re_param = (url, params) => {
  let d = new URL(`${API_ROOT}/${url}`)
  for (let i in params) d.searchParams.append(i, params[i])
  return d.href
}

export const re_get = async (url, params) => {
  let res = await fetch(re_param(url, params))
  return await res.json()
}

export const clean_entries = entries => entries.map(v => {
  const t = {}
  Object.assign(t, v)

  for(let i in t) {
    if (i.startsWith('_') && i != '_id') {
      delete t[i]
    }
  }

  return t
})
