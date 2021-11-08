<script>
  import Cards from "@/components/admission/Cards.svelte";
  import { admissionLinks } from '@/route_data'
  let schoolType = [
    {type: "Basic Education", id: 0},
    {type: "Senior High School", id: 1},
    {type: "Undergraduate", id: 2}
  ];
  let ctr = 0;

  let imgSrc= [
    "https://www.neu.edu.ph/main/assets/images/posts_images/ElemGrad199.jpg",
    "https://www.neu.edu.ph/main/assets/images/posts_images/44thArenaHS9.jpg",
    "https://www.eaglenews.ph/wp-content/uploads/2017/04/NEU-graduates-480x320.jpg",
    "https://www.eaglenews.ph/wp-content/uploads/2017/04/NEU-graduates-480x320.jpg"
  ];

  let information = [
    "This information is about the Basic Education",
    "This information is about the Senior High School",
    "This information is about the Undergraduate",
  ];

</script>


<div class="bg-cover page-home neu-pic">
  <div class="min-h-full mx-auto max-h-full flex  justify-center text-white font-medium ">
    <div class="items-center my-21">
        <p class="font-sans shadowing text-center text-9xl"><a href={'#'+admissionLinks[0].path}><strong>ADMISSION</strong></a></p>
    </div>

  </div>
  <div>
    <div class="flex flex-wrap justify-center mb-8">
      {#each schoolType as st (st.id)}
        <Cards imageSrc={imgSrc[st.id]} schoolType={st.type}>
          <p>{information[st.id]}</p>
        </Cards>
      {/each}
    </div>
  </div>

  <div class="w-full py-10">
    <div class="container bg-white px-8 py-6 mx-auto max-h-full flex justify-center rounded-md shadow-lg" style="font-family: 'Rokkitt', serif;">
      <div class="items-center">
        <p class=" text-center text-6xl pb-10 " style="color: #791616;">Entry Grade Admission Requirements</p>

        <div class="text-center text-4xl">
          <div class="text-left inline-block">


            <ul>
              <li class="pb-5"><strong>83</strong> Integrated School (K-12 Education)</li>
              <li class="pb-5"><strong>85</strong> Tertiary Level</li>
              <li class="pb-5"><strong>2.25</strong>Weighted average for transferees to the tertiary level</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

<style>

  .neu-pic{
    background-image: url('https://neu.edu.ph/main/assets/images/NEU_Pampanga.jpg');
  }

  .shadowing{
    text-shadow: 3px 3px #050505;
  }

  .entry{
    font-family: Rokkitt;
    font-style: normal;
    /* or 200% */
    color: #791616;
  }




</style>