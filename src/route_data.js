import Home from "@/pages/Home.svelte";
import AcademicPrograms from "@/pages/AcademicPrograms.svelte";
import Campus from "@/pages/Campus.svelte";
import AdmissionFrontPage from "@/pages/AdmissionFrontpage.svelte";
import AboutNEU from "@/pages/AboutNEU.svelte";
import Procedure from "@/pages/Procedure.svelte";
import Undergrad from "@/pages/Undergrad.svelte";
import Events from "@/pages/Events.svelte";


export const primaryLinks = [
  { label: 'Academics', path: '/academics', component: AcademicPrograms },
  { label: 'Admission', path: '/admission', component: AdmissionFrontPage },
  { label: 'Campus', path: '/campus', component: Campus },
  { label: 'About NEU', path: '/about', component: AboutNEU }
]

export const secondaryLinks = [
  { label: 'Resources', path: '/resources', component: Home },
  { label: 'Visit', path: '/visit', component: Home },
  { label: 'Events', path: '/events', component: Events },
  { label: 'Alumnae', path: '/alumnae', component: Home },
]

export const admissionLinks = [
  { label: 'Procedure', path: '/procedure', component: Procedure },
  { label: 'Undergrad', path: '/undergrad', component: Undergrad },

]

export const links = [
  // Navbar links
  {
    name: "Home",
    path: "/",
    component: Home,
    category: "hidden",
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

  // Footer links
  {
    name: "Basic Facts",
    sublinks: [
      { label: "university mission", component: Home, path: "/" },
      { label: "university vision", component: Home, path: "/" },
      { label: "university goals", component: Home, path: "/" },
      { label: "university history", component: Home, path: "/" },
    ],
    category: "footer",
  },
  {
    name: "Campuses",
    sublinks: [
      { label: "NEU quezon city (main)", component: Home, path: "/" },
      { label: "NEU batangas", component: Home, path: "/" },
      { label: "NEU pampanga", component: Home, path: "/" },
      { label: "NEU general santso city", component: Home, path: "/" },
      { label: "NEU rizal", component: Home, path: "/" },
    ],
    category: "footer",
  },
  {
    name: "Other Links",
    sublinks: [
      { label: "School Calendar", component: Home, path: "/" },
      { label: "Research & Publication", component: Home, path: "/" },
      { label: "NEUTECH", component: Home, path: "/" },
      { label: "MCLE", component: Home, path: "/" },
      { label: "RUSSIAN STUDIES CENTER", component: Home, path: "/" },
    ],
    category: "footer",
  },
];
