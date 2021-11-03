<script>
import Divider from "@/components/Divider.svelte";
import NewsTicker from "@/components/NewsTicker.svelte";
import Slider from "@/components/Slider.svelte";
import Cards from "@/components/admission/Cards.svelte";

//images for announcement
let imgSrc= [
    "https://neu.edu.ph/main/assets/images/posts_images/AntiBullying19.jpg",
    "https://www.neu.edu.ph/main/assets/images/posts_images/44thArenaHS9.jpg",
    "https://www.eaglenews.ph/wp-content/uploads/2017/04/NEU-graduates-480x320.jpg"

  ];

  let information = [
    "This information is about the Basic Education Announcements",
    "This information is about the SHS Announcements",
    "This information is about the Undergraduate Announcements",
  ];

  let announcementType = [
    {type: "Basic Education Announcement", id: 0},
    {type: "Senior High School Announcement", id: 1},
    {type: "Undergraduate Announcement", id: 2}
  ];

</script>
<div>
    <NewsTicker/>
    <div class="container mx-auto">
        <Slider/>
        <Divider/>
        <div class="bg-primary-900 text-white h-20 text-4xl uppercase flex items-center justify-center">
            <p>events</p>      
        </div>
        <Divider/>
        <Slider/>
        <Divider/>
        <div class="bg-primary-900 text-white h-20 text-4xl uppercase flex items-center justify-center">
            <p>announcement</p>      
        </div>

        <div class="items-center flex flex-row justify-center">
            {#each announcementType as at (at.id)}
              <Cards imageSrc={imgSrc[at.id]} schoolType={at.type}>
                <p class="text-center">{information[at.id]}</p>
              </Cards>
            {/each}
          </div>
          <Slider/>

    </div>
</div>

