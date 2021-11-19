<script>
    export let schoolType = 'School Type';
    export let imageSrc;
    import { admissionLinks } from '@/route_data';
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
            <div class="fancy-link">
                <div class="group-hover:text-primary-600 transition transition-colors duration-300 cursor-pointer font-bold text-center">EXPLORE</div>
            </div>
        </div>
    </div>
    </a>
</div>

<style>
    .fancy-link{
        position: relative;
    }

    .fancy-link::after{
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: red;

        transform: scaleX(0);
        transform-origin: center;
        transition: transform 250ms ease-in;
    }

    .fancy-link:hover::after{
        transform: scaleX(1);
        transform-origin: center;
    }
</style>