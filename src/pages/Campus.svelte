<script>
  import Divider from "@/components/Divider.svelte";
  import MVP from "@/components/campus/mvp.svelte"

  //img sources
  const ph_mapSrc = '/images/branchimage.png'
  const campusMainImage = '/images/NEU_Pampangga.png'
  const neuLOGO = '/logo.png'
  const GO_image = '/logo.png'

  //map
  const mapDirections = 'https://goo.gl/maps/HSAo3iXD8URBUHNe9'

  function isClicked(){
    window.open(mapDirections);
  }

  //text sources
  const descr = "New era University openede its New Era University - General Santos City Brancj in June 1994, at first offereing the Prescgool Eduycation Program. \
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

<div class="sm:page-home pageBG_redColor my-auto pb-20 pt-10">
  <div class = "bg-opacity-90 mx-auto flex shadow-2xl px-15 py-0 bg-cyan-900 <lg:flow-root px-0">

    <div class = "sm:w-2/3 py-4 justify-center my-10 pt-5 mx-auto <lg:w-screen mb-0">
      <img class = "drop-shadow-4xl justify-center mx-auto px-10 w-150 h-100 <sm:px-0"src = {campusMainImage} alt = campusImage>
      <p class = "pt-5 px-10 mx-auto px-auto text-sm text-justify font-sans text-white">
        {descr}
      </p>
    </div>
    <div class="sm:pt-10 pr-20 <lg:pt-0 pr-0 mt-0 ">
      <img class= "w-250 h-150 <lg:w-screen h-screen mx-0"src = {ph_mapSrc} alt = ph>
      <button on:click={isClicked} class= "sm:relative bottom-45 left-1/2 mx-auto text-white font-bold rounded-4xl h-15 w-55 text-2xl bg-trueGray-800 <sm:relative left-1/3 bottom-20" type="button">GET DIRECTIONS</button>
    </div>
  </div>

  <Divider/>

  <div class="container bg-white bg-opacity-85 mx-auto shadow-lg">
    <div class= "flex mx-auto">
      <div class= "sm:inline-flex mx-auto pt-10 <lg:flow-root">
        <img class="mx-auto h-auto w-auto" src = {neuLOGO} alt=logo> 
        <h1 class = "text-center pl-10 pt-10 text-black tracking-wide font-bold font-mono text-6xl text-shadow-lg">NEW ERA UNIVERSITY</h1>
      </div>
    </div>
    <div class = "sm:container flex justify-center my-10 <lg:flow-root">
      <MVP desc = {mission} title = 'MISSION'/>
      <MVP desc = {philo} title = 'PHILOSOPHY'/>
      <MVP desc = {vision} title = 'VISION'/>
    </div>
  </div>

  <Divider/>

  <div class= "container bg-black bg-opacity-80 mx-auto ">
    <div class = "container flex-col ml-10 my-10 mr-10 pr-5 px-auto">
      <h1 class= "text-white tracking-wide font-bold font-mono text-9xl">GOALS &</h1>
      <h1 class= "text-white font-bold font-mono text-9xl <lg:break-all">OBJECTIVES</h1>
    </div>
    <div class ="sm:container mx-auto flex px-auto <lg:flow-root">
      <div class = "sm:mx-10 container text-white font-sans text-lg px-auto <lg:px-5">
        <ul class= "sm:list-circle my-10 px-auto <lg:pr-5 list-circle pl-5">
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
      <div class = "mx-10 mb-5">
        <img class="w-200 h-100 drop-shadow-lg <lg:w-auto h-auto justify-center"src = {GO_image} alt=another>
      </div>
    </div>
  </div>
  <div></div>
</div>



<style>
  .pageBG_redColor{
    background-image: url('./images/ABOUT_RED.png');
    background-repeat: no-repeat;
    background-size: 100% 100%
  }
</style>