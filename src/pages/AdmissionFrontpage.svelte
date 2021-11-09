<script>
  import Cards from "@/components/admission/Cards.svelte";
  import EntryGrade from "@/components/admission/EntryGrade.svelte";
  import { admissionLinks } from '@/route_data'
  import LinksRelated from "@/components/admission/LinksRelated.svelte";

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

<div class="page-home">
  <div class="mx-auto bg-center bg-cover " style="background-image: url('https://neu.edu.ph/main/assets/images/NEU_Pampanga.jpg');">
    <div class="min-h-full mx-auto max-h-full flex  justify-center text-white">
      <div class="items-center my-21">
          <p class="font-sans shadowing text-center text-5xl sm:text-8xl md:text-9xl lg: text-9xl "><a href={'#'+admissionLinks[0].path}><strong>ADMISSION</strong></a></p>
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
    <div class="w-full py-10"><EntryGrade></EntryGrade></div>
  </div>
</div>

<style>
  .shadowing{
    text-shadow: 3px 3px #050505;
  }

</style>