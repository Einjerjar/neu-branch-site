<script>
  import Divider from "@/components/Divider.svelte";
  import MVP from "@/components/campus/mvp.svelte"

  //img sources
  const ph_mapSrc = '/images/branchimage.png'
  const campusMainImage = '/images/NEU_Pampanga.jpg'
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

const missionTitle = "MISSION"
const visionTitle = "VISION"
const philoTitle = "PHILOSOPHY"

</script>

<div class="page-home pageBG_redColor my-auto pb-20">
  <div class =   "bg-opacity-80 mx-auto flex shadow-2xl mt-20 px-15 py-0 <sm:flow-root px-0 bg-cyan-900">

    <div class = "w-2/3 px-4 py-4 justify-center my-10 pt-10 mx-auto  <sm:w-screen mb-0">
      <img class = "drop-shadow-4xl justify-center mx-auto px-10 w-150 h-100"src = {campusMainImage} alt = campusImage >
      <p class = "pb-1 pt-5 px-10 mx-auto px-auto text-sm text-justify font-sans text-white">
        {descr}
      </p>
    </div>
    <div class="grid-cols-1 pt-10 pr-20 <sm:pt-0 pr-0 mt-0">
      <img class= "w-250 h-200 <sm:w-screen h-screen mx-0"src = {ph_mapSrc} alt = ph>
      <button on:click={isClicked} class= "sm:relative bottom-40 left-50 right-1/2 mx-auto text-white font-bold rounded-xl h-15 w-70 text-2xl bg-trueGray-800" type="button">GET DIRECTIONS</button>
    </div>
  </div>

  <Divider/>

  <div class="container bg-white bg-opacity-75 mx-auto shadow-lg">
    <div class= "flex justify-center mx-auto">
      <div class= "inline-flex mx-auto pt-10 <sm:flow-root">
        <img class="mx-auto h-auto w-auto" src = {neuLOGO} alt=logo> 
        <h1 class = "text-center pl-10 pt-10 text-black tracking-wide font-bold font-mono text-6xl text-shadow-lg">NEW ERA UNIVERSITY</h1>
      </div>
    </div>
    <div class = "container flex justify-center my-10 <sm:flow-root">
      <MVP desc = {mission} title = 'MISSION'/>
      <MVP desc = {philo} title = 'PHILOSOPHY'/>
      <MVP desc = {vision} title = 'VISION'/>
    </div>
  </div>

  <Divider/>


  <div class= "container bg-black bg-opacity-75 mx-auto">
    <div class = "ml-10 mx-auto my-10">
      <h1 class= "text-white tracking-wide font-bold font-mono text-9xl">GOALS &</h1>
      <h1 class= "text-white tracking-wide font-bold font-mono text-9xl">OBJECTIVES</h1>
    </div>
    <div class ="container mx-auto flex px-auto <sm:flow-root">
      <div class = "mx-10 container text-white font-sans text-lg px-auto <sm:px-5">
        <ul class= "list-circle my-10 px-auto <sm:pr-5">
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
        <img class="w-200 h-100 drop-shadow-lg"src = {GO_image} alt=another>
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