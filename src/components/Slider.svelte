<script>
  import { events } from '@/sample_data/events'

  import NewsCard from './NewsCard.svelte'

  // Props
  export let datas = events.entries
  export let scrollBy = 1

  // console.log(datas)

  let slides = []
  let rootWidth = 0

  $: slides_ = slides.length > 0 ? slides[0] : null
  $: paginationFactor = slides_ ? slides_ : 100
  $: totalPaginationPixels = scrollBy * paginationFactor

  $: perPage = Math.round(rootWidth ? rootWidth / paginationFactor : 0)

  $: offset = 0
  $: maxOffset = Math.max(datas.length - perPage, 0) * paginationFactor * -1
  $: atStart = offset >= 0
  $: atEnd = offset <= maxOffset

  const onResize = () => {
    setTimeout(() => {
      offset = Math.round(offset / paginationFactor) * paginationFactor
      if (offset > 0) offset = 0
      if (offset < maxOffset) offset = maxOffset
      // console.log('Width', rootWidth, offset)
    }, 100)
  }

  const move = (direction) => {
    if (direction > 0 && !atEnd) {
      offset -= totalPaginationPixels
    } else if (direction < 0 && !atStart) {
      offset += totalPaginationPixels
    }
    if (offset > 0) offset = 0
    if (offset < maxOffset) offset = maxOffset
  }
</script>

<!-- {JSON.stringify([ offset, maxOffset, atStart, atEnd, Math.max(datas.length - perPage, 0), paginationFactor ])} -->

<svelte:window on:resize={onResize} />

{#if datas.length > 0}
  <div class="overflow-hidden relative group px-10" bind:offsetWidth={rootWidth}>
    <div class="flex w-full h-70 transform transition transition-transform" style="transform: translateX({offset}px);">
      {#each datas as item, i}
        <div class="h-full min-w-full md:min-w-1/2 lg:min-w-1/3" on:click={() => console.log(slides[0])} bind:offsetWidth={slides[i]}>
          <div class="p-2 w-full h-full">
            <NewsCard data={item} />
          </div>
        </div>
      {/each}
    </div>
    <div class="absolute w-full h-full pointer-events-none left-0 top-0">
      <div class="relative w-full h-full">
        {#if !atStart}
          <div on:click={() => move(-1)} class="absolute w-10 h-full left-0 top-0 flex items-center justify-center bg-primary-800 bg-opacity-25 hover:bg-opacity-50 text-white opacity-50 group-hover:opacity-100 pointer-events-auto">
            <i class="fa fa-chevron-left" />
          </div>
        {/if}
        {#if !atEnd}
          <div on:click={() => move(1)} class="absolute w-10 h-full right-0 top-0 flex items-center justify-center bg-primary-800 bg-opacity-25 hover:bg-opacity-50 text-white opacity-50 group-hover:opacity-100 pointer-events-auto">
            <i class="fa fa-chevron-right" />
          </div>
        {/if}
      </div>
    </div>
  </div>
{:else}
  <div class="text-center text-2xl font-light text-primary-800">No posts found, please check back later.</div>
{/if}

<!-- <div class="details">
  totalPaginationPixels: {totalPaginationPixels}px<br>
  paginationFactor: {paginationFactor}px<br>
  maxOffset: {maxOffset}px<br>
  offset: {offset}px<br>
  atStart: {atStart}<br>
  atEnd: {atEnd}
</div> -->
<style>
</style>
