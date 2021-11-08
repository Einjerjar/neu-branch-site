<script>
  import { programs, departments } from '@/sample_data/programs'
  import { slide } from 'svelte/transition'


  let program_sets = ['Undergradute', 'Senior High School', 'Basic Education']
  let selected = 'Undergradute'

  console.log(departments)

  let selected_department_index = 1
  $: selected_department = departments.entries[selected_department_index]

  let selected_program_group = 'undergraduate'
  let selected_program_index = 0
  $: program_group = programs.entries.filter(v => v.level.includes(selected_program_group))
  $: selected_department_programs = programs.entries.filter(v => v.department != null && v.department.filter(x => x._id == selected_department._id).length > 0)
  $: selected_program = selected_program_index >= 0 ? selected_department_programs[selected_program_index] : null
</script>

<div class="page-home bg-gray-200 py-8">
  <div class="container mx-auto shadow-lg m-2 bg-white rounded">
    <div class="text-center text-8xl text-primary-900 font-bold border-b-6 border-primary-900 py-8">
      Academic Programs
    </div>

    <div class="mt-8 flex justify-center bg-red-900 text-white">
      {#each program_sets as program_set}
        <div on:click={() => {selected = program_set}} class={`flex-grow text-center py-4 px-4 cursor-pointer font-bold ${program_set==selected ? 'bg-primary-900 underline' : ''}`}>
          {program_set}
        </div>
      {/each}
    </div>

    <div class="py-4">
      <div class="flex children:mx-4">
        <div class="w-100 bg-gray-100 rounded shadow overflow-hidden">
          <ul>
            {#each departments.entries as department, i}
              <li on:click={() => {selected_department_index = i; selected_program_index = -1}} class={`px-4 py-3 hover:bg-primary-200 cursor-pointer ${selected_department_index == i ? 'border-l-2 border-primary-300' : ''}`}>
                {department.name}
              </li>
              {#if selected_department_index == i}
                <ul transition:slide>
                  {#each selected_department_programs as program, j}
                    <li on:click={() => selected_program_index = j} class={`px-4 py-3 hover:bg-primary-200 cursor-pointer pl-8 ${selected_program_index == j ? 'bg-primary-900 hover:bg-primary-900 font-bold text-white' : ''}`}>
                      {program.program_name}
                    </li>
                  {/each}
                </ul>
              {/if}
            {/each}
          </ul>
        </div>
        <div class="flex-grow px-4 py-4">
          {#if selected_program}
            <div transition:slide>
              <div class="text-4xl font-bold text-primary-900 mb-4">
                {selected_program.program_name}
              </div>
              <div class="mb-8">
                {@html selected_program.program_desc}
              </div>
              <div class="flex items-baseline mb-2">
                <div class="font-bold text-primary-900">
                  Available at:
                </div>
                <ul class="flex flex-grow">
                  {#if selected_program.branch}
                    {#each selected_program.branch as branch}
                      <li class="px-3 py-1 border-2 border-primary-400 text-primary-900 rounded-full text-sm mx-2">
                        {branch}
                      </li>
                    {/each}
                  {/if}
                </ul>
              </div>
              <div class="flex items-baseline">
                <div class="font-bold text-primary-900">
                  Tags:
                </div>
                <ul class="flex flex-grow">
                  {#if selected_program.level}
                    {#each selected_program.level as level}
                      <li class="px-3 py-1 border-2 border-primary-400 text-primary-900 rounded-full text-sm mx-2">
                        {level}
                      </li>
                    {/each}
                  {/if}
                </ul>
              </div>
            </div>
          {:else}
            <div class="flex h-full items-center justify-center">
              <div class="text-center font-monospace text-xl">No Program Selected</div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>