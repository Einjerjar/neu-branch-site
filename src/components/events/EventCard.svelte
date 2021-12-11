<script>
    export let article;
</script>

<div class="min-h-75 group relative cursor-auto ">
    <div class="w-full h-[60vw] max-h-full sm:h-full bg-cover bg-center overflow-hidden shadow-md border-b-4 border-b-primary-900" style={`background-image: url(${article.Banner.path});`} >
        <!-- for background -->
        <div class="w-full h-full bg-gray-900 opacity-90 transform transform-scale origin-bottom transition transition-transform group-hover:scale-y-100 scale-y-0">
            <div class="block h-full flex absolute flex-col p-6 text-white">
                <h2 class="object-center text-xl font-medium pb-2">
                    {article.Title}
                </h2>
                <div class="flex-grow font-nutino">
                    <p class="text-sm text-ellipsis max-h-4.375em mb-8 leading-5 overflow-hidden">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt error neque nam delectus nisi. Quos, reiciendis
                        inventore sed dolor id commodi.
                    </p>
                </div>
                <a class="bg-transparent hover:bg-white  font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded cursor-pointer" href={"#/events/" + article._id} >
                    See more
                </a>
            </div>
        </div>
    </div>
</div>
