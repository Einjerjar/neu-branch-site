<script>
  import { slide } from 'svelte/transition'

  import { branch_data } from '@/store'
  import { HOST_ROOT } from '@/utils'

  import MVP from '@/components/campus/mvp.svelte'

  const neuLOGO = './images/logo_x300.png'
  const GO_image = './images/logo_x300.png'

  const mission = 'Provide quality education anchored on Christian values with the prime purpose of bringing honor and glory to God.'
  const vision = 'A world-class Institution of learning with a unique Christian culture of excellence, discipline, and service to humanity.'
  const philo = 'Godliness is the foundation of knowledge.'
</script>

<div transition:slide class="pageBG_redColor overflow-hidden">
  <div class="bg-opacity-90 mx-auto flex shadow-2xl px-15 bg-primary-900 text-white">
    <div class="container mx-auto flex px-4 py-8 flex-col justify-center lg:(justify-around flex-row) children:my-8">
      <div class="w-full lg:w-2/5">
        <img src={`${HOST_ROOT}/${$branch_data.cover_image.path}`} alt="campus" class="w-full h-auto" />
        <div class="text-center my-4">
          <div class=" <md:text-4xl text-6xl font-shelley">New Era University</div>
          <div class="<md:text-xl text-3xl font-light">
            {$branch_data.name} Branch
          </div>
        </div>
        <p class="<md:text-sm my-4 font-sans text-white text-justify">
          {$branch_data.description}
        </p>
      </div>

      <div class="rounded w-full lg:w-2/5">
        <div class="w-full bg-primary-900 py-4 bg-opacity-75 text-center text-white font-bold">Campus Location</div>
        <div class="w-full">
          <iframe src={$branch_data.googlemaps_embed} width="100%" height="450" style="border:0;" allowfullscreen title="neu" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
  <!-- <Divider/> -->

  <div class="container bg-primary-900 bg-opacity-85 mx-auto shadow-lg my-16 md:rounded-md">
    <div class="flex flex-wrap items-center justify-center children:mx-4 children:my-2 mx-auto py-8">
      <img class="w-30" src={neuLOGO} alt="logo" />
      <h1 class="text-center text-white tracking-wide font-shelley text-[6vw] sm:text-7xl text-shadow-lg">New Era University</h1>
    </div>
    <div class="flex flex-wrap items-center justify-center my-10 <md:flex-col <lg:flex-wrap children:max-w-100">
      <MVP desc={mission} title="MISSION" />
      <MVP desc={philo} title="PHILOSOPHY" />
      <MVP desc={vision} title="VISION" />
    </div>
  </div>

  <!-- <Divider/> -->

  <div class="bg-primary-700 p-16">
    <div class="container bg-white bg-opacity-80 mx-auto md:rounded-md px-8 py-6 text-black">
      <div class=" text-[6vw] sm:text-8xl font-mono font-bold">
        <div class="text-primary-800">GOALS & OBJECTIVES</div>
      </div>
      <div class="flex flex-wrap items-center justify-content-between">
        <div class="flex-grow">
          <ul class="my-10 ml-8 list-circle text-[3vw] sm:text-base children:my-2">
            <li>Impart value-laden education to the total development of man.</li>
            <li>Offer curricula responsive to the needs of the time.</li>
            <li>Optimize learning through the adoption and utilization of appropriate instructional methods and resources.</li>
            <li>Propel institutional development through the conduct of useful and significant researches.</li>
            <li>Extend outreach services which promote self-help in the community.</li>
            <li>Promote access to non-conventional higher education and basic education programs.</li>
            <li>Develop servant leaders among staff, faculty members, and administrators.</li>
            <li>Produce God-fearing, competent, and disciplined graduates.</li>
          </ul>
        </div>
        <div class="mx-auto max-w-100">
          <img class="w-full drop-shadow-lg <lg:w-auto h-auto justify-center" src={GO_image} alt="another" />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .pageBG_redColor {
    /* background-image: url('./images/about_red.jpg'); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: bottom;
  }
</style>
