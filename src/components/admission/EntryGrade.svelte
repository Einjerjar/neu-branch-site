<script>
  export let entryReq = [
    { grade: 83, description: 'Integrated School (K-12 Education)', id: 0 },
    { grade: 85, description: 'Tertiary Level', id: 1 },
    { grade: 2.25, description: 'Weighted  average for transferees to the tertiary level', id: 2 },
  ]
</script>

<div class="container px-4 mx-auto">
  <div
    class="bg-white px-8 py-6 max-h-full flex justify-center rounded-md shadow-lg font-light">
    <div class="items-center">
      <p
        class="text-center text-4xl sm:text-5xl md:text-6xl pb-10 lg:text-6xl text-primary-900">
        Entry Grade Admission Requirements
      </p>
      <div class="text-xl md:text-3xl">
        <ul>
          {#each entryReq as er (er.id)}
            <li class="pb-5">
              <strong>{entryReq[er.id].grade} </strong>{entryReq[er.id]
                .description}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
