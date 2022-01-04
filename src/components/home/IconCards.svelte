<script>
  import { branch_data } from '@/store'
  import { branch_data as bd } from '@/sample_data/branch_data'
  import IconCard from '@/components/home/IconCard.svelte'

  // fallback to sample data
  $: home_icons = $branch_data.home_icons ?? bd.home_icons
</script>

<div class="flex flex-wrap justify-center children:mx-4">
  {#each home_icons as icon}
    <IconCard data={icon.value} />
  {/each}
</div>