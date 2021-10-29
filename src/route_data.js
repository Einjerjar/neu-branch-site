import Home from '@/pages/Home.svelte'
import AcademicPrograms from '@/pages/AcademicPrograms.svelte'
import Campus from '@/pages/Campus.svelte'

export const links = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Academic Programs',
    path: '/programs',
    component: AcademicPrograms,
  },
  {
    name: 'Campus',
    path: '/campus',
    component: Campus,
  },
]