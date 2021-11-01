<script>
  import {links} from '@/route_data'
  import {slide} from 'svelte/transition'
  export let isSticky = false
</script>

<div transition:slide class={`cmp-nav h-6rem top-0 w-full bg-gray-100 shadow-lg px-4 z-90 ${isSticky ? 'fixed' : ''}`}>
  <div class="absolute hidden md:block right-0 top-0 h-8 bg-primary-900 w-20rem">
  </div>
  <div class="flex container mx-auto z-10 h-16 md:h-auto">
    <div class="flex items-center">
      <a href="#/" class="font-light text-2xl">
        New Era University
      </a>
    </div>
    <div class="ml-auto hidden md:block md:min-w-30rem lg:min-w-40rem xl:min-w-60rem">
      <div>
        <ul class="flex children:mx-4 items-center ml-auto text-white bg-primary-900 h-8 rounded-bl rounded-bl-md relative z-1">
        {#each links as link}
          {#if link.category == 'secondary'}
            <li>
              <a href={'#'+link.path}>
                {link.name}
              </a>
            </li>
          {/if}
        {/each}
      </ul>
      </div>
      <div class="flex">
        <ul class="flex children:mx-4 items-center ml-auto h-16 flex-grow-0">
          {#each links as link}
            {#if link && link.category == 'primary'}
              <li>
                <a href={'#'+link.path}>
                  {link.name}
                </a>
              </li>
            {/if}
          {/each}
        </ul>
        <div class="ml-auto flex-grow flex items-center">
          <div class="ml-auto">
            <a href="#/admission">
              <div class="border uppercase text-sm border-2px px-6 py-2 rounded-md border-primary-800 text-primary-800">
                Apply Now
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>