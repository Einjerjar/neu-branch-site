<script>
  export let title='title'
  export let y_pad = true
</script>

<div class='text-center catamaran {y_pad ? 'my-15' : ''}'>
  <div class="text-gray-700 text-4xl font-gentium capitalize">{title}</div>
</div>


<style>
    .catamaran {
        font-family: 'Catamaran', sans-serif;
        /* color: #791616; */
    }
</style>