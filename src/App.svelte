<script>
// @ts-nocheck

  import SampleNav from '@/components/SampleNav.svelte'
  import Router from 'svelte-spa-router'
  import {routes} from '@/routes'

  console.log(routes)
</script>

<main>
  <SampleNav/>

  <Router {routes}/>
</main>

<style>
</style>
