<script>
  // @ts-nocheck

  import SampleNav from "@/components/SampleNav.svelte";
  import Router from "svelte-spa-router";
  import { routes } from "@/routes";
  import Footer from "./components/Footer.svelte";
  import GalleryViewer from "./components/GalleryViewer.svelte";

  document.title = `NEU ${import.meta.env.VITE_BRANCH_ID} Branch Homepage`

  // console.log(routes);
</script>

<main class="relative">
  <GalleryViewer />
  <SampleNav />

  <Router {routes} />
  <Footer />
</main>

<style>
</style>
