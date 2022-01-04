<script>
  import { onMount } from 'svelte'
  import { slide } from 'svelte/transition'
  import { branch_data } from '@/store'
  import { primaryLinks, secondaryLinks } from '@/route_data'
  import { re_param } from '@/utils'

  export let isSticky = false

  onMount(() => {
    aBranchData()
  })

  let currentBranch = import.meta.env.VITE_BRANCH_ID.toString().toLowerCase()
  const aBranchData = async () => {
    if (!Object.prototype.hasOwnProperty.call($branch_data, 'temp')) return

    let branchData = await fetch(re_param('collections/get/branch_data', {
      'filter[id]': currentBranch
    }))

    let branchDataJson = await branchData.json()
    branchDataJson = branchDataJson.entries[0]
    // console.log('branchdata', branchDataJson);
    branch_data.set(branchDataJson)
    return branchDataJson
  }

  let dropdownNav = false

  const toggleNav = () => {
    dropdownNav = !dropdownNav
  }

  let branch_id = import.meta.env.VITE_BRANCH_ID
</script>

<div transition:slide class='cmp-nav top-0 left-0 w-full max-w-100vw bg-gray-100 shadow-lg px-4 z-999 {isSticky ? 'fixed' : ''}'>
  <div class="absolute hidden lg:block right-0 top-0 h-8 bg-primary-900 w-20rem lg:w-30rem xl:w-50rem">
  </div>
  <div class="flex container mx-auto z-10 min-h-16 ">
    <div class="flex items-center">
      <a href="#/" class="">
        <div class="flex items-center">
          <img src="./images/logo_x300.png" class="w-12 lg:w-16" alt="">
          <div class="ml-2 md:ml-4 text-gray-700 flex lg:block items-baseline">
            <div class="font-shelley text-3xl sm:text-4xl">
              New Era University
            </div>
            <div class="text-md text-center ml-4 lg:ml-0">
              {$branch_data.name} Branch
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="ml-auto hidden md:min-w-30rem lg:block lg:min-w-35rem xl:min-w-55rem">
      <div>
        <ul class="flex children:mx-4 items-center ml-auto text-white bg-primary-900 h-8 rounded-bl rounded-bl-md relative z-1">
        {#each secondaryLinks as link}
            {#if link.sublinks}
              <li class="cursor-pointer relative group">{link.label} <i class="fas fa-angle-down pl-1 text-sm"></i>
                <ul class="absolute rounded-b-md invisible opacity-0 min-w-36 left-0 hidden bg-primary-900 text-white text-sm -mx-4 px-4 group-hover:(opacity-100 visible block) children:pt-3 last:pb-3">
                  {#each link.sublinks as sublink}
                  <li><a href={sublink.path} target="_blank" >{sublink.label}</a></li>
                  {/each}
                </ul>
              </li>
              {:else}
              <li>
                <a href={'#'+link.path}>
                  {link.label}
                </a>
              </li>
            {/if}
        {/each}
      </ul>
      </div>
      <div class="flex">
        <ul class="flex children:mx-4 items-center ml-auto h-16 flex-grow-0">
          {#each primaryLinks as link}
            <li>
              <a href={'#'+link.path}>
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
        <div class="ml-auto flex-grow flex items-center">
          <div class="ml-auto">
            <a href="#/admission">
              <div class="test-btn text-center text-xs">
                Apply Now
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="ml-auto block lg:hidden flex items-center">
      <div class="test-btn border-none !px-4" on:click={toggleNav}>
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </div>
  {#if dropdownNav}
    <div transition:slide class="absolute lg:hidden left-0 w-full top-full bg-gray-200 z-999">
      <div class="container px-4 py-2 mx-auto text-right">
        <div class="font-bold text-lg text-primary-900">
          Primary Links
        </div>
        <ul class="children:my-2 pl-4 text-primary-700">
          {#each primaryLinks as link}
            <li>
              <a href={'#'+link.path} on:click={toggleNav}>
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
        <div class="font-bold text-lg mt-4 text-primary-900">
          Secondary Links
        </div>
        <ul class="children:my-2 pl-4 text-primary-700">
          {#each secondaryLinks as link}
            <li>
              <a href={'#'+link.path} on:click={toggleNav}>
                {link.label}
              </a>
            </li>
            {#if link.sublinks}
              {#each link.sublinks as sublink}
              <li>
                <a href={'#'+sublink.path} target="_blank" on:click={toggleNav}>
                  {sublink.label}
                </a>
              </li>
              {/each}
            {/if}
          {/each}
        </ul>
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  .test-btn {
    @apply border uppercase text-sm border-2px px-6 py-2 rounded-md border-primary-800 text-primary-800 cursor-pointer hover:(bg-primary-100) active:(bg-primary-200);
  }
</style>
