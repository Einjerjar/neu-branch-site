<!-- 
  nicolas TODO
  * add featured embedded videos section from neu youtube page
 -->
<script>
  import {push} from 'svelte-spa-router'
  import Banner from "@/components/admission/Banner.svelte";
  import ProcedureButton from "@/components/admission/ProcedureButton.svelte";
  import Branch from "@/components/admission/Branch.svelte";
  import EventsCards from "@/components/admission/EventsCards.svelte";
  import Header from "@/components/events/Header.svelte";
  import CardHover from "@/components/events/CardHover.svelte";
  import { admissionLinks } from '@/route_data';
  import { events } from '@/sample_data/events';
  import {re_param} from '@/utils'

  
  const imgSources = [
    {
      imgSource: 'images/pic_1.PNG',
      eventTitle: 'SENPAI',
      eventContent: '4th year Computer Science students will share their knowledge, and will give some tips on how to become a better programmer',
      id: 0},
    {
      imgSource: 'images/pic_2.PNG',
      eventTitle: 'Story Telling',
      eventContent: 'Wella the Worrier Story telling with Prof. Sally M. Lopez as the speaker.',
      id: 1},
    {
      imgSource: 'images/pic_3.PNG',
      eventTitle: 'PAtalk',
      eventContent: 'The New Era Public Administration Society (NEPAS) will conduct a “PAtalk: A Webinar on COVID-19 and Vaccination Response of Quezon City Local Government”',
      id: 2},
    {
      imgSource: 'images/pic_4.PNG',
      eventTitle: 'Technology Week',
      eventContent: 'New Era University joins the celebration of National Science & Technology Week',
      id: 3},
      {
      imgSource: 'images/pic_1.PNG',
      eventTitle: 'SENPAI',
      eventContent: '4th year Computer Science students will share their knowledge, and will give some tips on how to become a better programmer',
      id: 4},
    {
      imgSource: 'images/pic_1.PNG',
      eventTitle: 'Story Telling',
      eventContent: 'Wella the Worrier Story telling with Prof. Sally M. Lopez as the speaker.',
      id: 5},
    {
      imgSource: 'images/pic_1.PNG',
      eventTitle: 'PAtalk',
      eventContent: 'The New Era Public Administration Society (NEPAS) will conduct a “PAtalk: A Webinar on COVID-19 and Vaccination Response of Quezon City Local Government”',
      id: 6},
    {
      imgSource: './images/pic_9.jpg',
      eventTitle: 'Technology Week',
      eventContent: 'New Era University joins the celebration of National Science & Technology Week',
      id: 7},
  ];

  let imageSources = [
    '@/images/pic_1.png',
    '@/images/pic_2.png',
    '@/images/pic_3.png',
    '@/images/pic_4.png',
    '/images/pic_5.png',
  ];



  let ourEventsInformation= [
    {content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, eligendi facilis quis fuga, commodi omnis quidem ',
    imgSrc: './images/pic_1.png',
    id: 0},
    {content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, eligendi facilis quis fuga, commodi omnis quidem',
    imgSrc: './images/pic_2.png',
    id: 1},
    {content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, eligendi facilis quis fuga, commodi omnis quidem',
    imgSrc: './images/pic_3.png',
    id: 3},
    {content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, eligendi facilis quis fuga, commodi omnis quidem',
    imgSrc: './images/pic_4.png',
    id: 4},
  ];
  const branchInfo = {branchName:'General Santos City', imgSource:'./images/NEU_GENSAN.png', id:1};
  const neuMainSrc = './images/neu_mainfront.jpg';
  const neuMainSrcContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sequi aspernatur voluptatum dicta, tempore provident et fuga commodi quasi neque, exercitationem a ullam pariatur blanditiis! Velit, modi perspiciatis voluptates delectus nihil aliquid reiciendis blanditiis eius dolorem cupiditate, necessitatibus consequuntur officiis ut iusto maiores aut, quo earum? Veniam enim sint ipsum.'

  const MAX_SUB_POST = 4;
let currentEItems = 4
let currentAItems = 4
let a_event_data = async() => {
  let f = await fetch(re_param('collections/get/News', {
    
    'filter[Type]': 'Events'
  }))
  let j = await f.json()
  console.log('event', j)
  return j || events
}

let a_announce_data = async() => {
  let f = await fetch(re_param('collections/get/News', {
   
    'filter[Type]': 'Announcement'
  }))
  let j = await f.json()
  console.log('announcement', j)
  return j || events
}

</script>
<div class="home mb-20">
  <Banner message={"Events"} srcImage='./images/neu_mainfront.jpg'/>

  <!-- four pictures with New Era Main Campus -->
  <div class="container mx-auto px-20 my-16">
    <Header title={"Featured"}/>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 place-content-center">
      <div class="w-full h-full">
        <div class="w-full h-[60vw] max-h-100 bg-red-300 bg-cover bg-center rounded"
             style={`background-image: url(${neuMainSrc})`}>
        </div>
        <div class="mt-5 pr-8 max-w-full">
          <!-- <CardHover/> -->
          <h1 class="pb-5 text-[6vw] sm:text-4xl font-light text-gray-700 font-gentium font-bold font-italic text-center">
            New Era University Main Campus
          </h1>
          <p class="text-gray-400 text-[3vw] sm:text-base font-nunito">
            {neuMainSrcContent}
          </p>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
          {#await a_event_data()}
            loading
          {:then e_data} 
          {#each e_data.entries.slice(0,4) as event }
          <div class="min-h-75 group relative cursor-pointer" >
            <div class="w-full h-[60vw] max-h-full sm:h-full bg-cover bg-center overflow-hidden shadow-md border-b-4 border-b-primary-900" style={`background-image: url(${event.Banner.path});`}
                 >
              <!-- for background -->
              <div class="w-full h-full bg-gradient-to-t from-black to-transparent opacity-100 transform transform-scale origin-bottom transition transition-transform group-hover:scale-y-100 scale-y-0">

                <div class=" absolute  justify-center items-center m-7 text-white ">
                  <h2 class="object-center text-xl font-medium pb-2">{event.Title}</h2>
                  <p class="pb-4 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt error neque nam delectus nisi. Quos, reiciendis inventore sed dolor id commodi.</p>

                  <a class="bg-transparent hover:bg-white  font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded" href={'#/events/'+event._id}>
                    See more
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/each}
          {/await}
        </div>
      </div>

    </div>
  </div>
  <div>
    <Branch branchImage={branchInfo.imgSource} branchName={branchInfo.branchName}></Branch>
  </div>
  <div class="container mx-auto">
    <!-- Events Section -->
    <Header title={"Our Events"}/>
    <div class="my-15 catamaran">
      
        {#await a_event_data()}
          loading
        {:then e_data} 
      <div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {#each e_data.entries.slice(0,currentEItems) as event }
        <div class="min-h-75 group relative cursor-pointer" >
          <div class="w-full h-[60vw] max-h-full sm:h-full bg-cover bg-center overflow-hidden shadow-md border-b-4 border-b-primary-900" style={`background-image: url(${event.Banner.path});`}
               >
            <!-- for background -->
            <div class="w-full h-full bg-gradient-to-t from-black to-transparent opacity-100 transform transform-scale origin-bottom transition transition-transform group-hover:scale-y-100 scale-y-0">

              <div class=" absolute  justify-center items-center m-7 text-white ">
                <h2 class="object-center text-xl font-medium pb-2">{event.Title}</h2>
                <p class="pb-4 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt error neque nam delectus nisi. Quos, reiciendis inventore sed dolor id commodi.</p>

                <a class="bg-transparent hover:bg-white  font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded" href={'#/events/'+event._id}>
                  See more
                </a>
              </div>
            </div>
          </div>
        </div>
        {/each}
      </div>
        {#if currentEItems < e_data.entries.length}
          <div class="mt-8 capitalize flex items-center justify-center">
            <button class="border-2 border-primary-800 border-solid text-primary-800 px-4 py-2 inline-block rounded-sm transition transition-colors font-nunito capitalize hover:(text-white border-2 border-solid bg-primary-800)" on:click={() => currentEItems += 4}>
              load more events
            </button>
          </div>
        {/if}
        {/await}
    </div>
    <!-- Announcement Section -->
    <Header title={"Latest Articles"}/>
      {#await a_announce_data()}
        loading
      {:then a_data} 
      <div class="grid md:grid-cols-2 gap-4">
        {#each a_data.entries.slice(0,currentAItems) as a_data}
          <div class="flex w-full space-x-4">
            <div class="w-2/5">
              <a href={'#/events/'+a_data._id}>
                <img src={a_data.Banner.path} alt="pp" class="w-full h-full max-w-80 max-h-40 object-cover">
              </a>
            </div>
            <div class="w-3/5">
              <h3 class="text-base md:text-lg lg:text-xl font-semibold hover:(underline underline-primary-900)">
                <a href={'#/events/'+a_data._id}>{a_data.Title}</a>
              </h3>
              <p class="hidden lg:block">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, voluptatum.</p>
            </div>
          </div>
        {/each}
      </div>
        {#if currentAItems < a_data.entries.length}
          <div class="mt-8 capitalize flex items-center justify-center">
            <button class="border-2 border-primary-800 border-solid text-primary-800 px-4 py-2 inline-block rounded-sm transition transition-colors font-nunito capitalize hover:(text-white border-2 border-solid bg-primary-800)" on:click={() => currentAItems += 4}>
              load more articles
            </button>
          </div>
        {/if}
      {/await}
  </div>
</div>
<style>

/*
-remove the classes below if you have the 'group-hover'property added in your tailwind config file
-also remove the class from the html template
*/

  .catamaran {
    font-family: 'Catamaran', sans-serif;
        /* color: #791616; */
  }
</style>