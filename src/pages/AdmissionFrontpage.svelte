<script>
  import Cards from "@/components/admission/Cards.svelte";
  import EntryGrade from "@/components/admission/EntryGrade.svelte";
  import { admissionLinks } from '@/route_data';
import { slide } from "svelte/transition";
  // import { procedureLinks } from '@/route_data';


  const schoolType = [
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

<div transition:slide class="page-home">
  <div class="mx-auto relative">
    <div class="absolute -z-1 bg-center bg-cover w-full h-full left-0 top-0" style="background-image: url('https://neu.edu.ph/main/assets/images/NEU_Pampanga.jpg'); filter: grayscale(50%) brightness(50%);"></div>
    <div class="min-h-full mx-auto max-h-full flex  justify-center text-white">
      <div class="items-center my-21">
        <p class="text-6xl md:text-8xl underline font-bold uppercase text-shadow-lg">
          Admission
        </p>
      </div>
    </div>

    <div>
      <div class="flex flex-wrap justify-center mb-8">
        {#each schoolType as st (st.id)}
          <Cards pathChosen={'#'+admissionLinks[st.id].path} imageSrc={imgSrc[st.id]} schoolType={st.type}>
            <p>{information[st.id]}</p>
          </Cards>

        {/each}
      </div>
    </div>


    <a href={`#${admissionLinks[3].path}`}>
      <div class="flex justify-center">
        <div class="p-1 bg-primary-100 bg-opacity-0 border-2 border-primary-200 px-6 py-2 text-primary-200 text-2xl rounded-md cursor-pointer hover:bg-primary-900 hover:text-white hover:border-opacity-0 transition-colors">
          Admission Procedures
        </div>
      </div>
    </a>
    <div class="w-full py-10"><EntryGrade></EntryGrade></div>
  </div>
</div>

<style>
  .shadowing{
    text-shadow: 3px 3px #050505;
  }

</style>