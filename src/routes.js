import { links } from '@/route_data'

let rr = {}

links.forEach(v => {
  rr[v.path] = v.component
})

export const routes = rr