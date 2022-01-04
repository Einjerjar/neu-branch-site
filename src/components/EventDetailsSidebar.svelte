<script>
  import { re_param } from '@/utils'
  import { events } from '@/sample_data/events'

  import LoadFailed from './LoadFailed.svelte'
  import NewsCard from './NewsCard.svelte'

  export let post_id

  const MAX_SUB_POST = 2

  // eslint-disable-next-line no-unused-vars
  const getArticles = async (id, category, trigger) => {
    let response = await fetch(
      re_param('collections/get/posts', {
        limit: MAX_SUB_POST,
        'filter[_id][$ne]': id,
        'filter[category]': category,
      })
    )

    let data = await response.json()
    return data || events
  }

  let eventRetryTrigger = 0
  let announceRetryTrigger = 0

  $: a_events = getArticles(post_id, 'event', eventRetryTrigger)
  $: a_announce = getArticles(post_id, 'announcement', announceRetryTrigger)
</script>

<div class="ml-4">
  <div class="text-2xl text-primary-900 uppercase font-semibold xl:(text-4xl)">
    <p>Events</p>
  </div>
  <div>
    {#await a_events}
      Loding events
    {:then other_events}
      {#each other_events.entries as data}
        <a href="#/events/{data['_id']}">
          <div class="h-50 my-8">
            <NewsCard {data} />
          </div>
        </a>
      {/each}
    {:catch}
      <LoadFailed
        on:retry={() => {
          eventRetryTrigger++
        }} />
    {/await}
  </div>
  <div class="text-2xl text-primary-900 uppercase mt-8 font-semibold xl:(text-4xl)">
    <p>Announcements</p>
  </div>
  <div>
    {#await a_announce}
      Loding events
    {:then announce_data}
      {#each announce_data.entries as data}
        <a href="#/events/{data['_id']}">
          <div class="h-50 my-8">
            <NewsCard {data} />
          </div>
        </a>
      {/each}
    {:catch}
      <LoadFailed
        on:retry={() => {
          announceRetryTrigger++
        }} />
    {/await}
  </div>
</div>
