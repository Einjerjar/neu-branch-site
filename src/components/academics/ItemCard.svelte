<script>
  export let data = {
    img: './images/acad/A.png',
    text: 'Undergraduate',
    showMore: true
  }

  console.log(data)
</script>

<div on:click class="cursor-pointer bg-light-800 rounded relative overflow-hidden group transform transform-scale transition transition-scale scale-100 hover:scale-102 hover:shadow-lg hover:bg-light-50">
  <div class="w-full bg-red-500 bg-cover bg-center" style={`aspect-ratio: 1/1; background-image: url(${data.img});`}></div>
  <div class="p-2 flex flex-col justify-between">
    <div class="text-center font-light text-2xl text-primary-900 truncate">
      {data.text}
    </div>
    {#if data.showMore}
      <div class="flex justify-center mt-4">
        <div class="text-center text-gray-800 text-xl mb-4 group-hover:text-primary-500 border-b-2 border-transparent group-hover:border-b-primary-900">
          More
        </div>
      </div>
    {/if}
  </div>
</div>