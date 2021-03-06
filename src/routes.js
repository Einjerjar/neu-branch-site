// @ts-nocheck
import { links } from '@/route_data'
import EventDetails from '@/pages/EventDetails.svelte'

let rr = {
  '/events/:id': EventDetails,
}

links.forEach(v => {
  if (v.sublinks) {
    v.sublinks.forEach(x => {
      rr[x.path] = x.component
    })
  } else {
    rr[v.path] = v.component
  }
})

export const routes = rr