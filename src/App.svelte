<script>
  import { routes } from '@/routes'

  import Footer from './components/Footer.svelte'
  import GalleryViewer from './components/GalleryViewer.svelte'
  import Router from 'svelte-spa-router'
  import SampleNav from '@/components/SampleNav.svelte'

  document.title = `NEU ${import.meta.env.VITE_BRANCH_ID} Branch Homepage`

  // scroll to top on path changed
  const onRouteLoaded = () => {
    const a = () => window.scrollTo(0, 0)
    setTimeout(a, 100)
  }
</script>

<main class="relative">
  <GalleryViewer />
  <SampleNav />

  <Router {routes} on:routeLoaded={onRouteLoaded} />
  <Footer />
</main>

<style>
</style>
