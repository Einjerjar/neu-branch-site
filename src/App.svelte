<script>
  // @ts-nocheck

  import SampleNav from "@/components/SampleNav.svelte";
  import Router from "svelte-spa-router";
  import { routes } from "@/routes";
  import Footer from "./components/Footer.svelte";

  console.log(routes);
</script>

<main>
  <SampleNav />

  <Router {routes} />
  <Footer />
</main>

<style>
</style>
