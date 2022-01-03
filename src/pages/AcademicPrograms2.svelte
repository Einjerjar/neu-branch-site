<script>
  import { departments, programs } from '@/sample_data/programs'
  import { branch_data } from '@/store'
  import { clean_entries, HOST_ROOT, re_get } from '@/utils'

  import AcademicDepartments from '@/components/academics/AcademicDepartments.svelte'
  import AcademicGroups from '@/components/academics/AcademicGroups.svelte'
  import AcademicProgramList from '@/components/academics/AcademicProgramList.svelte'
  import AcademicProgramView from '@/components/academics/AcademicProgramView.svelte'
  import Loading from '@/components/Loading.svelte'
  import LoadFailed from '@/components/LoadFailed.svelte'

  const expected_levels = [ 'basic', 'shs', 'undergrad' ]
  const level_data = {
    basic: {
      img: './images/acad/A_compressed.jpg',
      text: 'Basic Education',
      showMore: true,
      _id: 'basic',
    },
    shs: {
      img: './images/acad/B_compressed.jpg',
      text: 'Senior Highschool',
      showMore: true,
      _id: 'shs',
    },
    undergraduate: {
      img: './images/acad/C_compressed.jpg',
      text: 'Undergraduate',
      showMore: true,
      _id: 'undergraduate',
    },
  }
  let levels = []
  let has_unassigned = false

  // eslint-disable-next-line no-unused-vars
  const t_programs = async (id, trigger) => {
    const res = await re_get('collections/get/programs', {
      'filter[branch]': id,
    })

    levels = []

    // some magic to search for unassigned programs
    const dd = res.entries.map(v => v.department)
    has_unassigned = dd.includes(null)

    // some magic to get the available levels, too lazy to name so yeah
    const m = res.entries.map((v) => v.level)
    const r = m.reduce((v, p) => [ ...v, ...p ])
    const f = r.filter((v, i) => r.indexOf(v) == i)
    const d = f.filter((v) => Object.keys(level_data).includes(v))

    for (let i in d) {
      if (i in expected_levels) {
        levels.push(level_data[d[i]])
      }
    }

    let data = res.entries
    data = clean_entries(data)

    // console.log('p', data, d)
    
    return data || programs
  }

  // eslint-disable-next-line no-unused-vars
  const t_departments = async (id, trigger) => {
    let res = await re_get('collections/get/departments', {
      'filter[branch]': id,
    })

    // console.log('rr', res)
    let data = res.entries
    data = clean_entries(data)

    // console.log(data, Object.keys(level_data))
    return data || departments
  }

  let programsRetryTrigger = 0
  let departmentsRetryTrigger = 0

  $: a_programs = t_programs($branch_data.id, programsRetryTrigger)
  $: a_departments = t_departments($branch_data.id, departmentsRetryTrigger)

  let state = 'grp'
  let states = [ 'grp', 'dep', 'prog', 'view' ]

  const set_state = (n) => {
    state = states[n]
    window.scrollTo(0, 0)
  }

  let grp = ''
  let dep = ''
  let prg = { // sample data
    program_name: 'Bachelor of Science in Accounting Information System',
    program_desc:
      '<p>Bachelor of Science in Accounting Information System</p>\n<p>Bachelor of Science in Accounting Information System</p>\n<p>Bachelor of Science in Accounting Information System</p>\n<p>Bachelor of Science in Accounting Information System</p>',
    branch: [ 'gensan', 'lipa', 'pampanga' ],
    level: [ 'undergraduate', 'tertiary' ],
    _id: '955862716134343cac000172',
    department: [
      {
        _id: '95df14a7653631604e0002c7',
        link: 'departments',
        display: 'pampanga cbaa',
      },
    ],
    image: null,
    images: null,
  }

  const selectGroup = (v) => {
    set_state(1)
    grp = v.detail
  }

  const selectDepartment = (v) => {
    set_state(2)
    dep = v.detail
  }

  const selectProgram = (v) => {
    set_state(3)
    prg = v.detail
  }

  const closeView = () => {
    set_state(2)
  }

  const closeGroup = () => {
    set_state(0)
  }

  const closeDep = () => {
    set_state(1)
  }
</script>

<!-- <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-99 hidden" /> -->
<div class="min-h-screen bg-primary-900 w-full fixed top-0 left-0 -z-1" />
<div class="min-h-screen bg-dark-900 w-full fixed top-0 left-0 -z-1 bg-opacity-75" />

{#await a_programs}
  <Loading icon_class_extra="!text-white" text_class_extra="!text-white">
    Loading programs
  </Loading>
{:then prgs}
  {#await a_departments}
    <Loading>
      Loading Departments
    </Loading>
  {:then deps}
    {#if state == 'grp'}
      <AcademicGroups groups={levels} on:selectGroup={(v) => selectGroup(v)} />
    {:else if state == 'dep'} 
      <AcademicDepartments {grp} on:selectGroup={(v) => selectDepartment(v)} on:closeGroup={() => closeGroup()}
        {has_unassigned}
        departments={deps.map((v) => {
          return {
            img: HOST_ROOT + v.image?.path,
            text: v.name,
            showMore: true,
            _id: v._id,
            extra_tags: v.extra_tags[0]
          }
        })} />
    {:else if state == 'prog'}
      <AcademicProgramList programs={prgs} departments={deps} department={dep} on:selectGroup={(v) => selectProgram(v)} on:closeDep={() => closeDep()} />
    {:else}
      <AcademicProgramView {prg} on:closeView={() => closeView()} />
    {/if}
  {:catch}
    <LoadFailed on:retry={() => departmentsRetryTrigger++}>
      Failed to load Department list!
    </LoadFailed>
  {/await}
{:catch}
  <LoadFailed on:retry={() => programsRetryTrigger++}>
    Failed to load Program list!
  </LoadFailed>
{/await}
