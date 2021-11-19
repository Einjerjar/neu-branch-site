<script>
  import { events } from '@/sample_data/events'
  import { re_param } from "@/utils"
  import NewsCard from "./NewsCard.svelte"
  export let post_id

  const MAX_SUB_POST = 2

  let a_other_events = async () => {
    let f = await fetch(
      re_param("collections/get/News", {
        limit: MAX_SUB_POST,
        "filter[_id][$not]": post_id,
        "filter[Type]": "Events",
      })
    )
    let j = await f.json()

    return j || events
  }

  let a_announce_data = async () => {
    let f = await fetch(
      re_param("collections/get/News", {
        limit: MAX_SUB_POST,
        "filter[_id][$not]": post_id,
        "filter[Type]": "Announcement",
      })
    )
    let j = await f.json()

    return j || events
  }
</script>

<div class="ml-4">
  <div class="text-2xl text-primary-900 uppercase font-semibold xl:(text-4xl)">
    <p>Events</p>
  </div>
  <div>
    {#await a_other_events()}
      Loding events
    {:then other_events}
      {#each other_events.entries as data}
        <a href={`#/events/${data['_id']}`}>
          <div class="h-50 my-8">
            <NewsCard {data} />
          </div>
        </a>
      {/each}
    {/await}
  </div>
  <div
    class="text-2xl text-primary-900 uppercase mt-8 font-semibold xl:(text-4xl)"
  >
    <p>Announcements</p>
  </div>
  <div>
    {#await a_announce_data()}
      Loding events
    {:then announce_data}
      {#each announce_data.entries as data}
        <a href={`#/events/${data['_id']}`}>
          <div class="h-50 my-8">
            <NewsCard {data} />
          </div>
        </a>
      {/each}
    {/await}
  </div>
</div>
