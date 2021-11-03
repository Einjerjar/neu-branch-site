<script>
    export let schoolType = 'School Type';
    export let imageSrc;
    import { admissionLinks } from '@/route_data';



</script>


<div class="p-8">
    <!--Card 1-->
    <div class="max-w-sm rounded-lg bg-white shadow-2xl text-black overflow-hidden">
        <img class="picture-size" src={imageSrc} alt={schoolType}>
        <div class="px-6 py-4 ">
            <div class="font-bold text-xl mb-2 text-center">{schoolType}</div>
                <p class=" text-base text-center">
                    <!-- {information} -->
                    <slot></slot>
                </p>
            <div class="py-5">
                <p><a class="ex1 cursor-pointer" href={'#'+admissionLinks[1].path}><strong>EXPLORE</strong></a></p>

            </div>
        </div>
    </div>
</div>

<style>
    a.ex1:hover, a.ex1:active {color: red;}

    .picture-size{
        height: 50%;
        width: 100%;
    }
</style>