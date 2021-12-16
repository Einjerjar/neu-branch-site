<script>
  export let data = {
    Label: 'TEST',
    Link: '#/',
    Icon: 'fa-graduation-cap'
  }

  if (data.Link.trim() == '') data.Link = '#/'
</script>

<div class="iconcard-wrapper w-30 md:w-40">
  <a href={data.Link} class="text-center group">
    <div class="iconcard-outer-circle w-23 h-23 md:(w-35 h-35) mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow">
      <div class="iconcard-inner-circle w-20 h-20 md:(w-30 h-30 text-6xl) bg-primary-900 rounded-full flex items-center justify-center text-4xl text-white group-hover:text-3xl md:group-hover:text-5xl transition-all duration-300 ease shadow-lg" >
        <i class={`fas ${data.Icon}`} />
      </div>
    </div>

    <div class="text-primary-900 transition-padding transform text-sm uppercase font-bold pt-4 pb-4 md:text-xl group-hover:pt-0 duration-300 h-12">
      {data.Label}
    </div>
  </a>
</div>
