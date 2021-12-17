<script>
  import SkeletonComponent from "./SkeletonComponent.svelte";
  import {img_path} from '@/store'

  let clazz = ''
  let style = ''

  export let img = ''
  export let viewable = true
  export { clazz as class, style }

  let i_ref
  let loaded = false

  const handleImgChange = (i) => {
    let im = new Image()
    loaded = false
    im.addEventListener('load', () => {
      i_ref.style.backgroundImage = `url(${im.src})`
      loaded = true
    })
    im.src = i
  }

  $: img_change = handleImgChange(img)

</script>

<div on:click on:click={() => viewable ? img_path.set(img) : ''} class='relative overflow-hidden {viewable ? 'cursor-pointer' : ''} {clazz}' style={style}>
  {#if !loaded}
    <SkeletonComponent />
  {/if}
  <div class="absolute top-0 left-0 bg-cover bg-center w-full h-full" bind:this={i_ref}></div>
</div>