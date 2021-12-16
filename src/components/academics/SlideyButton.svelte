<script>
  import { slide } from 'svelte/transition'

  let over = false
</script>

<div on:click class="cursor-pointer ml-auto border-1 border-white px-2 py-1 rounded text-white flex items-center h-8 min-w-8 justify-center" on:mouseenter={() => over = true} on:mouseleave={() => over = false}>
  {#if over}
    <div transition:slide class="mr-2">
      Back
    </div>
  {/if}
  <i class="fa fa-close"></i>
</div>