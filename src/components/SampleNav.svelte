<script>
import { each } from "svelte/internal";


  const links = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Academic Programs',
      path: '/'
    },
  ]
</script>

<div class="cmp-nav w-full h-16 bg-gray-100 shadow-lg mb-4">
  <div class="flex container h-full mx-auto">
    <div class="flex items-center">
      <a href="/" class="font-light text-2xl">
        New Era University
      </a>
    </div>
    <ul class="flex children:mx-2 items-center ml-auto">
      {#each links as link}
        <li>
          <a href={link.path}>
            {link.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>