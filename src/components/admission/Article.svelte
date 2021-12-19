<script>
  import MediumHeader from '@/components/admission/MediumHeader.svelte'
  export let title
</script>

<div class="min-h-full mx-auto max-h-full flex flex-wrap justify-start text-primary-900 ">
  <div class="items-center mb-5 text-left text-black mb-5 ">
      <MediumHeader midTitle={title}/>
        <slot></slot>
  </div>
</div>