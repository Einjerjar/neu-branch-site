<script>
    import Branch from "@/components/admission/Branch.svelte";
    import { fade, slide } from 'svelte/transition'

    const branchInfo = [
        {branchName:'Quezon City (Main Branch)', imgSource:'./images/NEU_MAIN.png', id:0},
        {branchName:'General Santos City', imgSource:'./images/NEU_GENSAN.png', id:1},
        {branchName:'Pampanga', imgSource:'./images/NEU_PAMPANGA.png', id:2},
        {branchName:'Lipa City', imgSource:'./images/NEU_LIPA.png', id:3},
    ];

</script>

<div transition:slide>
<div class="w-full h-15 bg-primary-900 text-xl text-white uppercase font-semibold py-8 flex items-center justify-center md:(text-2xl h-18) lg:(text-4xl h-25)" in:fade={{duration: 600}}>
    university branches
</div>

<div class="bg-gray-200" in:fade={{duration: 600}}>
    <div class="container mx-auto shadow-lg bg-white rounded py-5">
        <div class="mx-auto items-center bg-white p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {#each branchInfo as branch (branch.id)}
                <Branch branchImage={branch.imgSource} branchName={branch.branchName}></Branch>
            {/each}
        </div>


        <!-- Nat: done refactoring code above, please continue code below -->
        <!-- PLEASE START HERE -->


        <div class="text-primary-900 text-2xl sm:text-3xl md:text-4xl font-bold border-b-6 p-8 mt-4 border-primary-900">
            School Facilities
        </div>


        <div class="md:children:flex facility">
            {#each branchInfo as a }
                <div class="p-8 grid grid-cols-2 gap-4 items-center">
                    <div class="md:w-2/4 p-4">
                        <h4 class="text-2xl font-semibold mb-2">
                            Professional Schools Library
                        </h4 >
                        <p>Alorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    </div>
                    <div class="md:w-2/4">
                        <div class="p-2 shadow rounded-md">
                            <img class="w-full h-auto" src="http://www.neu.edu.ph/law/wp-content/uploads/2017/01/Law-Library-3.jpg" alt=libLaw>
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
    .container2{
        margin: 20px auto;
        background-color:white;
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-row: auto auto;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }

    /* fade in effect */
    .fade-in {
        animation: fadeIn ease 3s;
        -webkit-animation: fadeIn ease 3s;
        -moz-animation: fadeIn ease 3s;
        -o-animation: fadeIn ease 3s;
        -ms-animation: fadeIn ease 3s;
    }
    @keyframes fadeIn {
        0% {
            opacity:0;
        }
        100% {
            opacity:1;
        }
    }

    @-moz-keyframes fadeIn {
        0% {
            opacity:0;
        }
        100% {
            opacity:1;
        }
    }

    @-webkit-keyframes fadeIn {
        0% {
            opacity:0;
        }
        100% {
            opacity:1;
        }
    }

    @-o-keyframes fadeIn {
        0% {
            opacity:0;
        }
        100% {
            opacity:1;
        }
    }

    @-ms-keyframes fadeIn {
        0% {
            opacity:0;
        }
        100% {
            opacity:1;
        }
    }
</style>