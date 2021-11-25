<script>
    export let page = '';
    export let isRounded = true;
    export let isSmallRounded = false;
    export let isBold = true;
    export let isFullWidth = false;
    export let widthWide = false;

    const goToPage = () => {
        location.replace(page);
    }
</script>

<div >
    <button class="border-2 border-primary-800 px-4 py-2 inline-block  rounded-sm btn-special" class:bg-transparent={true} class:btn-default={true} class:font-bold={isBold}  class:w-full={isFullWidth} class:rounded-md={isRounded} class:rounded-sm={isSmallRounded} class:py-4={widthWide} on:click={goToPage}>
        <slot></slot>
    </button>
</div>

<style lang="postcss">
    .btn-default {
        @apply text-primary-800 border-2 border-solid transition transition-colors font-nunito;
    }

    .btn-special:hover {
        @apply text-white border-2 border-solid bg-primary-800;
    }

</style>
