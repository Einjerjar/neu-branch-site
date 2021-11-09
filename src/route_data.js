import Home from "@/pages/Home.svelte";
import AcademicPrograms from "@/pages/AcademicPrograms.svelte";
import Campus from "@/pages/Campus.svelte";
import AdmissionFrontPage from "@/pages/AdmissionFrontpage.svelte";
import AboutNEU from "@/pages/AboutNEU.svelte";
import Procedure from "@/pages/Procedure.svelte";
import Undergrad from "@/pages/Undergrad.svelte";
import SeniorHigh from "@/pages/SeniorHigh.svelte";
import BasicEducation from "@/pages/BasicEducation.svelte";


import Events from "@/pages/Events.svelte";


export const primaryLinks = [
  { label: 'Home', path: '/', component: Home },
  { label: 'Campus', path: '/campus', component: Campus },
  { label: 'Academics', path: '/academics', component: AcademicPrograms },
  { label: 'Admission', path: '/admission', component: AdmissionFrontPage },
  // { label: 'About NEU', path: '/about', component: AboutNEU }
]

export const secondaryLinks = [
  { label: 'Resources', path: '/resources', component: Home },
  { label: 'Visit', path: '/visit', component: Home },
  { label: 'Events', path: '/events', component: Events },
  // { label: 'Alumnae', path: '/alumnae', component: Home },
]

// export const procedureLinks = [
// ]

export const admissionLinks = [
  { label: 'BasicEducation', path: '/admission/basicEducation', component: BasicEducation },
  { label: 'SeniorHigh', path: '/admission/seniorHigh', component: SeniorHigh },
  { label: 'Undergrad', path: '/admission/undergrad', component: Undergrad },
  { label: 'Procedure', path: '/admission/procedure', component: Procedure },
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
      { label: "university mission", component: AboutNEU, path: "/about" },
      { label: "university vision", component: AboutNEU, path: "/about" },
      { label: "university goals", component: AboutNEU, path: "/about" },
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

];

export const external_links = {
    name: "Other Links",
    sublinks: [
      { label: "School Calendar", path: "https://neu.edu.ph/main/assets/images/posts_images/collegiatecalendar2021.pdf" },
      { label: "Research & Publication", path: "/research" },
      { label: "NEUTECH", path: "/" },
      { label: "MCLE", path: "https://mcle.ph/" },
      { label: "RUSSIAN STUDIES CENTER", path: "http://russianstudies.neu.edu.ph/" },
    ],
  };
