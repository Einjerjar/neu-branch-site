<script>
  import '@/styles/admissionProc.css'

  import { pop } from 'svelte-spa-router'
  import { branch_data } from '@/store'
  import { clean_item } from '@/utils'

  import SlideyButton from '@/components/academics/SlideyButton.svelte'

  export let params = {
    id: 'basic',
  }

  $: procedure = clean_item($branch_data.admission_procs.filter((v) => v.value.id == params.id)[0].value)
</script>

<div class="min-h-screen bg-primary-900 w-full fixed top-0 left-0 -z-1" />
<div class="min-h-screen bg-dark-900 w-full fixed top-0 left-0 -z-1 bg-opacity-75" />

<div class="container mx-auto p-4">
  <div class="p-4 rounded overflow-hidden bg-white">
    <div class="flex">
      <SlideyButton class="text-gray-800 border-gray-800" on:click={() => pop()} />
    </div>
    <div class="text-center text-6xl font-gentium text-primary-700 mt-8">Admission Procedures</div>
    <div class="text-center text-4xl font-gentium text-primary-700 mt-4 mb-8">
      {procedure.name}
    </div>
    <div class="admission-special px-8">
      {@html procedure.content}
    </div>
  </div>
</div>

<style lang="postcss">
</style>
