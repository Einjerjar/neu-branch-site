<script>
  import { img_path } from '@/store'
  import { fade, slide } from 'svelte/transition';

  $: show = $img_path !== ''
  const handleEscape = e => {
    if (!show) return
    if (e.keyCode === 27) {
      img_path.set('')
    }
  }
</script>

<svelte:window on:keydown={handleEscape} />

{#if show}
<div transition:fade class="fixed w-screen h-screen bg-black bg-opacity-75 z-9998"  on:click={() => {img_path.set('')}}></div>  
<div transition:slide class="grid fixed w-screen h-screen justify-center items-center pointer-events-none z-9998 p-4">
  <div class="max-h-full bg-white rounded overflow-hidden pointer-events-auto">
    <div class="w-full h-50px flex bg-gray-300 px-4 py-2 items-center">
      <div class="mr-2">
        {$img_path}
      </div>
      <div class="ml-auto">
        <div class="w-32px h-32px flex items-center justify-center group" on:click={() => {img_path.set('')}}>
          <i class="fa fa-close text-gray-500 group-hover:text-gray-800"></i>
        </div>
      </div>
    </div>
    <img src={$img_path} alt="" class="max-w-full max-h-full">
  </div>
</div>
{/if}