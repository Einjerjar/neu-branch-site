<script>
  export let videoID = ''
  // export let videoTitle = ''
  export let clazz = ''
  export let params = ''

  $: computedParams = (() => {
    const p = new URLSearchParams(params)
    p.append('autoplay', '1')
    return p.toString()
  })()

  let activated = false
  let hovered = false

  function focus(node) {
    node.focus()
  }

  export { clazz as class }
</script>

<svelte:head>
  <link rel="preconnect" href="https://i.ytimg.com" />
  {#if hovered}
    <link rel="preconnect" href="https://www.youtube-nocookie.com" />
    <link rel="preconnect" href="https://www.google.com" />
  {/if}
</svelte:head>

<div class="{clazz} bg-black relative group" on:click={() => activated = true} on:pointerover|once={() => hovered = true}>
  {#key videoID}
    <div class="bg-center bg-no-repeat w-full h-full bg-black" style="background-image: url(https://i.ytimg.com/vi/{videoID}/hqdefault.jpg); background-size: auto 100%" />
    <!-- <img src="https://i.ytimg.com/vi/{videoID}/hqdefault.jpg" class="max-w-full max-h-full h-full" alt={videoTitle}> -->
  {/key}
  <div class="absolute left-0 top-0 w-full h-full flex items-center justify-center cursor-pointer">
    <div class="w-20 h-14 rounded-2xl bg-dark-700 bg-opacity-80 text-white group-hover:bg-opacity-100 group-hover:bg-red-700 flex items-center justify-center">
      <i class="fa fa-play" />
    </div>
  </div>
  {#if activated}
    <iframe src="https://www.youtube-nocookie.com/embed/{encodeURIComponent(videoID)}?{computedParams}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="absolute left-0 top-0 w-full h-full" use:focus />
  {/if}
</div>
