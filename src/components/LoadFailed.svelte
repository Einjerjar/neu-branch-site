<script>
  import { createEventDispatcher } from 'svelte'
  import Button from './events/Button.svelte'

  export let btn_class_extra = ''
  export let text_class_extra = ''

  const dispatch = createEventDispatcher()

  const doRetry = () => {
    dispatch('retry')
  }
</script>

<div class="w-full flex flex-col justify-center items-center my-6 {clazz}">
  <div class="text-primary-900 font-bold text-2xl {text_class_extra}">
    <slot>
      Loading Failed!
    </slot>
  </div>
  <Button on:click={doRetry} class="!mt-4 {btn_class_extra}">
    Retry
  </Button>
</div>