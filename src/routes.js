import { links } from '@/route_data'

let rr = {}

links.forEach(v => {
  if(v.sublinks) {
    v.sublinks.forEach(x => {
      rr[x.path] = x.component
    })
  }else {
    rr[v.path] = v.component
  }
})

export const routes = rr