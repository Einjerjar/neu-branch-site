<!-- 
  nicolas TODO
  * add featured embedded videos section from neu youtube page
 -->
<script>
  import {push} from 'svelte-spa-router'
  import { events } from '@/sample_data/events';
  import { re_param } from '@/utils'

  import Banner from "@/components/admission/Banner.svelte";
  import Branch from "@/components/admission/Branch.svelte";
  import Header from "@/components/events/Header.svelte";
  import EventCard from '@/components/events/EventCard.svelte';

  const branchInfo = {branchName:'General Santos City', imgSource:'./images/NEU_GENSAN.png', id:1};
  const neuMainSrc = './images/neu_mainfront.jpg';
  const neuMainSrcContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sequi aspernatur voluptatum dicta, tempore provident et fuga commodi quasi neque, exercitationem a ullam pariatur blanditiis! Velit, modi perspiciatis voluptates delectus nihil aliquid reiciendis blanditiis eius dolorem cupiditate, necessitatibus consequuntur officiis ut iusto maiores aut, quo earum? Veniam enim sint ipsum.'

  let currentBranch = import.meta.env.VITE_BRANCH_ID;

  let currentEItems = 4
  let currentAItems = 5
  let currentALimit = 4
  let a_event_data = async() => {
    let f = await fetch(re_param('collections/get/News', {
      'filter[Type]': 'Events',
      'limit': currentEItems,
    }))
    
    let j = await f.json()
    console.log('event', j)
    return j || events
  }

  let a_announce_data = async() => {
    let f = await fetch(re_param('collections/get/News', {
      'filter[Type]': 'Announcement',
      'limit': currentAItems,
    }))

    let j = await f.json()
    console.log('announcement', j)
    return j || events
  }

</script>
<div class="home mb-20">
  <Banner message={"Events"} srcImage='./images/neu_mainfront.jpg'/>

  <!-- four pictures with New Era Main Campus -->
  <div class="container mx-auto px-20 my-16">
    <Header title={"Featured"}/>
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
            {currentBranch} Campus
          </h2>
          <p class="text-gray-400 text-[3vw] sm:text-base font-nunito">
            {neuMainSrcContent}
          </p>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
          {#await a_event_data()}
            loading
          {:then e_data} 
          {#each e_data.entries.slice(0,4) as event }
            <EventCard {event}/>
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
        {#each e_data.entries.slice(0,currentEItems) as event }
          <EventCard {event}/>
        {/each}
      </div>
        {#if currentEItems < e_data.entries.length}
          <div class="mt-8 capitalize flex items-center justify-center">
            <button class="border-2 border-primary-800 border-solid text-primary-800 px-4 py-2 inline-block rounded-sm transition transition-colors font-nunito capitalize hover:(text-white border-2 border-solid bg-primary-800)" on:click={() => currentEItems += 4}>
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
            <div class="flex w-full space-x-4">
              <div class="w-2/5">
                <a href={'#/events/'+a_data._id}>
                  <img src={a_data.Banner.path} alt="pp" class="w-full h-full max-w-80 max-h-40 object-cover">
                </a>
              </div>
              <div class="w-3/5">
                <h3 class="text-base md:text-lg lg:text-xl font-semibold hover:(underline underline-primary-900)">
                  <a href={'#/events/'+a_data._id}>{a_data.Title}</a>
                </h3>
                <p class="hidden lg:block">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, voluptatum.</p>
              </div>
            </div>
          {/each}
        </div>
        {#if currentALimit < a_data.entries.length}
          <div class="mt-8 capitalize flex items-center justify-center">
            <button class="border-2 border-primary-800 border-solid text-primary-800 px-4 py-2 inline-block rounded-sm transition transition-colors font-nunito capitalize hover:(text-white border-2 border-solid bg-primary-800)" on:click={() => currentAItems += 4}>
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