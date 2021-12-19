<script>
  import { events } from '@/sample_data/events'
  import { re_param } from '@/utils'

  import Divider from '@/components/Divider.svelte'
  import EventCard from '@/components/EventCard.svelte'
  import Loading from '@/components/Loading.svelte'
  import NewsTicker from '@/components/NewsTicker.svelte'
  import Slider from '@/components/Slider.svelte'

  const MAX_SUB_POST = 4

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
