<!-- 
  nicolas TODO
  * add featured embedded videos section from neu youtube page
 -->
<script>
  import {push} from 'svelte-spa-router'
  import { events } from '@/sample_data/events';
  import { re_param } from '@/utils'
  import { branch_data } from '@/store'

  import Banner from "@/components/admission/Banner.svelte";
  import Branch from "@/components/admission/Branch.svelte";
  import Header from "@/components/events/Header.svelte";
  import EventCard from '@/components/events/EventCard.svelte';
  import ArticleCard from '@/components/events/ArticleCard.svelte';

  const branchInfo = {branchName:'General Santos City', imgSource:'./images/NEU_GENSAN.png', id:1};
  const neuMainSrc = './images/neu_mainfront.jpg';

  let currentELimit = 4
  let currentALimit = 4
  let a_event_data = async() => {
    let f = await fetch(re_param('collections/get/News', {
      'filter[Type]': 'Events',
      'limit': currentELimit+1,
    }))
    
    let j = await f.json()
    console.log('event', j)
    return j || events
  }

  let a_announce_data = async() => {
    let f = await fetch(re_param('collections/get/News', {
      'filter[Type]': 'Announcement',
      'limit': currentALimit+1,
    }))

    let j = await f.json()
    console.log('announcement', j)
    return j || events
  }

</script>
<div class="home mb-20">
  <!-- <Banner message={"Events"} srcImage='./images/neu_mainfront.jpg'/> -->

  <!-- four pictures with New Era Main Campus -->
  <div class="container mx-auto px-20 mb-16 mt-16">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 place-content-center">
      <div class="w-full h-full">
        <div class="w-full h-[60vw] max-h-100 bg-red-300 bg-cover bg-center rounded"
             style={`background-image: url(${neuMainSrc})`}>
        </div>
        <div class="mt-5 pr-8 max-w-full">
          <!-- <CardHover/> -->
          <h1 class="pb-5 text-[6vw] sm:text-6xl font-light text-gray-700 font-shelley font-bold font-italic text-center">
            New Era University
          </h1>
          <h2 class="pb-5 text-[6vw] sm:text-2xl font-light text-gray-700 font-italic text-center">
            {$branch_data.name} Campus
          </h2>
          <p class="text-gray-400 text-[3vw] sm:text-base font-nunito">
            {$branch_data.description}
          </p>
        </div>
      </div>
      <div>
        <div class="my-4">
          <Header title={"Featured"} y_pad={false}/>
        </div>
        <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
          {#await a_event_data()}
            loading
          {:then e_data} 
          {#each e_data.entries.slice(0,4) as event }
            <EventCard article={event}/>
          {/each}
          {/await}
        </div>
      </div>

    </div>
  </div>
  <div>
    <Branch branchImage={branchInfo.imgSource} branchName={branchInfo.branchName}></Branch>
  </div>
  <div class="container mx-auto">
    <!-- Events Section -->
    <Header title={"Our Events"}/>
    <div class="my-15 catamaran">
      
        {#await a_event_data()}
          loading
        {:then e_data} 
      <div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {#each e_data.entries.slice(0,currentELimit) as event }
          <EventCard article={event}/>
        {/each}
      </div>
        {#if currentELimit < e_data.entries.length}
          <div class="mt-8 capitalize flex items-center justify-center">
            <button class="border-2 border-primary-800 border-solid text-primary-800 px-4 py-2 inline-block rounded-sm transition transition-colors font-nunito capitalize hover:(text-white border-2 border-solid bg-primary-800)" on:click={() => push('/eventlist/Events')}>
              load more events
            </button>
          </div>
        {/if}
        {/await}
    </div>
    <!-- Announcement Section -->
    <Header title={"Latest Articles"}/>
      {#await a_announce_data()}
        loading
      {:then a_data} 
        <div class="grid md:grid-cols-2 gap-4">
          {#each a_data.entries.slice(0,currentALimit) as a_data}
            <ArticleCard article={a_data}/>
          {/each}
        </div>
        {#if currentALimit < a_data.entries.length}
          <div class="mt-8 capitalize flex items-center justify-center">
            <button class="border-2 border-primary-800 border-solid text-primary-800 px-4 py-2 inline-block rounded-sm transition transition-colors font-nunito capitalize hover:(text-white border-2 border-solid bg-primary-800)" on:click={() => push('/eventlist/all')}>
              load more articles
            </button>
          </div>
        {/if}
      {/await}
  </div>
</div>
<style>

/*
-remove the classes below if you have the 'group-hover'property added in your tailwind config file
-also remove the class from the html template
*/

  .catamaran {
    font-family: 'Catamaran', sans-serif;
        /* color: #791616; */
  }
</style>