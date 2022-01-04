<script>
  export let data = { date: '2009-11-10' }
  const date = new Date(data.date) // 2009-11-10
  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'long' })
</script>

<div class="flex border-1 border-primary-900">
  <div class="bg-primary-900 text-white p-4 flex items-center justify-center text-center">
    <div class="">
      <p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold tracking-wider">{day}</p>
      <p class="text-base sm:text-xl">{month}</p>
    </div>
  </div>
  <div class="p-4 text-sm md:text-base">
    {data.description}
  </div>
</div>
