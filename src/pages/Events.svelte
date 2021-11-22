<script>
  import { admissionLinks } from "@/route_data";
  import Banner from "@/components/admission/Banner.svelte";
  import ProcedureButton from "@/components/admission/ProcedureButton.svelte";


</script>

<Banner message={"Events"} srcImage='./images/neu_mainfront.jpg'/>
<div class="my-15 mx-60 catamaran">
  <div class="grid grid-cols-2 gap-5 place-content-center">
    <div class="w-full h-full">
      <img class='main-format object-cover' src="./images/neu_mainfront.jpg" alt="neu main">
      <div class="mt-5 pr-8 height-sec ">
        <h1 class="pb-3 text-2xl font-light text-gray-700 uppercase">New Era University Main Campus</h1>
        <p class=" text-sm text-gray-600 pb-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id minus beatae dolorum incidunt inventore, doloremque iste eligendi sed dignissimos cupiditate quis a aliquid magni veniam esse, natus, veritatis at. Alias.</p>
        <!-- object-bottom	 -->

        <div class="float-left">
          <ProcedureButton message={'MORE DETAILS'} page={`#${admissionLinks[4].path}`} isRounded={false} isBold={false} isSmallRounded={true}/>
        </div>

      </div>

    </div>

    <div>

      <div class=" height-third grid grid-cols-2 overflow-hidden">

          <div><img src="./images/pic_1.png" alt="Italian Trulli"></div>
          <div><img src="./images/pic_1.png" alt="Italian Trulli"></div>
          <div><img src="./images/pic_1.png" alt="Italian Trulli"></div>
          <div><img src="./images/pic_1.png" alt="Italian Trulli"></div>
      </div>
      <div class="float-right pd mt-6">
        <ProcedureButton message={'MORE DETAILS'} page={'#/'} isRounded={false} isBold={false} isSmallRounded={true}/>
      </div>
    </div>


  </div>
</div>

<div>
  <img class='main-format object-cover' src="./images/NEU_GENSAN.png" alt="neu main">
</div>

<div class="my-15 mx-60 catamaran">
  <div class="container grid grid-cols-4 mx-auto">
    <div class="w-full rounded">
        <img src="./images/pic_1.png" alt="neu main">
    </div>
    <div class="w-full rounded">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, eligendi facilis quis fuga, commodi omnis quidem quam unde odio in recusandae eaque sapiente libero sed aliquid. Vel odio fugit dolore?</p>
    </div>
    <div class="w-full rounded">
      <img src="./images/pic_2.png" alt="neu main">
    </div>
    <div class="w-full rounded">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, eligendi facilis quis fuga, commodi omnis quidem quam unde odio in recusandae eaque sapiente libero sed aliquid. Vel odio fugit dolore?</p>
    </div>
    <div class="w-full rounded">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, eligendi facilis quis fuga, commodi omnis quidem quam unde odio in recusandae eaque sapiente libero sed aliquid. Vel odio fugit dolore?</p>
    </div>
    <div class="w-full rounded">
      <img src="./images/pic_3.png" alt="neu main">
    </div>
    <div class="w-full rounded">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, eligendi facilis quis fuga, commodi omnis quidem quam unde odio in recusandae eaque sapiente libero sed aliquid. Vel odio fugit dolore?</p>
  </div>
  <div class="w-full rounded">
    <img src="./images/pic_4.png" alt="neu main">
</div>
</div>
</div>


<style>
  .main-format {
    height: 55%;
  }
  .height-sec {
    height: 25%;
  }

  .height-third {
    height: 80%;
  }

  .catamaran {
        font-family: 'Catamaran', sans-serif;
        /* color: #791616; */
    }
</style>