<script>
  import {onMount, onDestroy} from 'svelte'
  import ActualNav from '@/components/ActualNav.svelte'

  let navShowing = false
  let scrollTimer = null
  let lastScroll = 0

  const scrollEnd = () => {
    let scroll = window.scrollY

    if (lastScroll >= scroll) {
      navShowing = true
    } else {
      navShowing = false
    }

    lastScroll = scroll
  }

  const onScroll = e => {
    // console.log(e)

    if (scrollTimer) {
      scrollTimer = clearTimeout(scrollTimer)
    }

    scrollTimer = setTimeout(scrollEnd, 1)
  }

  onMount(() => {
    window.addEventListener('scroll', onScroll)
  })
  onDestroy(() => {
    window.removeEventListener('scroll', onScroll)
  })
</script>

<div class="w-full relative">
  <!-- dirty hack, but eh, looks good, lol -->
  <ActualNav/>
  {#if navShowing}
    <ActualNav isSticky={true}/>
  {/if}
</div>