<script>
    export let message = "Click me please... uwu";
    export let page;

    const goToPage = () => {
        location.replace(page);
    }
</script>

<div >
    <button class="border-2 border-primary-800 px-4 py-2 rounded-md inline-block font-bold  btn-special" class:bg-transparent={true} class:btn-default={true} on:click={goToPage}>
        {message}
    </button>
</div>

<style lang="postcss">
    .btn-default {
        @apply text-primary-800 border-2 border-solid;
    }

    .btn-special:hover {
        @apply text-white border-2 border-solid;
        background: rgba(159, 18, 57);
    }

</style>
