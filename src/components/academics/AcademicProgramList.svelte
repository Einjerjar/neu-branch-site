<script>
  import { createEventDispatcher } from 'svelte'
  import { slide } from 'svelte/transition';

  const dispatch = createEventDispatcher()

  const selectGroup = (prg) => {
    dispatch('selectGroup', prg)
  }

  const closeDep = () => {
    console.log('closeDep')
    dispatch('closeDep')
  }

  export let programs = []
  export let departments = []
  export let department = ''

  let program = ''

  $: currentDep_a = departments.filter(d => d._id === department)
  $: currentDep = currentDep_a.length > 0 ? currentDep_a[0].name : department

  $: currentProgs = department != 'UNASSIGNED' ? programs.filter(p => p.department && p.department[0]._id === department) : programs.filter(p => !p.department)

  import ItemCard from "./ItemCard.svelte";
  import ListItemCard from './ListItemCard.svelte';
  import SlideyButton from './SlideyButton.svelte';
</script>

<div transition:slide class="container mx-auto px-4 py-16 flex flex-col">
  <div class="flex">
    <SlideyButton on:click={() => closeDep()}/>
  </div>
  <div class="text-6xl md:text-8xl font-gentium text-white text-center mb-8 capitalize">
    {currentDep}
  </div>
  <div class="text-2xl md:text-4xl font-gentium text-white text-center mb-16">
    Undegraduate
  </div>
  <div class="grid grid-cols-1 gap-4 flex-grow">
    {#each currentProgs as prg}
      <ListItemCard on:click={() => selectGroup(prg)} prg={prg}/>
    {/each}
  </div>
</div>