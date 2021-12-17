<script>
  import AcademicDepartments from '@/components/academics/AcademicDepartments.svelte';
  import AcademicGroups from '@/components/academics/AcademicGroups.svelte';
  import AcademicProgramList from '@/components/academics/AcademicProgramList.svelte';
  import AcademicProgramView from '@/components/academics/AcademicProgramView.svelte';
  import ItemCard from '@/components/academics/ItemCard.svelte';
  import { departments, programs } from '@/sample_data/programs';
  import { branch_data } from '@/store';
  import { clean_entries, HOST_ROOT, re_get } from '@/utils';

  export let params = {
    department: '',
  };
  export let e_department = params.department;

  const expected_levels = ['basic', 'shs', 'undergrad'];
  const level_data = {
    'basic': {
      img: './images/acad/A_compressed.jpg',
      text: 'Basic Education',
      showMore: true,
      _id: 'basic',
    },
    'shs': {
      img: './images/acad/B_compressed.jpg',
      text: 'Senior Highschool',
      showMore: true,
      _id: 'shs',
    },
    'undergraduate': {
      img: './images/acad/C_compressed.jpg',
      text: 'Undergraduate',
      showMore: true,
      _id: 'undergraduate',
    },
  }
  let levels = [];

  const t_programs = async (id) => {
    const res = await re_get('collections/get/programs', {
      'filter[branch]': id,
    });

    levels = [];

    const m = res.entries.map((v) => v.level);
    const r = m.reduce((v, p) => [...v, ...p]);
    const f = r.filter((v, i) => r.indexOf(v) == i);
    const d = f.filter(v => Object.keys(level_data).includes(v))

    for (let i in d) {
      if (i in expected_levels) {
        levels.push(level_data[d[i]]);
      }
    }

    let data = res.entries
    data = clean_entries(data)

    // console.log('p', data, d)
    return data || programs;
  }

  const t_departments = async (id) => {
    let res = (await re_get('collections/get/departments', {
      'filter[branch]': id,
    }))

    // console.log('rr', res)
    let data = res.entries
    data = clean_entries(data)

    // console.log(data, Object.keys(level_data))
    return data || departments
  }

  $: a_programs = t_programs($branch_data.id);
  $: a_departments = t_departments($branch_data.id)

  let state = 'grp';
  let states = ['grp', 'dep', 'prog', 'view'];
  const set_state = (n) => {
    state = states[n]
    window.scrollTo(0, 0);
  };
  let grp = ''
  let dep = ''
  let prg = {
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
  }

  const selectGroup = (v) => {
    // console.log('selectGroup', v);
    set_state(1);
    grp = v.detail
  };

  const selectDepartment = (v) => {
    // console.log('selectDepartment', v);
    set_state(2);
    dep = v.detail
  };

  const selectProgram = (v) => {
    // console.log('selectProgram', v)
    set_state(3);
    prg = v.detail
  }

  const closeView = () => {
    // console.log('closeView')
    set_state(2);
  }

  const closeGroup = () => {
    // console.log('closeGroup')
    set_state(0);
  }

  const closeDep = () => {
    // console.log('closeDep')
    set_state(1);
  }
</script>

<div class='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-99 hidden' />
<div class='min-h-screen bg-primary-900 w-full fixed top-0 left-0 -z-1' />
<div class='min-h-screen bg-dark-900 w-full fixed top-0 left-0 -z-1 bg-opacity-75' />

{#await a_programs}
  Loading programs
{:then prgs} 
  {#await a_departments}
    Loading Departments
  {:then deps} 
    {#if state == 'grp'}
      <AcademicGroups groups={levels} on:selectGroup={(v) => selectGroup(v)} />
    {:else if state == 'dep'}
      <AcademicDepartments grp={grp} departments={deps.map(v => {return {
        img: HOST_ROOT + v.image?.path,
        text: v.name,
        showMore: true,
        _id: v._id,
      }})} on:selectGroup={(v) => selectDepartment(v)} on:closeGroup={() => closeGroup()} />
    {:else if state == 'prog'}
      <AcademicProgramList programs={prgs} departments={deps} department={dep} on:selectGroup={v => selectProgram(v)} on:closeDep={() => closeDep()} />
    {:else}
      <AcademicProgramView prg={prg} on:closeView={() => closeView()} />
    {/if}
  {/await}
{/await}
