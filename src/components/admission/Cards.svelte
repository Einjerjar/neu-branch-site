<script>
    export let schoolType = 'School Type';
    export let imageSrc;
    import { admissionLinks } from '@/route_data';



</script>


<div class="p-8">
    <div class="max-w-sm rounded-lg bg-white shadow-2xl text-black overflow-hidden">
        <img class="picture-size" src={imageSrc} alt={schoolType}>
        <div class="font-sans text-xl mt-4 mx-7 mb-9">
            <p class="font-bold mb-4">
                {schoolType}
            </p>
            <p class="text-base mb-4">
                <slot></slot>
            </p>

            <p><a class="font-bold ex1 cursor-pointer" href={'#'+admissionLinks[1].path}>EXPLORE</a></p>

        </div>
    </div>


</div>

<style>
    a.ex1:hover, a.ex1:active {color: red;}

    .picture-size{
        height: 100%;
        width: 100%;
    }
</style>