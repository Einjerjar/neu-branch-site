<script>
  import SkeletonComponent from "./SkeletonComponent.svelte";

  let clazz = ''
  let style = ''

  export let img = '';
  export { clazz as class, style }

  let i_ref
  let img_s = new Image()
  let loaded = false

  img_s.addEventListener('load', () => {
    i_ref.style.backgroundImage = `url(${img_s.src})`
    loaded = true
  })

  img_s.src = img
</script>

<div class='relative overflow-hidden {clazz}' style={style}>
  {#if !loaded}
    <SkeletonComponent />
  {/if}
  <div class="absolute top-0 left-0 bg-cover bg-center w-full h-full" bind:this={i_ref}></div>
</div>