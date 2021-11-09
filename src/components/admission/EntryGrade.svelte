<script>
    export let entryReq = [
        {grade:83, description:"Integrated School (K-12 Education)", id:0},
        {grade:85, description:"Tertiary Level", id:1},
        {grade:2.25, description:"Weighted  average for transferees to the tertiary level" , id:2},
    ];
</script>

<div class="container bg-white px-8 py-6 mx-auto max-h-full flex justify-center rounded-md shadow-lg" style="font-family: 'Rokkitt', serif;">
    <div class="items-center">
        <p class=" text-center text-4xl sm:text-5xl md:text-6xl pb-10 lg:text-6xl xl:text-6xl 2xl:text-6xl " style="color: #791616;">Entry Grade Admission Requirements</p>
        <div class="text-center">
            <div class="text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-left inline-block">
                <ul>
                    {#each entryReq as er (er.id)}
                        <li class="pb-5"><strong>{entryReq[er.id].grade} </strong>{entryReq[er.id].description}</li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</div>