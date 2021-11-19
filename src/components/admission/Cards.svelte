<script>
    import { admissionLinks } from '@/route_data';
    export let schoolType = 'School Type';
    export let imageSrc;
    export let pathChosen;
</script>

<div class="w-100 rounded-lg bg-white overflow-hidden mx-8 shadow transition transition-all transform hover:scale-105 duration-100 hover:shadow-2xl mb-8">
    <!-- <a href={'#'+admissionLinks[0].path}> -->
    <a href={pathChosen}>
      <div class="group text-black overflow-hidden cursor-pointer">
        <div class="h-75 bg-cover bg-center" style={`background-image: url(${imageSrc});`}></div>
        <div class="font-sans text-xl mt-4 mx-7 mb-9">
            <p class="font-bold mb-4">{schoolType}</p>
            <p class="text-base mb-4"><slot></slot></p>
            <div class="group-hover:text-primary-600 transition transition-colors duration-300 cursor-pointer font-bold">EXPLORE</div>
        </div>
    </div>
    </a>
</div>