import Home from "@/pages/Home.svelte";
import AcademicPrograms from "@/pages/AcademicPrograms.svelte";
import Campus from "@/pages/Campus.svelte";
import AdmissionFrontPage from "@/pages/AdmissionFrontpage.svelte";
import AboutNEU from "@/pages/AboutNEU.svelte";

export const links = [
  // Navbar links
  {
    name: "Home",
    path: "/",
    component: Home,
    category: "hidden",
  },
  {
    name: "Academics",
    path: "/academics",
    component: AcademicPrograms,
    category: "primary",
  },
  {
    name: "Admission",
    path: "/admission",
    component: AdmissionFrontPage,
    category: "primary",
  },
  {
    name: "Campus",
    path: "/campus",
    component: Campus,
    category: "primary",
  },
  {
    name: "About NEU",
    path: "/about",
    component: AboutNEU,
    category: "primary",
  },
  {
    name: "Resources",
    path: "/resources",
    component: Home,
    category: "secondary",
  },
  {
    name: "Visit",
    path: "/visit",
    component: Home,
    category: "secondary",
  },
  {
    name: "Events",
    path: "/events",
    component: Home,
    category: "secondary",
  },
  {
    name: "Alumnae",
    path: "/alumnae",
    component: Home,
    category: "secondary",
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
