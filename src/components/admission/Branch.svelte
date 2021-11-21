<script>
  export let branchImage = 'main';
  export let branchName = 'main';
</script>

<div class="relative mb-1 ">
  <img src = {branchImage} alt=main>
  <div class="overlay absolute w-full h-full flex-col flex items-center justify-center">
      <div class="desc text-4xl text-center">
          New Era University
          <p class="text-2xl">
              {branchName}
          </p>
      </div>
  </div>
</div>


<style>
  .overlay {
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    color: #ffffff;
    font-family: 'Quicksand', sans-serif;
    opacity: 0;
    transition: opacity 0.25s;
  }

    .overlay > * {
        transform: translateY(20px);
        transition: transform 0.25s;
    }

    .overlay:hover {
        cursor: pointer;
        opacity: 1;
    }

    .overlay:hover > * {
        transform: translateY(0);
    }
</style>