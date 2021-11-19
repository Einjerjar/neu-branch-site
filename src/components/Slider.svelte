<script>
  import NewsCard from './NewsCard.svelte';
  import {events} from '@/sample_data/events'
  export let datas = events.entries

  let current = 0;
  let next = 1;
  let prev = datas.length - 1;

  const prevSlide = () => {
    current > 0 ? handleSlides(current - 1) : handleSlides(datas.length - 1);
  };
  const nextSlide = () => {
    current < datas.length - 1 ? handleSlides(current + 1) : handleSlides(0);
  };

  const handleSlides = (i) => {
    current = i;
    prev = current - 1;
    next = current + 1;

    if (next > datas.length - 1) {
      next = 0;
    }

    if (prev < 0) {
      prev = datas.length - 1;
    }

    // console.log(prev, current, next);
  };

  // play slider every 5 seconds
  let cleanup;
  $: {
    cleanup?.();
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    cleanup = () => clearInterval(interval);
  }
</script>

<div class="cmp-slider group">
  <div class="absolute w-full h-full z-1"></div>
  {#each datas as data, index (data._id)}
    <div
      class="cmp-slider-slide {index === current ? 'active' : ''}{index === prev
        ? 'prev'
        : ''}{index === next ? 'next' : ''}"
    >
      <NewsCard data={data}/>

    </div>
  {/each}

  <div class="bullets-container">
    {#each datas as img, ind (ind)}
      <div class="bullet-item {ind === current ? 'active' : ''}" on:click={() => handleSlides(ind)}></div>
    {/each}
  </div>

  <div class="left-0 slider-btn" on:click={prevSlide} >
    <i class="fas fa-angle-left" />
  </div>
  <div class="right-0 slider-btn" on:click={nextSlide} >
    <i class="fas fa-angle-right" />
  </div>
</div>

<style lang="postcss">
  .slider-btn {
    @apply absolute w-16 transition transition=opacity h-full flex items-center justify-center text-2xl cursor-pointer bg-primary-700 bg-opacity-0 hover:(!bg-opacity-30 text-white) text-primary-900 z-99 group-hover:bg-opacity-10;
  }
  .cmp-slider {
    @apply relative h-100 w-full flex overflow-hidden my-4;
  }
  .cmp-slider-slide {
    @apply h-full w-full absolute top-0 left-0 opacity-0 transition-all duration-300 ease-linear lg:(top-1/2 left-1/2 h-4/5 w-3/5 transform -translate-x-1/2 -translate-y-1/2 -z-2);
  }
  .bullets-container {
    @apply absolute w-full items-center justify-center bottom-0 space-x-3 z-2 py-2 hidden lg:(flex);
  }
  .bullet-item {
    @apply w-3 h-3 rounded-full bg-primary-900 opacity-20 cursor-pointer;
  }
  .active {
    @apply opacity-100 z-2;
  }
  .bullet-item.active {
    @apply rounded-sm transition transition-border-radius transform rotate-45;
  }
  .next {
    @apply transform translate-x-full lg:(top-1/2 right-0 transform -translate-x-20 -translate-y-2/3 scale-75 opacity-80 -z-1);
  }
  .prev {
    @apply transform -translate-x-full lg:(top-1/2 left-0 transform -translate-x-30 -translate-y-2/3 scale-75 opacity-80 -z-1);
  }
</style>
