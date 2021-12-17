<script>
  import { img_path } from '@/store';

  import { HOST_ROOT } from '@/utils';

  import { createEventDispatcher } from 'svelte'
  import { slide } from 'svelte/transition';
  import SkeletonImage from '../SkeletonImage.svelte';

  const dispatch = createEventDispatcher()

  const closeView = () => {
    // console.log('EE')
    dispatch('closeView')
  }

  export let prg = {
    program_name: "Bachelor of Science in Accounting Information System",
    program_desc:
      "<p>Bachelor of Science in Accounting Information System</p>\n<p>Bachelor of Science in Accounting Information System</p>\n<p>Bachelor of Science in Accounting Information System</p>\n<p>Bachelor of Science in Accounting Information System</p>",
    branch: ["gensan", "lipa", "pampanga"],
    level: ["undergraduate", "tertiary"],
    _id: "955862716134343cac000172",
    department: [
      {
        _id: "95df14a7653631604e0002c7",
        link: "departments",
        display: "pampanga cbaa",
      },
    ],
    image: null,
    images: null,
  }
  $: p_img = prg.image ? HOST_ROOT + prg.image.path : './images/acad/default_compressed.jpg';

  let gallery = [
    './images/acad/A_compressed.jpg',
    './images/acad/B_compressed.jpg',
    './images/acad/C_compressed.jpg',
    './images/acad/D_compressed.jpg',
  ]

  let offset = 0

  const handleScroll = (n) => {
    if (offset + n < 0 || offset + n > gallery.length-3) return
    offset += n
  }

  $: n_gallery = prg.images == null ? [] : prg.images.slice(offset, offset+3)
  $: g_at_start = offset === 0
  $: g_at_end = offset+3 >= gallery.length-1
</script>

<div transition:slide class="container mx-auto px-4">
  <div class="rounded bg-light-50 overflow-hidden my-16">
    <div class="h-50px bg-gray-200 flex justify-between px-4 py-2 items-center">
      <div class="font-light">
        {prg.program_name}
      </div>
      <div class="w-32px h-32px flex items-center justify-center group" on:click={() => closeView()}>
        <i class="fa fa-close text-gray-500 group-hover:text-gray-800"></i>
      </div>
    </div>
    <div class="p-4">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div>
          <SkeletonImage class="w-full rounded bg-cover bg-center cursor-pointer" style='aspect-ratio: 1/1;' img={p_img}></SkeletonImage>
          <div class="mt-4 hidden md:block">
            <div>
              <div class="font-bold text-primary-900">
                Available At:
              </div>
              <div class="flex mt-2 ml-2 flex-wrap">
                {#each prg.branch as branch}
                  <div class="px-3 py-1 text-primary-900 border-1 border-primary-900 rounded-md capitalize mx-1 cursor-default hover:bg-primary-100 mb-2">
                    {branch}
                  </div>
                {/each}
              </div>
            </div>
            <div>
              <div class="font-bold text-primary-900 mt-4">
                Tagged:
              </div>
              <div class="flex mt-2 ml-2 flex-wrap">
                {#each prg.level as level}
                  <div class="px-3 py-1 text-primary-900 border-1 border-primary-900 rounded-md capitalize mx-1 cursor-default hover:bg-primary-100 mb-2">
                    {level}
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 md:col-span-2 flex flex-col">
          <div class="text-4xl font-bold text-primary-900">
            {prg.program_name}
          </div>
          <div class="text-gray-700 mt-4 flex-grow my-4">
            {@html prg.program_desc}
          </div>
          {#if prg.images != null && prg.images.length != 0}
            <div class="rounded bg-primary-900 w-full flex">
              <div class="text-primary-500 w-16 flex items-center justify-center {!g_at_start ? '!text-primary-300 !hover:text-white' : ''}" on:click={() => handleScroll(-1)}>
                <i class="fa fa-chevron-left"></i>
              </div>
              <div class="grid grid-cols-3 gap-4 flex-grow p-4">
                {#each n_gallery as g}
                  <SkeletonImage class="w-full rounded bg-cover bg-center" style="aspect-ratio: 1/1;" img={HOST_ROOT + g.path}/>
                {/each}
              </div>
              <div class="text-primary-500 w-16 flex items-center justify-center {!g_at_end ? '!text-primary-300 !hover:text-white' : ''}" on:click={() => handleScroll(+1)}>
                <i class="fa fa-chevron-right"></i>
              </div>
            </div>
          {/if}
          <div class="mt-4 block md:hidden">
            <div>
              <div class="font-bold text-primary-900">
                Available At:
              </div>
              <div class="flex mt-2 ml-2 flex-wrap">
                {#each prg.branch as branch}
                  <div class="px-3 py-1 text-primary-900 border-1 border-primary-900 rounded-md capitalize mx-1 cursor-default hover:bg-primary-100 mb-2">
                    {branch}
                  </div>
                {/each}
              </div>
            </div>
            <div>
              <div class="font-bold text-primary-900 mt-4">
                Tagged:
              </div>
              <div class="flex mt-2 ml-2 flex-wrap">
                {#each prg.level as level}
                  <div class="px-3 py-1 text-primary-900 border-1 border-primary-900 rounded-md capitalize mx-1 cursor-default hover:bg-primary-100 mb-2">
                    {level}
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>