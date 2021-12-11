<script>
  import { programs, departments } from "@/sample_data/programs";
  import { slide } from "svelte/transition";

  // TODO: Fix this clusterfuck
  let program_sets = ["Undergradute", "Senior High School", "Basic Education"];
  let selected = "Undergradute";

  console.log(departments);

  let selected_department_index = 1;
  $: selected_department = departments.entries[selected_department_index];

  let selected_program_group = "undergraduate";
  let selected_program_index = 0;
  $: program_group = programs.entries.filter((v) =>
    v.level.includes(selected_program_group)
  );
  $: selected_department_programs = programs.entries.filter(
    (v) =>
      v.department != null &&
      v.department.filter((x) => x._id == selected_department._id).length > 0
  );
  $: selected_program =
    selected_program_index >= 0
      ? selected_department_programs[selected_program_index]
      : null;

  let isProgramShowing = false
  const showProgram = () => {
    isProgramShowing = true
    console.log('show')
  };

  const hideProgram = () => {
    isProgramShowing = false
    selected_program_index = 0
    console.log('hide')
  }
</script>

<div class={`absolute transition-bg-opacity z-98 transition dutation-300 left-0 top-0 w-full h-full lg:hidden bg-black ${selected_program && isProgramShowing ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none'}`} on:click={() => hideProgram()}></div>
<div class="page-home bg-gray-200 py-8 px-2">
  <div class="container mx-auto shadow-lg m-2 bg-white rounded">
    <div class="text-center text-4xl lg:text-8xl text-primary-900 font-bold border-b-6 border-primary-900 py-8" >
      Academic Programs
    </div>

    <div class="mt-8 flex justify-center bg-red-900 text-white">
      {#each program_sets as program_set}
        <div
          on:click={() => {
            selected = program_set;
          }}
          class={`flex-grow text-center py-4 px-4 cursor-pointer font-bold ${
            program_set == selected ? "bg-primary-900 underline" : ""
          }`}
        >
          {program_set}
        </div>
      {/each}
    </div>

    <div class="py-4 relative">
      <div class="flex relative mx-4">
        <div class="bg-gray-100 rounded shadow overflow-hidden flex-grow lg:flex-grow-0">
          <ul>
            {#each departments.entries as department, i}
              <li
                on:click={() => {
                  selected_department_index = i
                  selected_program_index = -1
                }}
                class={`px-4 py-3 hover:bg-primary-200 cursor-pointer ${
                  selected_department_index == i
                    ? "border-l-2 border-primary-300"
                    : ""
                }`}
              >
                {department.name}
              </li>
              {#if selected_department_index == i}
                <ul transition:slide>
                  {#each selected_department_programs as program, j}
                    <li
                      on:click={() => {
                        selected_program_index = j
                        showProgram()
                        }
                      }
                      class={`px-4 py-3 hover:bg-primary-200 cursor-pointer pl-8 ${
                        selected_program_index == j
                          ? "bg-primary-900 hover:bg-primary-900 font-bold text-white"
                          : ""
                      }`}
                    >
                      {program.program_name}
                    </li>
                  {/each}
                </ul>
              {/if}
            {/each}
          </ul>
        </div>
        <div class="absolute left-0 top-0 bg-gray-100 shadow-md w-full lg:relative flex-grow rounded-md z-99">
          {#if selected_program}
            <div class={`${isProgramShowing ? 'block' : 'hidden'} lg:block`}><div class="h-12 bg-gray-200 rounded-t-md flex items-center pl-4 lg:hidden">
              <div>Program Info</div>
                <div class="ml-auto cursor-pointer" on:click={() => hideProgram()}>
                  <div class="flex h-12 w-12 items-center justify-center">
                    <i class="fa fa-close"></i>
                  </div>
                </div>
              </div>

              <div class="px-4 py-4">
                <div transition:slide>
                  <div class="text-4xl font-bold text-primary-900 mb-4">
                    {selected_program.program_name}
                  </div>
                  <div class="mb-8">
                    {@html selected_program.program_desc}
                  </div>
                  <div class="flex items-baseline mb-2">
                    <div class="font-bold text-primary-900">Available at:</div>
                    <ul class="flex flex-grow">
                      {#if selected_program.branch}
                        {#each selected_program.branch as branch}
                          <li
                            class="px-3 py-1 border-2 border-primary-400 text-primary-900 rounded-full text-sm mx-2"
                          >
                            {branch}
                          </li>
                        {/each}
                      {/if}
                    </ul>
                  </div>
                  <div class="flex items-baseline">
                    <div class="font-bold text-primary-900">Tags:</div>
                    <ul class="flex flex-grow">
                      {#if selected_program.level}
                        {#each selected_program.level as level}
                          <li
                            class="px-3 py-1 border-2 border-primary-400 text-primary-900 rounded-full text-sm mx-2"
                          >
                            {level}
                          </li>
                        {/each}
                      {/if}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          {:else}
            <div class="hidden lg:flex h-full items-center justify-center">
              <div class="text-center font-monospace text-xl">
                No Program Selected
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
