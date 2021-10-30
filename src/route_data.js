import Home from '@/pages/Home.svelte'
import AcademicPrograms from '@/pages/AcademicPrograms.svelte'
import Campus from '@/pages/Campus.svelte'
import AdmissionFrontPage from '@/pages/AdmissionFrontPage.svelte'
import AboutNEU from '@/pages/AboutNEU.svelte'

export const links = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    category: 'hidden',
  },
  {
    name: 'Academics',
    path: '/academics',
    component: AcademicPrograms,
    category: 'primary',
  },
  {
    name: 'Admission',
    path: '/admission',
    component: AdmissionFrontPage,
    category: 'primary',
  },
  {
    name: 'Campus',
    path: '/campus',
    component: Campus,
    category: 'primary',
  },
  {
    name: 'About NEU',
    path: '/about',
    component: AboutNEU,
    category: 'primary',
  },
  {
    name: 'Resources',
    path: '/resources',
    component: Home,
    category: 'secondary',
  },
  {
    name: 'Visit',
    path: '/visit',
    component: Home,
    category: 'secondary',
  },
  {
    name: 'Events',
    path: '/events',
    component: Home,
    category: 'secondary',
  },
  {
    name: 'Alumnae',
    path: '/alumnae',
    component: Home,
    category: 'secondary',
  }
]