<script>
  import Banner from "@/components/admission/Banner.svelte";
  import ProcedureButton from "@/components/admission/ProcedureButton.svelte";
  import Branch from "@/components/admission/Branch.svelte";
  import EventsCards from "@/components/admission/EventsCards.svelte";
  import Header from "@/components/events/Header.svelte";
  import { admissionLinks } from '@/route_data';


  let counter = 0;

  const imgSources = [
    {imgSource: './images/pic_1.png', id: 0},
    {imgSource: './images/pic_1.png', id: 1},
    {imgSource: './images/pic_1.png', id: 2},
    {imgSource: './images/pic_1.png', id: 3},
  ];

  let imageSources = [
    './images/pic_1.png',
    './images/pic_2.png',
    './images/pic_3.png',
    './images/pic_4.png',
    './images/pic_5.png',
  ];

  let information= [
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

</script>
<div class="home mb-20">
  <Banner message={"Events"} srcImage='./images/neu_mainfront.jpg'/>

  <div class="container mx-auto px-4 my-16">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 place-content-center">

      <div class="w-full h-full">
        <div class="w-full h-100 bg-red-300 bg-cover bg-center rounded" style={`background-image: url('./images/neu_mainfront.jpg')`}></div>

        <div class="mt-5 pr-8 max-w-full">
          <h1 class="pb-5 text-3xl font-light text-gray-700 font-gentium font-bold font-italic text-center">
            New Era University Main Campus
          </h1>
          <p class="text-gray-400 font-nunito">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sequi aspernatur voluptatum dicta, tempore provident et fuga commodi quasi neque, exercitationem a ullam pariatur blanditiis! Velit, modi perspiciatis voluptates delectus nihil aliquid reiciendis blanditiis eius dolorem cupiditate, necessitatibus consequuntur officiis ut iusto maiores aut, quo earum? Veniam enim sint ipsum.
          </p>
        </div>
        <div class="mt-8 text-right">
          <ProcedureButton page={`#${admissionLinks[4].path}`} isRounded={false} isBold={false} isSmallRounded={true}>
            More Details
          </ProcedureButton>
        </div>
      </div>

      <div>
        <div class=" grid grid-cols-1 md:grid-cols-2 gap-4">
            {#each imgSources as opt}
              <div class="min-h-75 bg-red-300 group relative cursor-pointer">
                <div class="w-full h-full bg-cover bg-center rounded overflow-hidden shadow-md border-b-4 border-b-primary-900" style={`background-image: url('images/pic_1.png')`}>
                  <div class="w-full h-full bg-gradient-to-t from-primary-400 to-transparent opacity-50 transform transform-scale origin-bottom transition transition-transform group-hover:scale-y-100 scale-y-0"></div>
                </div>
                <div class="absolute -bottom-2 -right-2 w-4/5 min-h-30 bg-white shadow-md p-4 border-right-4 border-right-primary-900 rounded-r transition transition-transform transform transform-scale group-hover:scale-105 origin-bottom-right">
                  <div class="font-gentium font-bold font-italic text-2xl text-dark-700 truncate">
                    Event Title asd asd asd asd asd asd as
                  </div>
                  <div class="text-dark-400 relative leading-6 max-h-18 overflow-hidden">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta reprehenderit iste nihil nam hic!
                    <div class="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                </div>
              </div>
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

  <div class="my-15 mx-60 catamaran">
    <div class="container grid grid-cols-4 mx-auto">
      {#each information as info(info.id)}
        {#if info.id <=1}
          <div class="w-full rounded">
            <img src={info.imgSrc} alt="neu main">
          </div>

          <!-- replace below -->
          <div class="w-full h-full rounded bg-gray-100 overflow-hidden">
            <EventsCards content={info.content}/>
          </div>
          <!-- until here -->
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
  </div>

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
  .main-format {
    height: 45%;
    max-height: 45%;
  }
  .height-sec {
    height: 40%;
    max-height: 40%;

  }

  .height-third {
    height: 80%;
  }

  .catamaran {
        font-family: 'Catamaran', sans-serif;
        /* color: #791616; */
    }
</style>