<script>
  import { events } from '@/sample_data/events';
  import Divider from "@/components/Divider.svelte";
  import NewsCard from "@/components/NewsCard.svelte";
  import EventDetailsSidebar from '@/components/EventDetailsSidebar.svelte';
  import {re_param} from '@/utils'
  import { HOST_ROOT } from '@/utils';

  export let params = {};

  let a_local_event = async() => {
    let f = await fetch(re_param('collections/get/News', {
      limit: 5,
      'filter[_id]': params.id
    }))
    let j = await f.json()

    return j.entries[0] || events.entries[0]
  }

$: event_details = events.entries.filter((entry) => params.id === entry._id)[0];

</script>
<!-- <div>{params.id}</div> -->
<div class="container mx-auto p-8">
    <div class="xl:(flex flex-row-reverse items-center space-x-4 w-full)">
        {#await a_local_event()}
          Loading Event Details
        {:then local_event}
          <div class="xl:(px-8 w-2/5)">
            <div class="uppercase text-black font-semibold mb-2">
                <h2 class="text-xl md:text-2xl">
                    <!-- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt reprehenderit quasi quos praesentium illum nihil? -->
                    {local_event.Title}
                </h2>
            </div>
            <div class="mb-4">
                <!-- January 1, 2021 <span>|</span> By: NEU Central Student Council Officer <span>|</span> Myr Jdy C. Mahinay -->
                {local_event.Date}
                {#if local_event.Office}
                    <span>|</span> By: {local_event.Office}
                {/if}
                {#if local_event.Author}
                    <span>|</span> {local_event.Author}
                {/if}
            </div>
          </div>

          <div class="mb-4 xl:(w-3/5)">
              <img src={local_event.Banner.path} alt="event" class="mx-auto object-cover rounded">
          </div>
        {/await}
    </div>
    <div class="xl:(w-full flex space-x-4 h-full mt-8)">
        {#await a_local_event()}
          Loading Event Details
        {:then local_event}
          <div class="xl:(w-2/3)">
            {@html local_event.Content}
            {#if local_event.asset}
                {#each local_event.asset as asset}
                    <div class="my-4">
                        <img src={`${HOST_ROOT}${asset.path}`} alt="alt">
                    </div>
                {/each}
            {/if}
          </div>
        {/await}

        <div class="xl:hidden">
            <Divider/>
        </div>

        <div class="xl:(border-l-5 border-primary-900 rounded w-1/3)">
            <EventDetailsSidebar post_id={params.id}/>

            <!-- <div class="<xl:(bg-primary-900 text-white h-15 text-4xl uppercase flex items-center justify-center) xl:(text-4xl text-primary-900 uppercase)">
                <p>announcement</p>
            </div>
            <div>
                <NewsCard/>
                <NewsCard/>
            </div> -->
        </div>
    </div>



</div>