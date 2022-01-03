<script>
  import { slide } from 'svelte/transition'

  import { re_param } from '@/utils'
  import { events } from '@/sample_data/events'

  import Divider from '@/components/Divider.svelte'
  import IconCards from '@/components/home/IconCards.svelte'
  import Loading from '@/components/Loading.svelte'
  import NewsTicker from '@/components/NewsTicker.svelte'
  import Slider from '@/components/Slider.svelte'
  import VideoHeader from '@/components/home/VideoHeader.svelte'
  import LoadFailed from '@/components/LoadFailed.svelte'
  import { branch_data } from '@/store'
  import LiteYT from '@/components/LiteYT.svelte'

  let currentELimit = 4
  let currentALimit = 4

  let eventRetryTrigger = 0
  let announceRetryTrigger = 0

  const getEvents = async (category, branch, limit, trigger) => {
    if (trigger < 0) console.log(trigger)

    const conf = { limit }
    if (category.trim() != '') conf['filter[category]'] = category
    if (branch.trim() != '') conf['filter[branch]'] = branch

    let response = await fetch(re_param('collections/get/posts', conf))

    let data = await response.json()
    // console.log(data.length)
    return data || events
  }

  $: a_event_data = getEvents('event', $branch_data.name.toLowerCase(), currentELimit, eventRetryTrigger)
  $: a_announce_data = getEvents('announcement', $branch_data.name.toLowerCase(), currentALimit, announceRetryTrigger)


</script>

<div transition:slide class="page-home">
  <div class="hidden md:block">
    <NewsTicker/>
  </div>
  <VideoHeader />
  <div class="container mx-auto px-4">
    <div class="iconcard-section flex flex-wrap justify-center children:mx-4 -mt-8 <md:(max-w-4/5 mx-auto) md:(max-w-screen-lg -mt-10 mx-auto)" >
      <IconCards />
    </div>
    <Divider />
    <div class="news-section px-4">
      <div class="text-primary-900 text-2xl capitalize font-bold mb-4">
        latest news
      </div>
      {#await a_event_data}
        <Loading> Loading News </Loading>
      {:then e_data}
        <Slider datas={e_data.entries}/>
      {:catch}
        <LoadFailed on:retry={() => eventRetryTrigger ++} />
      {/await}
    </div>
    <Divider />
    <div class="announcement-section mb-16 px-4">
      <div class="text-primary-900 text-2xl capitalize font-bold mb-4">
        announcements
      </div>
      {#await a_announce_data}
        <Loading> Loading Announcements </Loading>
      {:then a_data}
        <Slider datas={a_data.entries}/>
      {:catch}
        <LoadFailed on:retry={() => announceRetryTrigger ++} />
      {/await}
    </div>
    
    {#if $branch_data.homepage_embed}
      <Divider />
      <!-- wrappers-wrapper -->
      <div class="w-full mb-12">
        <!-- iframe-wrapper -->
        <div class="<sm:(relative overflow-hidden w-full pt-[56.25%])">
          <!-- iframe -->
          
          <!-- <iframe src={$branch_data.homepage_embed} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="<sm:(absolute top-0 left-0 bottom-0 right-0 w-full h-full)" width="100%" height="450"></iframe> -->
          <LiteYT
            videoID={$branch_data.homepage_embed.split('/')[4]}
            class="<sm:(absolute top-0 left-0 bottom-0 right-0 w-full h-full) w-full h-450px"
          />
        </div>
      </div>
    {/if}
  </div>
</div>