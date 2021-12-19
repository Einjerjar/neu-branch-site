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

  const MAX_SUB_POST = 4
  
  let a_event_data = async() => {
    let response = await fetch(re_param('collections/get/posts', {
      limit: MAX_SUB_POST,
      'filter[category]': 'event'
    }))

    let data = await response.json()
    return data || events
  }

  let a_announce_data = async() => {
    let response = await fetch(re_param('collections/get/posts', {
      limit: MAX_SUB_POST,
      'filter[category]': 'announcement'
    }))

    let data = await response.json()
    return data || events
  }
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
      {#await a_event_data()}
        <Loading> Loading News </Loading>
      {:then e_data}
        <Slider datas={e_data.entries}/>
      {/await}
    </div>
    <Divider />
    <div class="announcement-section mb-16 px-4">
      <div class="text-primary-900 text-2xl capitalize font-bold mb-4">
        announcements
      </div>
      {#await a_announce_data()}
        <Loading> Loading Announcements </Loading>
      {:then a_data}
        <Slider datas={a_data.entries}/>
      {/await}
    </div>
    <Divider />
    <!-- wrappers-wrapper -->
    <div class="w-full mb-12">
      <!-- iframe-wrapper -->
      <div class="<sm:(relative overflow-hidden w-full pt-[56.25%])">
        <!-- iframe -->
        <iframe src="https://www.youtube.com/embed/-laHrCrn64U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="<sm:(absolute top-0 left-0 bottom-0 right-0 w-full h-full)" width="100%" height="450"></iframe>
      </div>
    </div>
  </div>
</div>