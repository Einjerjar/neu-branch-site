<script>
  import { slide } from 'svelte/transition'
  import { branch_data } from '@/store'
  import { clean_item, HOST_ROOT } from '@/utils'

  import Cards from '@/components/admission/Cards.svelte'

  $: branch_procs = $branch_data.admission_procs?.map((v) => clean_item(v.value)) || []
</script>

<div class="absolute -z-1 bg-center bg-cover w-full h-full left-0 top-0" style="background-image: url('https://neu.edu.ph/main/assets/images/NEU_Pampanga.jpg'); filter: grayscale(50%) brightness(50%);" />

<div transition:slide class="page-home my-16">
  <div class="mx-auto relative">
    <div class="min-h-full mx-auto max-h-full flex  justify-center text-white">
      <div class="items-center mb-21">
        <p class="<sm:text-4xl <md:text-6xl md:text-8xl underline font-bold uppercase text-shadow-lg">Admission</p>
      </div>
    </div>

    <div>
      <div class="flex flex-wrap justify-center mb-8">
        {#if branch_procs.length > 0}
          {#each branch_procs as { id, name, cover, short_desc, content }}
            <Cards pathChosen="#/admission/{id}" imageSrc="{HOST_ROOT}/{cover.path}" schoolType={name}>
              {short_desc}
            </Cards>
          {/each}
        {:else}
          <div class="text-center text-white">
            <p class="text-4xl font-bold">No admission process available, Please contact the site administrator.</p>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
</style>
