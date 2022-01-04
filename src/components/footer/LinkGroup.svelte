<script>
  import { branch_data as bd } from '@/sample_data/branch_data'

  export let icon_only = false
  export let show_title = true
  export let extra_format = false
  export let title = 'title'
  export let links = [] || bd.links
</script>

{#if links}
  <div class="w-60 mb-8">
    {#if show_title}
      <div class="font-bold uppercase text-lg {icon_only ? 'text-right mr-2' : ''}">
        {title}
      </div>
    {/if}
    {#if !icon_only}
      <ul class="flex flex-col {extra_format ? 'text-right mx-4 uppercase font-bold' : ''}">
        {#each links as link}
          <a href={link.value.Link} class="hover:(text-primary-300)">{link.value.Label}</a>
        {/each}
      </ul>
    {:else}
      <ul class="flex flex-wrap justify-end mb-4">
        {#each links as link}
          <li>
            <a href={link.value.Link} class="mx-2 hover:text-primary-300">
              <i class="fab {link.value.Icon} text-3xl" />
            </a>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
{/if}
