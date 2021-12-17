<script>
  export let branchImage = 'main';
  export let branchName = 'main';
</script>

<div class="rounded-md overflow-hidden shadow group">
  <div class="relative overflow-hidden cursor-default w-full">
    <div class="w-full absolute -top-10 left-0 h-10 bg-red-900 shadow-2xl"></div>
    <div class="h-[60vw] max-h-150 bg-primary-200 bg-cover bg-center bg-no-repeat" style='background-image: url({branchImage});'></div>
    <div class="absolute top-0 w-full h-full flex-col flex items-center justify-center bg-gradient-to-t from-primary-900 to-transparent transform scale-y-0 group-hover:scale-y-100 transition transition-color-transform origin-bottom group-hover:opacity-60 duration-200 opacity-0"></div>
    <div class="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-end text-white transition transition-opacity opacity-0 group-hover:opacity-100 text-shadow-md pb-8 duration-400">
      <div class="desc text-5xl sm:text-6xl md:text-7xl text-center font-shelley">
        New Era University
      </div>
      <div class="text-2xl sm:text-3xl md:text-4xl font-nunito">
          {branchName}
      </div>
    </div>
  </div>
</div>

<style>
  .overlay {
    top: 0;
    left: 0;
    /* background: rgba(0, 0, 0, 0.6); */
    color: #ffffff;
    font-family: 'Quicksand', sans-serif;
    /* opacity: 0; */
    transition: opacity 0.25s;
  }

    .overlay > * {
        transform: translateY(20px);
        transition: transform 0.25s;
    }

    .overlay:hover {
        cursor: pointer;
        /* opacity: 1; */
    }

    .overlay:hover > * {
        transform: translateY(0);
    }
</style>