<script>
  import { HOST_ROOT } from '@/utils'

  export let article
</script>

<div class="container mx-auto block">
  <div class="flex w-full h-full space-x-4">
    <div class="w-2/5 max-w-80">
      <a href={'#/events/' + article._id} class="block h-full">
        <img src={HOST_ROOT + article.banner.path} alt="pp" class="w-full h-full max-h-40 object-cover" />
      </a>
    </div>
    <div class="w-3/5">
      <h3 class="text-base md:text-lg lg:text-xl font-semibold hover:(underline underline-primary-900)">
        <a href={'#/events/' + article._id}>{article.title}</a>
      </h3>
      <p class="hidden lg:block">{article.excerpt}</p>
    </div>
  </div>
</div>
