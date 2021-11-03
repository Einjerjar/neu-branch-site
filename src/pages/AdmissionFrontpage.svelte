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
    "https://neu.edu.ph/main/assets/images/posts_images/AntiBullying19.jpg",
    "https://www.neu.edu.ph/main/assets/images/posts_images/44thArenaHS9.jpg",
    "https://www.eaglenews.ph/wp-content/uploads/2017/04/NEU-graduates-480x320.jpg"
  ];

  let information = [
    "This information is about the Basic Education",
    "This information is about the Senior High School",
    "This information is about the Undergraduate",
  ];

</script>


<div class="bg-cover page-home neu-pic">
  <div class="min-h-full mx-auto max-h-full flex  justify-center text-white font-medium">
    <div class="items-center my-21">
        <p class=" font-sans shadowing text-center text-9xl"><a href={'#'+admissionLinks[0].path}><strong>ADMISSION</strong></a></p>
    </div>

  </div>
  <div>
    <div class="items-center flex flex-row justify-center">
      {#each schoolType as st (st.id)}
        <Cards imageSrc={imgSrc[st.id]} schoolType={st.type}>
          <p>{information[st.id]}</p>
        </Cards>
      {/each}


    </div>
  </div>

</div>

<style>

  .neu-pic{
    background-image: url('https://neu.edu.ph/main/assets/images/NEU_Pampanga.jpg');
  }

  .shadowing{
    text-shadow: 2px 2px #050505;
  }





</style>