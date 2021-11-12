<script>
  import Divider from "@/components/Divider.svelte";
  import MVP from "@/components/campus/mvp.svelte"

  //img sources
  const ph_mapSrc = './images/branchimage.png'
  const campusMainImage = './images/NEU_Pampangga.png'
  const neuLOGO = './images/logo_x300.png'
  const GO_image = './images/logo_x300.png'

  //map
  const mapDirections = 'https://goo.gl/maps/HSAo3iXD8URBUHNe9'

  function isClicked(){
    window.open(mapDirections);
  }

  //text sources
  const descr = "New era University openede its New Era University - General Santos City Branch in June 1994, at first offereing the Prescgool Eduycation Program. \
                Elementary and secondaty edu Education Programs were opened soon after. It was on June 5, 1998, \
                when the new school building situated in a half-hectare land \
                area was inaugurated. The school is now fully equipped to implement \
                the K to 12 program with Senior High School. NEU – GSC marked \
                another significant event of its history in March 2018 upo2xl\
                receiving Government Recognition for the Bachelor of Science \
                courses: Real Estate Management, Entrepreneurship, Accounting \
                Technology, and Accountancy."

  const mission = "Provide quality education anchored on Christian values with the prime purpose of bringing honor and glory to God."
  const vision = "A world-class Institution of learning with a unique Christian culture of excellence, discipline, and service to humanity."
  const philo = "Godliness is the foundation of knowledge."

</script>

<div class="sm:page-home pageBG_redColor my-auto pb-20">
  <div class = "bg-opacity-90 mx-auto flex shadow-2xl px-15 py-0 bg-cyan-900 <lg:flow-root px-0">
    <div class="container mx-auto flex px-4 py-8 flex-wrap children:my-8">
      <div class = "flex-grow">
        <div class="flex flex-col items-center">
          <div class="inline-block w-100 md:w-120 h-80 bg-white rounded shadow-lg bg-center bg-cover" style={`background-image: url(${campusMainImage});`}></div>
          <p class = "my-4 text-sm font-sans w-100 md:w-120 text-white">
            {descr}
          </p>
        </div>
      </div>

      <div class="flex-grow">
        <div class="rounded relative overflow-hidden h-full w-100 md:w-120 mx-auto min-h-120">
          <div class="h-full bg-red-500 bg-center bg-cover" style="background-image: url('./images/sample_map.png');"></div>
          <div class="absolute top-0 left-0 w-full bg-primary-900 px-8 py-4 bg-opacity-75 text-center text-white font-bold">
            Campus Location
          </div>
          <button on:click={isClicked} class= "w-60 absolute bottom-4 transform -translate-x-1/2 left-1/2 px-6 py-3 text-white font-bold rounded-4xl text-2xl bg-primary-900 hover:bg-primary-800 hover:shadow-md" type="button">GET DIRECTIONS</button>
        </div>
      </div>
    </div>
  </div>

  <!-- <Divider/> -->

  <div class="container bg-white bg-opacity-85 mx-auto shadow-lg my-16 md:rounded-md">
    <div class= "flex flex-wrap items-center justify-center children:mx-4 children:my-2 mx-auto py-8">
      <img class="w-30" src = {neuLOGO} alt=logo>
      <h1 class = "text-center tracking-wide font-bold font-mono text-6xl text-shadow-lg">NEW ERA UNIVERSITY</h1>
    </div>
    <div class = "flex flex-wrap items-center justify-center my-10 <md:flex-col <lg:flex-wrap">
      <MVP desc = {mission} title = 'MISSION'/>
      <MVP desc = {philo} title = 'PHILOSOPHY'/>
      <MVP desc = {vision} title = 'VISION'/>
    </div>
  </div>

  <!-- <Divider/> -->

  <div class= "container bg-black bg-opacity-80 mx-auto md:rounded-md px-8 py-6 text-white">

    <div class="text-8xl <md:text-6xl font-mono font-bold">
      <div>GOALS &</div>
      <div>OBJECTIVES</div>
    </div>
    <div class="flex flex-wrap items-center justify-content-between">
      <div class="flex-grow">
        <ul class= "my-10 ml-8 list-circle children:my-2">
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
        <img class="w-full drop-shadow-lg <lg:w-auto h-auto justify-center"src = {GO_image} alt=another>
      </div>
    </div>
  </div>
</div>



<style>
  .pageBG_redColor{
    background-image: url('./images/ABOUT_RED.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: bottom;
  }
</style>