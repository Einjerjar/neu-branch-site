<script>
  import { createEventDispatcher } from 'svelte'
  import { slide } from 'svelte/transition';
  import ItemCard from "./ItemCard.svelte";
  import SlideyButton from './SlideyButton.svelte'

  export let departments = [
    {
      img: './images/acad/A.png',
      text: 'A',
      showMore: true,
      _id: '5e9f9c9c9c9c9c9c9c9c9c9',
    }
  ]

  departments.push({
    img: './images/acad/default_compressed.jpg',
    text: 'Unassigned',
    showMore: true,
    _id: 'UNASSIGNED',
  })

  export let grp = 'undergraduate'

  const dispatch = createEventDispatcher()

  const selectGroup = (grp_name) => {
    dispatch('selectGroup', grp_name)
  }

  const closeGroup = () => {
    // console.log('closeGroup')
    dispatch('closeGroup')
  }
</script>

<div transition:slide class="container mx-auto px-4 py-16 flex flex-col">
  <div class="flex">
    <SlideyButton on:click={() => closeGroup()}/>
  </div>
  <div class="text-6xl md:text-8xl font-gentium text-white text-center mb-8 capitalize">
    {grp}
  </div>
  <div class="text-2xl md:text-4xl font-gentium text-white text-center mb-16">
    Departments
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow">
    {#each departments as dep}
      <ItemCard on:click={() => selectGroup(dep._id)} data={dep}/>
    {/each}
  </div>
</div>