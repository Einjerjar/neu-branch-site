import AcademicPrograms from '@/pages/AcademicPrograms2.svelte'
import AdmissionFrontPage from '@/pages/AdmissionFrontpage.svelte'
import AdmissionProcedure from '@/pages/AdmissionProcedure.svelte'
import BasicEducation from '@/pages/BasicEducation.svelte'
import Campus from '@/pages/Campus.svelte'
import EventMore from '@/pages/EventMore.svelte'
import Events from '@/pages/Events.svelte'
import EventsInfo from '@/pages/EventsInfo.svelte'
import Home from '@/pages/Home.svelte'
import Procedure from '@/pages/Procedure.svelte'
import SeniorHigh from '@/pages/SeniorHigh.svelte'
import Undergrad from '@/pages/Undergrad.svelte'
import Visit from '@/pages/Visit.svelte'


export const primaryLinks = [
  { label: 'Home', path: '/', component: Home },
  { label: 'Campus', path: '/campus', component: Campus },
  { label: 'Academics', path: '/academics', component: AcademicPrograms },
  { label: 'Admission', path: '/admission', component: AdmissionFrontPage },
]

export const secondaryLinks = [
  {
    label: 'Resources', path: '/resources', component: Home, sublinks: [
      { label: 'Gale EBooks', path: 'http://www.infotrac.galegroup.com/itweb/phneu' },
      { label: 'UptoDate', path: 'http://www.uptodate.com' },
      { label: 'EBSCO Databases', path: 'http://search.ebscohost.com/' },
      { label: 'Worldbook Online', path: 'http://www.worldbookonline.com' },
      { label: 'Wiley Digital Textbooks', path: 'http://vle.neu.edu.ph' },
    ]
  },
  { label: 'Visit', path: '/visit', component: Visit },
  { label: 'Events', path: '/events', component: Events }
]

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
    name: 'Admission Sub',
    path: '/admission/:id',
    component: AdmissionProcedure,
  },
  {
    name: 'Post List',
    path: '/eventlist/:filter?/:page?',
    component: EventMore,
    category: 'hidden',
  }
]