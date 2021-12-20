<script>
    import { branch_data } from '@/store'
    import IconCard from '@/components/home/IconCard.svelte'
</script>

{#if $branch_data.home_icons}
<div class="flex flex-wrap justify-center children:mx-4">
    {#each $branch_data.home_icons as icon}
        <IconCard data={icon.value}/>
    {/each}
</div>
{/if}