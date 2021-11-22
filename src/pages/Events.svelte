<script>
  import Banner from "@/components/admission/Banner.svelte";
  import ProcedureButton from "@/components/admission/ProcedureButton.svelte";
  import Branch from "@/components/admission/Branch.svelte";
  import EventsCards from "@/components/admission/EventsCards.svelte";
  import Header from "@/components/events/Header.svelte";

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

  <div class="mt-15 mb-2 mx-60 catamaran overflow-hidden">
    <div class="grid grid-cols-2 gap-5 place-content-center">

      <div class="max-w-full max-h-ful w-full h-full">
        <div class="main-format bg-contain relative flex flex-wrap">
          <img class='max-w-full max-h-full object-cover' src="./images/neu_mainfront.jpg" alt="neu main"/>
        </div>

        <div class="mt-5 pr-8 max-w-full max-h-full">
          <h1 class="pb-5 text-3xl font-light text-gray-700 uppercase">New Era University Main Campus</h1>
          <p class=" text-sm text-gray-600 pb-7">Loremtus, ve ipsum dolor sit amet consectetur, adipisicing elit. Id t. Id masddddddatae dolocupicidunt inventore, doloremque iste eligendi sed dignissimos cupiditatsddddddatae dolorasdadadume quis a aliquidasdadasd magni veniam esse, naritatis at. Alias.</p>

        </div>
      </div>

      <div>
        <div class=" grid grid-cols-2 overflow-hidden">

            {#each imgSources as opt}
              <div><img src="./images/pic_1.png" alt="Italian Trulli"></div>
            {/each}
        </div>
      </div>

    </div>
  </div>

  <div class="mb-20 mt-6 mx-60 grid grid-cols-2 place-content-center">
    <div>
      <ProcedureButton message={'MORE DETAILS'} page={'#/'} isRounded={false} isBold={false} isSmallRounded={true}/>
    </div>
    <div>
      <ProcedureButton message={'MORE DETAILS'} page={'#/'} isRounded={false} isBold={false} isSmallRounded={true}/>
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
    <div>
      <ProcedureButton message={"ALL PROJECT"} widthWide={true} isFullWidth={true} isSmallRounded={true} isRounded={false}></ProcedureButton>
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