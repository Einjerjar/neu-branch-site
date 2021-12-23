<script>
  import { onMount } from 'svelte'
  import { branch_data } from '@/store'
  import { branch_data as bd } from '@/sample_data/branch_data'
  import { HOST_ROOT } from '@/utils'

  let video

  // fallback to sample data
  $: video_path = $branch_data.homepage_video?.path || bd.homepage_video.path

  onMount(() => {
    video.src = `${HOST_ROOT}/cockpit/storage/uploads${video_path}`
    video.load()
  })
</script>

<div class="cmp-videoheader h-50vh relative w-full">
  <video
    playsinline
    autoplay
    loop
    muted
    class="w-screen h-full object-cover absolute -z-2"
    bind:this={video}
  >
  <!-- <source src='{HOST_ROOT + '/cockpit/storage/uploads' + $branch_data.homepage_video.path}' type="video/mp4" /> -->
</video>
  <div class="absolute w-full h-full -z-1 bg-gray-800 opacity-20" />
  <div class="w-full h-full flex items-center">
    <div class="w-full flex flex-col items-center text-white ">
      <div class="font-light text-3xl md:text-6xl mb-2 font-bold">
        CAMPUS AERIAL SHOT
      </div>
    </div>
  </div>
</div>
