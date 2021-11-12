<script>
  import { events } from '@/sample_data/events';
  import Divider from "@/components/Divider.svelte";
  import IconCard from "@/components/home/IconCard.svelte";
  import VideoHeader from "@/components/home/VideoHeader.svelte";
  import NewsTicker from "@/components/NewsTicker.svelte";
  import Slider from "@/components/Slider.svelte";

  console.log(events.entries);
  const event_data = events.entries.filter((event) => event.Type[0] == 'Events');
  const announcement_data = events.entries.filter((event) => event.Type[0] == 'Announcement');

  const arr = [0, 0, 0, 0];
  const icon_links = [
    {name: 'NEUVLE', icon: 'fa-book', path: '#/'},
    {name: 'Automate', icon: 'fa-robot', path: '#/'},
    {name: 'Main Website', icon: 'fa-globe', path: '#/'},
    {name: 'Locations', icon: 'fa-map-marker-alt', path: '#/'},
  ]
</script>

<div class="page-home">
  <NewsTicker/>
  <VideoHeader />
  <div class="container mx-auto">
    <div class="iconcard-section flex flex-wrap justify-center children:mx-4 -mt-8 <md:(max-w-4/5 mx-auto) md:(max-w-screen-lg -mt-10 mx-auto)" >
      {#each icon_links as link}
        <IconCard data={link} />
      {/each}
    </div>
    <Divider />
    <div class="news-section">
      <div class="text-primary-900 text-2xl capitalize font-bold mb-4">
        latest news
      </div>
      <Slider datas={event_data}/>
    </div>
    <Divider />
    <div class="announcement-section">
      <div class="text-primary-900 text-2xl capitalize font-bold mb-4">
        announcement
      </div>
      <Slider datas={announcement_data}/>
    </div>
  </div>
</div>
