<script>
    export let schoolType = 'School Type';
    export let imageSrc;

</script>


<div class="p-10">
    <!--Card 1-->
    <div class="max-w-sm rounded bg-white shadow-xl text-black">
        <img class="picture-size" src={imageSrc} alt={schoolType}>
        <div class="px-6 py-4 ">
            <div class="font-bold text-xl mb-2 ">{schoolType}</div>
                <p class=" text-base ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
                <div class="py-5">
                    <p><a class="ex1 cursor-pointer" href="default.asp"><strong>EXPLORE</strong></a></p>
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