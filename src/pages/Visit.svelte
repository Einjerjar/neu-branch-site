<script>
    import { fade, slide } from 'svelte/transition'
    
    import { HOST_ROOT, re_param } from '@/utils'
    import { branch_data } from '@/store'
    import { branch_data as bd } from '@/sample_data/branch_data'

    import Branch from '@/components/admission/Branch.svelte'
    import Loading from '@/components/Loading.svelte'
    import SkeletonImage from '@/components/SkeletonImage.svelte'
    import LoadFailed from '@/components/LoadFailed.svelte'

    const getBranches = async () => {
      const response = await fetch(re_param('collections/get/branch_data', {
        'fields[id]': true,
        'fields[name]': true,
        'fields[cover_image]': true,
        'fields[_o]': true,             // preserves custom ordering
      }))
      
      const data = await response.json()

      return data.entries
    }

    $: a_branches = getBranches()
    $: facilities = $branch_data.facilities ?? bd.facilities
</script>

<div transition:slide>
    <div
        class="w-full h-15 bg-primary-900 text-xl text-white uppercase font-semibold py-8 flex items-center justify-center md:(text-2xl h-18) lg:(text-4xl h-25)"
        in:fade={{ duration: 600 }}>
        university branches
    </div>

    <div class="bg-gray-200 pb-16" in:fade={{ duration: 600 }}>
        <div class="container mx-auto shadow-lg bg-white rounded py-5">
            <div
                class="mx-auto items-center bg-white p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {#await a_branches}
                    <Loading class='col-span-2'>Loading Branch List</Loading>
                {:then branches}
                    {#each branches as branch}
                        <Branch
                            branchImage="{HOST_ROOT}{branch.cover_image?.path || ''}"
                            branchName={branch.name} />
                    {/each}
                {:catch}
                    <LoadFailed class='col-span-2'>Failed to load branch list</LoadFailed>
                {/await}
            </div>

            <div
                class="text-primary-900 text-2xl sm:text-3xl md:text-4xl font-bold border-b-6 p-8 mt-4 border-primary-900">
                School Facilities
            </div>

            <div class="<md:children:block md:children:flex facility">
                {#each facilities as facility}
                    <div class="p-8 grid grid-cols-2 gap-4 items-center">
                        <div class="md:w-2/4 p-4">
                            <h4 class="<md:text-xl text-2xl font-semibold mb-2">
                                {facility.value.title}
                            </h4>
                            <p class="<md:text-sm">
                                {facility.value.content}
                            </p>
                        </div>
                        <div class="md:w-2/4">
                            <div class="p-2 shadow rounded-md">
                                <SkeletonImage
                                    class="w-full h-auto"
                                    img="{HOST_ROOT}{facility.value.image?.path || ''}"
                                    element={true} />
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    .facility div:nth-child(even) {
        @apply flex-row-reverse;
    }
</style>
