<script>
  export let message = "Procedure";
  export let srcImage = "./images/admission_image.png";
</script>


<div class="page-home" style="font-family: 'Catamaran', sans-serif;">
  <div class="bg-cover relative flex flex-wrap ">
    <img class="w-full h-full max-h-screen" src={srcImage} alt="neu_pic" >
    <div class="mr-2 md:mr-10 sm:mr-7 absolute mx-auto centered right-0  max-w-sm text-lg md:text-6xl sm:text-3xl text-white text-right">{message}</div>
  </div>
</div>

<style>
    .centered {
        /* left: 75%; */
      top: 42%;
    }

</style>