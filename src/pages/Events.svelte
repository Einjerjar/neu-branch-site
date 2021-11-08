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

let sample_event_data = [
  {
    img: 'https://www.neu.edu.ph/main/assets/images/posts_images/44thArenaHS9.jpg',
    title: 'Random Event',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptatum fuga nam at vitae dicta, praesentium illo commodi iusto reprehenderit inventore architecto nisi! Ipsam asperiores harum aperiam odit molestias officiis.'
  },
  {
    img: 'https://www.neu.edu.ph/main/assets/images/posts_images/44thArenaHS9.jpg',
    title: 'Random Event',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptatum fuga nam at vitae dicta, praesentium illo commodi iusto reprehenderit inventore architecto nisi! Ipsam asperiores harum aperiam odit molestias officiis.'
  },
  {
    img: 'https://www.neu.edu.ph/main/assets/images/posts_images/44thArenaHS9.jpg',
    title: 'Random Event',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptatum fuga nam at vitae dicta, praesentium illo commodi iusto reprehenderit inventore architecto nisi! Ipsam asperiores harum aperiam odit molestias officiis.'
  },
  {
    img: 'https://www.neu.edu.ph/main/assets/images/posts_images/44thArenaHS9.jpg',
    title: 'Random Event',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptatum fuga nam at vitae dicta, praesentium illo commodi iusto reprehenderit inventore architecto nisi! Ipsam asperiores harum aperiam odit molestias officiis.'
  }
]

</script>
<div>
    <NewsTicker/>
    <div class="container mx-auto">
      <Slider/>
    </div>
    <Divider/>
    <div class="bg-primary-900 text-white h-20 text-4xl uppercase flex items-center justify-center">
      <p>announcement</p>
    </div>
    <Divider/>
    <div class="container mx-auto">
      <Slider/>
    </div>
    <Divider/>
    <div class="bg-primary-900 text-white h-20 text-4xl uppercase flex items-center justify-center">
      <p>events</p>
    </div>
    <Divider/>
    <div class="container mx-auto">
<!--Event Section Start-->

      <div class="container cursor-pointer event items-center flex flex-wrap justify-center">
        {#each sample_event_data as event}
          <div class="offset-sm-1 col-sm-5 p-8 group mb-10">
            <div class="p-2 bg-white rounded-md shadow transform transition duration-300 transition-transform group-hover:scale-105 group-hover:shadow-lg">
              <div class="h-100 w-120 bg-center bg-cover" style={`background-image: url(${event.img});`}></div>
            </div>
            <div class="event-content box-style">
              <h4>Event 1</h4>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita nostrum neque voluptatem?Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span><br>
                <a href="#/">join</a>
            </div>
          </div>
        {/each}
      </div>
      <Slider></Slider>
    </div>

</div>


<!--EVENT SECTION START-->
<style>
/* .event{
  margin: 200px auto;
} */

.event-content{
  box-shadow: 10px 10px 10px -10px rgba(0, 0, 0, 0.3),
  inset 10px 10px 10px -10px
  rgba(0, 0, 0, 0.5);
  padding: 10px;
  background: #fff !important;
  margin-top: -70px !important;
  margin-left: 20px !important;
  position: absolute;
}

.event-content h4{
  font-weight: bold;
  font-style: italic;
  font-size: 20px;
  margin-bottom: 5px;
}

.event-content span{
  font-style: italic;
  font-size: 15px;
}

.event-content a{
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 10px !important;
}

.event img{
  transition: 0.6s;
}

.event img:hover{
  transform: scale(1.1);
  cursor: pointer;
}
.event .col-sm-5{
  /* margin-bottom: 200px !important; */
}

.picture-style{
  height: 500px;
  width: 500px;
}

.box-style{
  height: 150px;
  width: 500px;
}


</style>
