import Home from '@/pages/Home.svelte'
import AcademicPrograms from '@/pages/AcademicPrograms.svelte'

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
]