import Home from '@/pages/Home.svelte'
import AcademicPrograms from '@/pages/AcademicPrograms2.svelte'
import Campus from '@/pages/Campus.svelte'
import AdmissionFrontPage from '@/pages/AdmissionFrontpage.svelte'
import Procedure from '@/pages/Procedure.svelte'
import Undergrad from '@/pages/Undergrad.svelte'
import SeniorHigh from '@/pages/SeniorHigh.svelte'
import BasicEducation from '@/pages/BasicEducation.svelte'
import Visit from '@/pages/Visit.svelte'
import EventsInfo from '@/pages/EventsInfo.svelte'
import EventMore from '@/pages/EventMore.svelte'


import Events from '@/pages/Events.svelte'
// import Events2 from "@/pages/Events2.svelte";


export const primaryLinks = [
  { label: 'Home', path: '/', component: Home },
  { label: 'Campus', path: '/campus', component: Campus },
  { label: 'Academics', path: '/academics', component: AcademicPrograms },
  { label: 'Admission', path: '/admission', component: AdmissionFrontPage },
  // { label: 'About NEU', path: '/about', component: AboutNEU }
]

export const secondaryLinks = [
  { label: 'Resources', path: '/resources', component: Home },
  { label: 'Visit', path: '/visit', component: Visit },
  { label: 'Events', path: '/events', component: Events },
]

// export const procedureLinks = [
// ]

export const admissionLinks = [
  { label: 'BasicEducation', path: '/admission/basicEducation', component: BasicEducation },
  { label: 'SeniorHigh', path: '/admission/seniorHigh', component: SeniorHigh },
  { label: 'Undergrad', path: '/admission/undergrad', component: Undergrad },
  { label: 'Procedure', path: '/admission/procedure', component: Procedure },
  { label: 'EventsInfo', path: '/eventsInfo', component: EventsInfo },
]

export const links = [
  // Navbar links
  {
    name: 'Home',
    path: '/',
    component: Home,
    category: 'hidden',
  },
  {
    name: 'Primary Links',
    sublinks: primaryLinks,
    category: 'primary'
  },
  {
    name: 'Secondary Links',
    sublinks: secondaryLinks,
    category: 'secondary'
  },
  {
    name: 'Admission Links',
    sublinks: admissionLinks,
    category: 'admission'
  },
  {
    name: 'Post List',
    path: '/eventlist/:filter?/:page?',
    component: EventMore,
    category: 'hidden',
  }
]