<script>
  export let icon_class_extra = ''
  export let text_class_extra = ''
  let clazz = ''
  export { clazz as class }
</script>

<div class="w-full flex justify-center items-center my-6 {clazz}">
  <i class="fa fa-circle animate-pulse text-primary-900 text-opacity-60 mr-2 text-2xl {icon_class_extra}" />
  <div class="text-primary-900 font-bold {text_class_extra}">
    <slot>Loading...</slot>
  </div>
</div>
