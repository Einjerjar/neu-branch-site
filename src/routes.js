import { links } from '@/route_data'

let rr = {}

console.log(rr)

links.forEach(v => {
  console.log(1, v)
  rr[v.path] = v.component
})

export const routes = rr

console.log(2, rr)