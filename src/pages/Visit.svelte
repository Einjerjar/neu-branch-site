<script>
    import Branch from '@/components/admission/Branch.svelte'
    import SkeletonImage from '@/components/SkeletonImage.svelte'
    import { fade, slide } from 'svelte/transition'

    const branchInfo = [
      {
        branchName: 'Quezon City (Main Branch)',
        imgSource: './images/neu_main.jpg',
        id: 0,
      },
      {
        branchName: 'General Santos City',
        imgSource: './images/neu_gensan.jpg',
        id: 1,
      },
      {
        branchName: 'Pampanga',
        imgSource: './images/neu_pampanga.jpg',
        id: 2,
      },
      { branchName: 'Lipa City', imgSource: './images/neu_lipa.jpg', id: 3 },
    ]
</script>

<div transition:slide>
    <div
        class="w-full h-15 bg-primary-900 text-xl text-white uppercase font-semibold py-8 flex items-center justify-center md:(text-2xl h-18) lg:(text-4xl h-25)"
        in:fade={{ duration: 600 }}>
        university branches
    </div>

    <div class="bg-gray-200" in:fade={{ duration: 600 }}>
        <div class="container mx-auto shadow-lg bg-white rounded py-5">
            <div
                class="mx-auto items-center bg-white p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {#each branchInfo as branch (branch.id)}
                    <Branch
                        branchImage={branch.imgSource}
                        branchName={branch.branchName} />
                {/each}
            </div>

            <div
                class="text-primary-900 text-2xl sm:text-3xl md:text-4xl font-bold border-b-6 p-8 mt-4 border-primary-900">
                School Facilities
            </div>

            <div class="md:children:flex facility">
                {#each branchInfo as a}
                    <div class="p-8 grid grid-cols-2 gap-4 items-center">
                        <div class="md:w-2/4 p-4">
                            <h4 class="text-2xl font-semibold mb-2">
                                Professional Schools Library
                            </h4>
                            <p>
                                Alorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a
                                galley of type and scrambled it
                            </p>
                        </div>
                        <div class="md:w-2/4">
                            <div class="p-2 shadow rounded-md">
                                <SkeletonImage
                                    class="w-full h-auto"
                                    img="http://www.neu.edu.ph/law/wp-content/uploads/2017/01/Law-Library-3.jpg"
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
