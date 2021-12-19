<script>
    import { branch_data } from '@/store'
    import IconCard from '@/components/home/IconCard.svelte'
</script>

{#if $branch_data.home_icons}
<ul class="flex children:mx-4">
    {#each $branch_data.home_icons as icon}
        <IconCard data={icon.value}/>
    {/each}
</ul>
{/if}