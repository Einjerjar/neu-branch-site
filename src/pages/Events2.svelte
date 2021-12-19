<script>
  import { events } from '@/sample_data/events'
  import { re_param } from '@/utils'

  import Divider from '@/components/Divider.svelte'
  import EventCard from '@/components/EventCard.svelte'
  import Loading from '@/components/Loading.svelte'
  import LoadFailed from '@/components/LoadFailed.svelte'
  import NewsTicker from '@/components/NewsTicker.svelte'
  import Slider from '@/components/Slider.svelte'

  const MAX_SUB_POST = 4

  let eventRetryTrigger = 0
  let announceRetryTrigger = 0

  const getEvents = async (category, limit, trigger) => {
    if (trigger < 0) console.log(trigger)

    const conf = { limit }
    if (category.trim() != '') conf['filter[category]'] = category

    let response = await fetch(re_param('collections/get/posts', conf))

    let data = await response.json()
    return data || events
  }

  $: a_event_data = getEvents('event', MAX_SUB_POST, eventRetryTrigger)
  $: a_announce_data = getEvents('', MAX_SUB_POST, announceRetryTrigger)
  </script>
  <div>
      <NewsTicker/>

      <!-- News? is this even necessary? -->
      <div class="container mx-auto">
        {#await a_event_data}
          <Loading>Loading News</Loading>
        {:then e_data}
          <Slider datas={e_data.entries}/>
        {:catch}
          <LoadFailed on:retry={() => eventRetryTrigger ++} />
        {/await}
      </div>

      <Divider/>
      <div class="bg-primary-900 text-white h-20 text-4xl uppercase flex items-center justify-center">
        <p>announcement</p>
      </div>

      <!-- Announcement -->
      <div class="container mx-auto">
        {#await a_announce_data}
          <Loading>Loading Announcements</Loading>
        {:then a_data}
          <Slider datas={a_data.entries}/>
        {:catch}
          <LoadFailed on:retry={() => announceRetryTrigger ++} />
        {/await}
      </div>

      <Divider/>

      <div class="bg-primary-900 text-white h-20 text-4xl uppercase flex items-center justify-center">
        <p>events</p>
      </div>
      <div class="container mx-auto">

        <!--Event Section Start-->
        <div class="container cursor-pointer event items-center flex flex-wrap justify-center mb-12 px-4">
          {#await a_event_data}
            <Loading>Loading Events</Loading>
          {:then e_data}
            {#each e_data.entries as event}
              <EventCard {event}/>
            {/each}
          {:catch}
            <LoadFailed on:retry={() => eventRetryTrigger ++} />
          {/await}
        </div>
      </div>

  </div>


  <!--EVENT SECTION START-->
  <style>
  </style>
