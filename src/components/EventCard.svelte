<script>
  import { events } from "@/sample_data/events"
  export let event = events.entries[0]
</script>

<div class="offset-sm-1 col-sm-5 p-8 group mb-10 relative">
  <div class="p-2 bg-white rounded-md shadow transform transition duration-300 transition-transform group-hover:scale-105 group-hover:shadow-lg">
    <div class="h-100 w-120 bg-center bg-cover rounded-md" style={`background-image: url(${event.Banner.path});`}></div>
  </div>
  <div class="absolute bottom-0 right-0 border-r-8 border-r-primary-800 w-4/5 bg-white px-4 py-2 min-h-10em flex flex-col rounded-md shadow-lg">
    <div class="pb-4 text-xl font-bold">{event.Title}</div>
    <p class="text-sm text-gray-700 flex-grow">{event.excerpt}</p>
    <a href="#/">Read More</a>
  </div>
</div>