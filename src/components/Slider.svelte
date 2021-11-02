<script>
  const images = [
    {
      id: "image1",
      src: "https://neu.edu.ph/main/assets/images/posts_images/CCEL2021ccs2.jpg",
      title: "Event Title One",
    },
    {
      id: "image2",
      src: "https://neu.edu.ph/main/assets/images/posts_images/ay20-21.jpg",
      title: "Event Title Two",
    },
    {
      id: "image3",
      src: "https://neu.edu.ph/main/assets/images/posts_images/applied_statistics_poster.jpg",
      title: "Event Title Three",
    },
    {
      id: "image4",
      src: "https://neu.edu.ph/main/assets/images/posts_images/Batch2020.jpg",
      title: "Event Title Four",
    },
    {
      id: "image5",
      src: "https://neu.edu.ph/main/assets/images/posts_images/ABOUTPAYMENT20.jpg",
      title: "Event Title Five",
    },
    {
      id: "image6",
      src: "http://via.placeholder.com/500x500",
      title: "Event Title Six",
    },
  ];

  let current = 0;
  let next = 1;
  let prev = images.length - 1;

  const prevSlide = () => {
    current > 0 ? handleSlides(current - 1) : handleSlides(images.length - 1);
  };
  const nextSlide = () => {
    current < images.length - 1 ? handleSlides(current + 1) : handleSlides(0);
  };

  const handleSlides = (i) => {
    current = i;
    prev = current - 1;
    next = current + 1;

    if (next > images.length - 1) {
      next = 0;
    }

    if (prev < 0) {
      prev = images.length - 1;
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

<div class="cmp-slider">
  {#each images as image, index (image.id)}
    <div
      class="cmp-slider-slide {index === current ? 'active' : ''}{index === prev
        ? 'prev'
        : ''}{index === next ? 'next' : ''}"
    >
      <img src={image.src} alt={image.id} class="h-4/5 w-full object-cover" />
      <div
        class="bg-primary-900 text-white text-2xl text-semibold h-1/5 flex items-center px-12"
      >
        {image.title}
      </div>
    </div>
  {/each}

  <div
    class="absolute left-0 w-8 h-full flex items-center justify-center text-2xl cursor-pointer hover:(bg-primary-700 bg-opacity-30 text-white) text-primary-900 z-99"
    on:click={prevSlide}
  >
    <i class="fas fa-angle-left" />
  </div>
  <div
    class="absolute right-0 w-8 h-full flex items-center justify-center text-2xl cursor-pointer hover:(bg-primary-700 bg-opacity-30 text-white) text-primary-900 z-99"
    on:click={nextSlide}
  >
    <i class="fas fa-angle-right" />
  </div>
</div>

<style lang="postcss">
  .cmp-slider {
    @apply relative h-100 w-full flex overflow-hidden;
  }
  .cmp-slider-slide {
    @apply h-full w-full absolute top-0 left-0 opacity-0 transition-all duration-300 ease-linear lg:(top-1/2 left-1/2 h-4/5 w-3/5 transform -translate-x-1/2 -translate-y-1/2 z-2);
  }
  .active {
    @apply opacity-100;
  }
  .next {
    @apply transform translate-x-full lg:(top-1/2 left-1/2 transform translate-x-1/3 -translate-y-2/3 scale-75 opacity-80 z-1);
  }
  .prev {
    @apply transform -translate-x-full lg:(top-1/2 left-1/2 transform translate-x-[-133.33%] -translate-y-2/3 scale-75 opacity-80 z-1);
  }
</style>
