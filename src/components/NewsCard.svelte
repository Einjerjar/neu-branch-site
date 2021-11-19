<script>
    import {events} from '@/sample_data/events'
    export let data = events.entries[0];
    // export let src="https://neu.edu.ph/main/assets/images/posts_images/CCEL2021ccs2.jpg";
    // export let desc="Event Title One";
    // export let date= "January 1, 2021";
    // export let path;
</script>

<a href={'#/events/'+data._id}>
    <div class="news-card transform transition transition-transform hover:scale-105 shadow rounded rounded-md overflow-hidden h-full overflow-hidden relative" style="background-image: url({data.Banner.path});background-size: cover; background-repeat: no-repeat; background-position: center;">
        <!-- <img src={src} alt={desc} class="object-cover w-full h-4/5"/> -->
        <div class="bg-primary-900 text-white text-semibold pl-8 absolute bottom-0 w-full">
            <p class="mb-2 text-xl lg:(text-sm)">{data.Title}</p>
            <p class="mb-2 text-xs">{data.Date}</p>
        </div>
    </div>
</a>
