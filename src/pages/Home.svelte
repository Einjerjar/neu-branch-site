<script>
  import { re_param } from '@/utils';
  import { events } from '@/sample_data/events';
  import Divider from "@/components/Divider.svelte";
  import VideoHeader from "@/components/home/VideoHeader.svelte";
  import NewsTicker from "@/components/NewsTicker.svelte";
  import Slider from "@/components/Slider.svelte";
  import IconCards from '@/components/home/IconCards.svelte';

  const MAX_SUB_POST = 4;

  let a_event_data = async() => {
    let f = await fetch(re_param('collections/get/News', {
      limit: MAX_SUB_POST,
      'filter[Type]': 'Events'
    }))
    let j = await f.json()

    return j || events
  }

  let a_announce_data = async() => {
    let f = await fetch(re_param('collections/get/News', {
      limit: MAX_SUB_POST,
      'filter[Type]': 'Announcement'
    }))
    let j = await f.json()

    return j || events
  }

  const icon_links = [
    {name: 'NEUVLE', icon: 'fa-book', path: '#/'},
    {name: 'Automate', icon: 'fa-robot', path: '#/'},
    {name: 'Main Website', icon: 'fa-globe', path: '#/'},
    {name: 'Locations', icon: 'fa-map-marker-alt', path: '#/'},
  ]
</script>

<div class="page-home">
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
        Loading News
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
        Loading News
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