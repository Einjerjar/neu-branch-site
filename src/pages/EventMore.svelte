<script>
  import { push } from 'svelte-spa-router'
  import { re_param } from "@/utils";
  import { events } from '@/sample_data/events';
  import ArticleCard from "@/components/events/ArticleCard.svelte";
  import Header from "@/components/events/Header.svelte";
  import Divider from "@/components/Divider.svelte";
  import Button from '@/components/events/Button.svelte';
import { slide } from 'svelte/transition';

  export let params = {}
  if (params.filter == null || params.filter.trim() == '') {
    push('/eventlist/all')
  }

  $:filter = (params.filter ??= 'all').trim()
  $:page = Math.max(0, parseInt(params.page ??= '1') - 1)
  
  const PAGE_LIMIT = 4

  const a_event_data = async(_page) => {
    const cfg = {
      'limit': PAGE_LIMIT+1,
      'skip': _page * (PAGE_LIMIT),
    }
    if (filter.length != 0 && filter != 'all') {
      cfg['filter[category]'] = filter
    }

    let f = await fetch(re_param('collections/get/posts', cfg))
    
    let j = await f.json()
    // console.log('event', j)
    return j || events
  }

  $:articles = a_event_data(page)
</script>

<div transition:slide class="container mx-auto my-16">
  {#await articles}
    Loading
  {:then a_data} 
    <div class="mt-8 mb-4">
      <Header title={filter.length > 0 && filter != 'all' ? filter : 'Latest Articles'} y_pad={false}/>
    </div>
    <Divider y_pad={false}/>
    <div class="px-4 py-2 my-4 grid grid-cols-1 gap-4">
      {#each a_data.entries.slice(0, PAGE_LIMIT) as article}
        <ArticleCard {article} />
      {/each}
      <div class="flex children:mx-2 justify-center">
        {#if page > 0}
          <a href={`#/eventlist/${filter}/${page}`}>
            <Button>
              Prev
            </Button>
          </a>
        {/if}
        {#if PAGE_LIMIT < a_data.entries.length}
          <a href={`#/eventlist/${filter}/${page+2}`}>
            <Button>
              Next
            </Button>
          </a>
        {/if}
      </div>
    </div>
  {/await}
</div>