<script>
  import { HOST_ROOT } from '@/utils'

  export let article
</script>

<div class="group relative cursor-auto min-h-60">
  <div class="w-full h-60vw max-h-full sm:h-full bg-cover bg-center overflow-hidden shadow-md border-b-4 border-b-primary-900" style='background-image: url({HOST_ROOT}{article.banner.path});' >
    <!-- for background -->
    <div class="w-full h-full bg-gray-900 opacity-90 transform transform-scale origin-bottom transition transition-transform group-hover:scale-y-100 scale-y-0">
      <div class="block w-full h-full flex absolute flex-col p-6 text-white">
        <div class="text-xl font-medium pb-2 truncate">
          {article.title}
        </div>
        <div class="flex-grow font-nutino">
          <p class="text-sm text-ellipsis max-h-4.375em mb-8 leading-5 overflow-hidden">
            {article.excerpt}
          </p>
        </div>
        <a class="bg-transparent hover:bg-white  font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded cursor-pointer" href={'#/events/' + article._id} >
          See more
        </a>
      </div>
    </div>
  </div>
</div>
