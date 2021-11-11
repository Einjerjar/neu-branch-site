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
</script>

<div class="page-home">
  <NewsTicker/>
  <VideoHeader />
  <div class="container mx-auto">
    <div
      class="iconcard-section <md:(max-w-4/5 mx-auto grid grid-cols-2 mt-4) md:(max-w-screen-lg -mt-10 flex justify-between mx-auto)"
    >
      {#each arr as nico}
        <IconCard />
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
