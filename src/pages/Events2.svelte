<script>
  import Divider from "@/components/Divider.svelte";
  import NewsTicker from "@/components/NewsTicker.svelte";
  import Slider from "@/components/Slider.svelte";
  import Cards from "@/components/admission/Cards.svelte";
  import { events } from '@/sample_data/events';
  import {re_param} from '@/utils'
  import EventCard from "@/components/EventCard.svelte";
import Loading from "@/components/Loading.svelte";

    const event_data = events.entries.filter((event) => event.Type[0] == 'Events');
    const announcement_data = events.entries.filter((event) => event.Type[0] == 'Announcement');

    //images for announcement
    let imgSrc= [
      "https://neu.edu.ph/main/assets/images/posts_images/AntiBullying19.jpg",
      "https://www.neu.edu.ph/main/assets/images/posts_images/44thArenaHS9.jpg",
      "https://www.eaglenews.ph/wp-content/uploads/2017/04/NEU-graduates-480x320.jpg"
    ];

    let information = [
      "This information is about the Basic Education Announcements",
      "This information is about the SHS Announcements",
      "This information is about the Undergraduate Announcements",
    ];

    let announcementType = [
      {type: "Basic Education Announcement", id: 0},
      {type: "Senior High School Announcement", id: 1},
      {type: "Undergraduate Announcement", id: 2}
    ];

    const MAX_SUB_POST = 4;

    let a_event_data = async() => {
      let response = await fetch(re_param('collections/get/News', {
        limit: MAX_SUB_POST,
        'filter[Type]': 'Events'
      }))

      let data = await response.json()
      return data || events
    }

    let a_announce_data = async() => {
      let response = await fetch(re_param('collections/get/News', {
        limit: MAX_SUB_POST,
        'filter[Type]': 'Announcement'
      }))

      let data = await response.json()
      return data || events
    }
  </script>
  <div>
      <NewsTicker/>

      <!-- News? is this even necessary? -->
      <div class="container mx-auto">
        {#await a_event_data()}
          <Loading>Loading News</Loading>
        {:then e_data}
          <Slider datas={e_data.entries}/>
        {/await}
      </div>

      <Divider/>
      <div class="bg-primary-900 text-white h-20 text-4xl uppercase flex items-center justify-center">
        <p>announcement</p>
      </div>

      <!-- Announcement -->
      <div class="container mx-auto">
        {#await a_announce_data()}
          <Loading>Loading Announcements</Loading>
        {:then a_data}
          <Slider datas={a_data.entries}/>
        {/await}
      </div>

      <Divider/>

      <div class="bg-primary-900 text-white h-20 text-4xl uppercase flex items-center justify-center">
        <p>events</p>
      </div>
      <div class="container mx-auto">

        <!--Event Section Start-->
        <div class="container cursor-pointer event items-center flex flex-wrap justify-center mb-12 px-4">
          {#await a_event_data()}
            <Loading>Loading Events</Loading>
          {:then e_data}
            {#each e_data.entries as event}
              <EventCard {event}/>
            {/each}
          {/await}
        </div>
      </div>

  </div>


  <!--EVENT SECTION START-->
  <style>
  </style>
