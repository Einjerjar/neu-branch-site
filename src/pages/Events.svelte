<script>
  import Banner from "@/components/admission/Banner.svelte";
  import ProcedureButton from "@/components/admission/ProcedureButton.svelte";
  import Branch from "@/components/admission/Branch.svelte";
  import EventsCards from "@/components/admission/EventsCards.svelte";
  import Header from "@/components/events/Header.svelte";
  import CardHover from "@/components/events/CardHover.svelte";
  import { admissionLinks } from '@/route_data';

  const imgSources = [
    {
      imgSource: './images/pic_6.jpg',
      eventTitle: 'SENPAI',
      eventContent: '4th year Computer Science students will share their knowledge, and will give some tips on how to become a better programmer',
      id: 0},
    {
      imgSource: './images/pic_7.jpg',
      eventTitle: 'Story Telling',
      eventContent: 'Wella the Worrier Story telling with Prof. Sally M. Lopez as the speaker.',
      id: 1},
    {
      imgSource: './images/pic_8.jpg',
      eventTitle: 'PAtalk',
      eventContent: 'The New Era Public Administration Society (NEPAS) will conduct a “PAtalk: A Webinar on COVID-19 and Vaccination Response of Quezon City Local Government”',
      id: 2},
    {
      imgSource: './images/pic_9.jpg',
      eventTitle: 'Technology Week',
      eventContent: 'New Era University joins the celebration of National Science & Technology Week',
      id: 3},
      {
      imgSource: './images/pic_6.jpg',
      eventTitle: 'SENPAI',
      eventContent: '4th year Computer Science students will share their knowledge, and will give some tips on how to become a better programmer',
      id: 4},
    {
      imgSource: './images/pic_7.jpg',
      eventTitle: 'Story Telling',
      eventContent: 'Wella the Worrier Story telling with Prof. Sally M. Lopez as the speaker.',
      id: 5},
    {
      imgSource: './images/pic_8.jpg',
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
    './images/pic_1.png',
    './images/pic_2.png',
    './images/pic_3.png',
    './images/pic_4.png',
    './images/pic_5.png',
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

</script>
<div class="home mb-20">
  <Banner message={"Events"} srcImage='./images/neu_mainfront.jpg'/>

  <!-- four pictures with New Era Main Campus -->
  <div class="container mx-auto px-20 my-16">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 place-content-center">

      <div class="w-full h-full">
        <div class="w-full h-100 bg-red-300 bg-cover bg-center rounded"
             style={`background-image: url(${neuMainSrc})`}>
        </div>

        <div class="mt-5 pr-8 max-w-full">
          <!-- <CardHover/> -->
          <h1 class="pb-5 text-3xl font-light text-gray-700 font-gentium font-bold font-italic text-center">
            New Era University Main Campus
          </h1>
          <p class="text-gray-400 font-nunito">
            {neuMainSrcContent}
          </p>
        </div>
        <div class="mt-8 text-right">
          <ProcedureButton page={`#${admissionLinks[4].path}`} isRounded={false} isBold={false} isSmallRounded={true}>
            More Details
          </ProcedureButton>
        </div>
      </div>



      <div>
        <div class=" grid grid-cols-1 md:grid-cols-2">
            {#each imgSources as opt (opt.id)}
            {#if opt.id < 4 }
              <div class="min-h-75 bg-red-300 group relative cursor-pointer">

                <div class="w-full h-full bg-cover bg-center overflow-hidden shadow-md border-b-4 border-b-primary-900"
                     style={`background-image: url(${imgSources[opt.id].imgSource})`}>

                  <!-- for background -->
                  <div class="w-full h-full bg-gradient-to-t from-black to-transparent opacity-100 transform transform-scale origin-bottom transition transition-transform group-hover:scale-y-100 scale-y-0">

                    <div class=" absolute  justify-center items-center m-7 text-white ">
                      <h2 class="object-center text-4xl font-medium pb-4">{imgSources[opt.id].eventTitle}</h2>
                      <p class="pb-4">{imgSources[opt.id].eventContent}</p>

                      <button class="bg-transparent hover:bg-white  font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded">
                        See more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/if}
            {/each}
        </div>
        <div class="mt-8 text-right">
          <ProcedureButton page={`#${admissionLinks[4].path}`} isRounded={false} isBold={false} isSmallRounded={true}>
            More Details
          </ProcedureButton>
        </div>
      </div>

    </div>
  </div>


  <div>
    <Branch branchImage={branchInfo.imgSource} branchName={branchInfo.branchName}></Branch>
  </div>

  <Header title={"Our Events"}/>



  <!-- edit here please -->
  <!-- <div class="my-15 mx-60 catamaran">
    <div class="container grid grid-cols-4 mx-auto">
      {#each ourEventsInformation as info(info.id)}
        {#if info.id <=1}
          <div class="w-full rounded">
            <img src={info.imgSrc} alt="neu main">
          </div>

          <div class="w-full h-full rounded bg-gray-100 overflow-hidden">
            <EventsCards content={info.content}/>
          </div>
        {:else if info.id > 1}
          <div class="w-full rounded bg-gray-100">
            <EventsCards content={info.content}/>
          </div>
          <div class="w-full rounded">
            <img src={info.imgSrc} alt="neu main">
          </div>
        {/if}
      {/each}
    </div>
    <div class="mt-4">
      <ProcedureButton widthWide={true} isFullWidth={true} isSmallRounded={true} isRounded={false} isBold={false}>
        All Projects
      </ProcedureButton>
    </div>
  </div> -->


  <div class="my-15 mx-60 catamaran">
    <div class=" grid grid-cols-4 md:grid-cols-4 gap-2">
      {#each imgSources as opt (opt.id)}
        <div class="min-h-75 bg-red-300 group relative cursor-pointer">

          <div class="w-full h-full bg-cover bg-center overflow-hidden shadow-md border-b-4 border-b-primary-900"
              style={`background-image: url(${imgSources[opt.id].imgSource})`}>

            <!-- for background -->
            <div class="w-full h-full bg-gradient-to-t from-black to-transparent opacity-100 transform transform-scale origin-bottom transition transition-transform group-hover:scale-y-100 scale-y-0">

              <div class=" absolute  justify-center items-center m-7 text-white ">
                <h2 class="object-center text-4xl font-medium pb-4">{imgSources[opt.id].eventTitle}</h2>
                <p class="pb-4">{imgSources[opt.id].eventContent}</p>

                <button class="bg-transparent hover:bg-white  font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded">
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
    <div class="mt-4">
      <ProcedureButton widthWide={true} isFullWidth={true} isSmallRounded={true} isRounded={false} isBold={false}>
        All Projects
      </ProcedureButton>
    </div>
  </div>

  <!-- until here please -->




 <div class="bg-gray-100 py-0.5">
  <Header title={"Latest Articles"}/>

  <div class="grid grid-cols-5">
    {#each imageSources as img}
      <div>
        <img src={img} alt="neu main">
      </div>
    {/each}
  </div>
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