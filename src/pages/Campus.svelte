<script>
  import Divider from "@/components/Divider.svelte";
  import MVP from "@/components/campus/mvp.svelte"

  const descr = "New era University openede its New Era University - General Santos City Brancj in June 1994, at first offereing the Prescgool Eduycation Program. \
                 Elementary and secondaty edu Education Programs were opened soon after. It was on June 5, 1998, \
                when the new school building situated in a half-hectare land \
                area was inaugurated. The school is now fully equipped to implement \
                the K to 12 program with Senior High School. NEU – GSC marked \
                another significant event of its history in March 2018 upo2xl\
                receiving Government Recognition for the Bachelor of Science \
                courses: Real Estate Management, Entrepreneurship, Accounting \
                Technology, and Accountancy.";


const mission = "Provide quality education anchored on Christian values with the prime purpose of bringing honor and glory to God."
const vision = "A world-class Institution of learning with a unique Christian culture of excellence, discipline, and service to humanity."
const philo = "Godliness is the foundation of knowledge."

const missionTitle = "MISSION"
const visionTitle = "VISION"
const philoTitle = "PHILOSOPHY"

</script>

<div class="page-home bb-gg my-auto pb-20">
  <div class = "container bg-cyan-600 bg-opacity-75 mx-auto flex shadow-2xl my-20 <sm:flow-root">
    <div class = "w-1/2 px-4 py-4 justify-center my-10 pt-10 <md:w-screen">
      <img class = "shadow-2xl justify-center mx-auto"src = /images/NEU_Pampanga.jpg alt = campusImage >
      <p class = "text-center font-mono text-white">
        {descr}
      </p>
    </div>
    <div class="grid-cols-1 w-1/2 my-10 pt-10 pl-10 mx-auto">
      <img class= "sm:w-full h-full <sm:w-screen h-auto"src =/images/half.png alt = ph>
      <button class = "sm:relative bottom-30 left-65 right-1/2 mx-auto bg-black text-white rounded-xl h-15 w-60 text-4xl <sm: left-10 " type="button">Get Direction </button>
    </div>
  </div>

  <Divider/>

  <div class="container bg-white bg-opacity-75 mx-auto shadow-lg">
    <div class= "flex justify-center mx-auto">
      <div class= "inline-flex mx-auto pt-10">
        <img class="mx-auto h-auto w-auto" src = /logo.png alt=logo> 
        <h1 class = "text-center pl-10 pt-10 text-black tracking-wide font-bold font-mono text-6xl text-shadow-lg">NEW ERA UNIVERSITY</h1>
      </div>
    </div>
    <div class = "container flex justify-center my-10">
      <MVP title = {missionTitle} desc = {mission}/>
      <MVP title = {philoTitle} desc = {philo}/>
      <MVP title = {visionTitle} desc = {vision}/>
    </div>
  </div>

  <Divider/>


  <div class= "container bg-black bg-opacity-75 mx-auto">
    <div class = "ml-10 mx-auto my-10">
      <h1 class= "text-white tracking-wide font-bold font-mono text-9xl">GOALS &</h1>
      <h1 class= "text-white tracking-wide font-bold font-mono text-9xl">OBJECTIVES</h1>
    </div>
    <div class ="container mx-auto flex">
      <div class = "mx-10 container text-white font-sans text-lg">
        <ul class= "list-circle my-10">
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
        <img class="w-200 h-100 drop-shadow-lg"src = /logo.png alt=another>
      </div>
    </div>
  </div>
  <div></div>
</div>



<style>
  .bb-gg{
    background-image: url('./images/ABOUT_RED.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

</style>