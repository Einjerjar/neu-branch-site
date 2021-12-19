<script>
  import { slide } from 'svelte/transition'
  import { createEventDispatcher } from 'svelte'
  
  export let groups = [
    {
      img: './images/acad/A.png',
      text: 'A',
      showMore: true,
      _id: '5e9f9c9c9c9c9c9c9c9c9c9',
    }
  ]

  const dispatch = createEventDispatcher()

  const selectGroup = (grp_name) => {
    dispatch('selectGroup', grp_name)
  }

  import ItemCard from './ItemCard.svelte'
</script>

<div transition:slide class="container mx-auto px-4 py-16 flex flex-col">
  <div class="text-6xl md:text-8xl font-gentium text-white text-center mb-16">
    Academic Groups
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow">
    {#each groups as grp}
      <ItemCard on:click={() => selectGroup(grp._id)} data={grp}/>
    {/each}
  </div>
</div>