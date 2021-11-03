<script>
    export let message = "Click me please... uwu";
    export let page;

    const goToPage = () => {
        location.replace(page);
    }
</script>

<div >
    <button class="px-2.5 py-1 rounded-xl font-semibold btn-special" class:bg-transparent={true} class:btn-default={true} on:click={goToPage}>
        {message}
    </button>
</div>

<style lang="postcss">

    .btn-default {
        @apply text-black border-2 border-solid;
        border-color: #E76363;
    }

    .btn-special:hover {
        @apply text-white border-2 border-solid;
        background: #E76363;
    }

</style>
