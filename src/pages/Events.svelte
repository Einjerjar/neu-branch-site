<script>
  import { slide } from 'svelte/transition'
  
  import { events } from '@/sample_data/events'
  import { re_param, HOST_ROOT } from '@/utils'
  import { branch_data } from '@/store'

  import ArticleCard from '@/components/events/ArticleCard.svelte'
  import Branch from '@/components/admission/Branch.svelte'
  import Button from '@/components/events/Button.svelte'
  import EventCard from '@/components/events/EventCard.svelte'
  import Header from '@/components/events/Header.svelte'
  import Loading from '@/components/Loading.svelte'
  import LoadFailed from '@/components/LoadFailed.svelte'

  let currentELimit = 4
  let currentALimit = 4

  let eventRetryTrigger = 0
  let announceRetryTrigger = 0

  const getEvents = async (category, branch, limit, trigger) => {
    if (trigger < 0) console.log(trigger)

    const conf = { limit }
    if (category.trim() != '') conf['filter[category]'] = category
    if (branch.trim() != '') conf['filter[branch]'] = branch

    let response = await fetch(re_param('collections/get/posts?sort[_created]=-1', conf))

    let data = await response.json()
    return data || events
  }
  console.log('branch name', $branch_data.name.toLowerCase())
  $: a_event_data = getEvents('event', $branch_data.name.toLowerCase(), currentELimit+1, eventRetryTrigger)
  $: a_announce_data = getEvents('', $branch_data.name.toLowerCase(), currentALimit+1, announceRetryTrigger)

</script>
<div transition:slide class="home mb-20">
  <!-- <Banner message={"Events"} srcImage='./images/neu_mainfront.jpg'/> -->

  <!-- four pictures with New Era Main Campus -->
  <div class="container mx-auto px-4 mb-16 mt-16">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 place-content-center">
      <div class="w-full h-full">
        <div class="w-full h-[60vw] max-h-100 bg-red-300 bg-cover bg-center rounded" style='background-image: url({`${HOST_ROOT}/${$branch_data.cover_image.path}`}) '>
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
          <Header title={'Featured'} y_pad={false}/>
        </div>
        <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
          {#await a_event_data}
            <div class="w-full col-span-2">
              <Loading />
            </div>
          {:then e_data} 
            {#each e_data.entries.slice(0,4) as event }
              {#if event.published}
                <EventCard article={event}/>
              {/if}
            {/each}
            {#if currentELimit < e_data.entries.length}
              <a href='#/eventlist/event' class="col-span-2">
                <Button>
                  load more events
                </Button>
              </a>
            {/if}
          {:catch}
            <LoadFailed on:retry={() => eventRetryTrigger ++} />
          {/await}
        </div>
      </div>

    </div>
  </div>
  <div>
    <Branch branchImage={`${HOST_ROOT}/${$branch_data.cover_image.path}`} branchName={$branch_data.name}></Branch>
  </div>
  <div class="container mx-auto">
    <!-- Announcement Section -->
    <Header title={'Latest Articles'}/>
      {#await a_announce_data}
        <Loading />
      {:then a_data} 
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 px-2">
          {#each a_data.entries.slice(0,currentALimit) as a_data}
            {#if a_data.published}
              <ArticleCard article={a_data}/>
            {/if}
          {/each}
        </div>
        {#if currentALimit < a_data.entries.length}
          <a href='#/eventlist/all'>
            <Button>
              load more articles
            </Button>
          </a>
        {/if}
      {:catch}
        <LoadFailed on:retry={() => announceRetryTrigger ++} />
      {/await}
  </div>
</div>
<style>
</style>