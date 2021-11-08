<script>
    export let schoolType = 'School Type';
    export let imageSrc;
    import { admissionLinks } from '@/route_data';



</script>


<div class="rounded-lg bg-white w-100 overflow-hidden mx-8 shadow transition transition-shadow transition-transform transform hover:scale-105 hover:shadow-2xl mb-8">
    <a href={'#'+admissionLinks[1].path}>
      <div class="group text-black overflow-hidden cursor-pointer">
        <div class="h-75 bg-cover bg-center" style={`background-image: url(${imageSrc});`}></div>
        <div class="font-sans text-xl mt-4 mx-7 mb-9">
            <p class="font-bold mb-4">
                {schoolType}
            </p>
            <p class="text-base mb-4">
                <slot></slot>
            </p>
            <div class="group-hover:text-primary-600 cursor-pointer font-bold">
              EXPLORE
            </div>
        </div>
    </div>
    </a>


</div>

<style>
    a.ex1:hover, a.ex1:active {color: red;}

    .picture-size{
        height: 100%;
        width: 100%;
    }
</style>