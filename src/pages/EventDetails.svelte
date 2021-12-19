<script>
  import { slide } from 'svelte/transition'

  import { re_param, HOST_ROOT } from '@/utils'
  import { img_path } from '@/store'
  import { events } from '@/sample_data/events'

  import Divider from '@/components/Divider.svelte'
  import EventDetailsSidebar from '@/components/EventDetailsSidebar.svelte'
  import Loading from '@/components/Loading.svelte'
  import LoadFailed from '@/components/LoadFailed.svelte'

  export let params = {}

  // eslint-disable-next-line no-unused-vars
  const getArticle = async(id, trigger) => {
    let response = await fetch(re_param('collections/get/posts', {
      limit: 5,
      'filter[_id]': id
    }))

    let data = await response.json()
    return data.entries[0] || events.entries[0]
  }

  let articleRetryTrigger = 0

  $: a_current_article = getArticle(params.id, articleRetryTrigger)

</script>

<!-- <div>{params.id}</div> -->
<div transition:slide class="container mx-auto p-8">
    <div class="xl:(flex flex-row-reverse items-center space-x-4 w-full)">
        {#await a_current_article}
          <Loading>
            Loading Event Details
          </Loading>
        {:then other_articles}
          <div class="xl:(px-8 w-2/5)">
            <div class="uppercase text-black font-semibold mb-2">
                <h2 class="text-xl md:text-2xl">
                    {other_articles.title}
                </h2>
            </div>
            <div class="mb-4">
                {other_articles.date_written}
                {#if other_articles.office}
                    <span>|</span> By: {other_articles.office}
                {/if}
                {#if other_articles.author}
                    <span>|</span> {other_articles.author}
                {/if}
            </div>
          </div>

          <div class="mb-4 xl:(w-3/5)">
              <img src='{HOST_ROOT}{other_articles.banner.path}' alt="event" class="mx-auto object-cover rounded cursor-pointer" on:click={() => img_path.set(`${HOST_ROOT}${other_articles.banner.path}`)}>
          </div>
        {/await}
    </div>
    <div class="xl:(w-full flex space-x-4 h-full mt-8)">
        <div class="flex-grow xl:(w-2/3)">
          {#await a_current_article}
            <Loading>Loading Event Details</Loading>
          {:then local_event}
            <div class="text-justify px-4">
              {@html local_event.content}
              {#if local_event.images}
                  {#each local_event.images as img}
                      <div class="my-4">
                          <img class="cursor-pointer rounded" src='{HOST_ROOT}{img.path}' on:click={() => img_path.set(`${HOST_ROOT}${img.path}`)} alt="alt">
                      </div>
                  {/each}
              {/if}
            </div>
          {:catch}
            <LoadFailed on:retry={() => {articleRetryTrigger ++}}/>
          {/await}
        </div>

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