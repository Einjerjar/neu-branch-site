<script>
  export let onclick = () => {}
</script>

<div class="mt-8 capitalize flex items-center justify-center">
  <button class="border-2 border-primary-800 border-solid text-primary-800 px-4 py-2 inline-block rounded-sm transition transition-colors font-nunito capitalize hover:(text-white border-2 border-solid bg-primary-800)" on:click={onclick}>
    <slot></slot>
  </button>
</div>