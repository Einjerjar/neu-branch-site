<script>
    import { events } from '@/sample_data/events';
import Divider from "@/components/Divider.svelte";
import NewsCard from "@/components/NewsCard.svelte";

export let params = {};
$: event_details = events.entries.filter((entry) => params.id === entry._id)[0];
$: event_data = events.entries.filter((event) => event.Type[0] == 'Events' && params.id !== event._id).slice(0,2);
$: announcement_data = events.entries.filter((event) => event.Type[0] == 'Announcement' && params.id !== event._id).slice(0,2);
</script>
<!-- <div>{params.id}</div> -->
<div class="container mx-auto p-8">
    <div class="xl:(flex flex-row-reverse items-center space-x-4 w-full)">
        <div class="xl:(px-8 w-2/5)">
            <div class="uppercase text-black font-semibold mb-2">
                <h2 class="text-xl md:text-2xl">
                    <!-- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt reprehenderit quasi quos praesentium illum nihil? -->
                    {event_details.Title}
                </h2>
            </div>
            <div class="mb-4">
                <!-- January 1, 2021 <span>|</span> By: NEU Central Student Council Officer <span>|</span> Myr Jdy C. Mahinay -->
                {event_details.Date}
                {#if event_details.Office}
                    <span>|</span> By: {event_details.Office}
                {/if}
                {#if event_details.Author}
                    <span>|</span> {event_details.Author}
                {/if}
            </div>
        </div>

        <div class="mb-4 xl:(w-3/5)">
            <img src={event_details.Banner.path} alt="event" class="mx-auto object-cover rounded">
        </div>
    </div>
    <div class="xl:(w-full flex space-x-4 h-full mt-8)">
        <div class="xl:(w-2/3)">
            {@html event_details.Content}
            {#if event_details.asset}
                {#each event_details.asset as asset}
                    <div class="my-4">
                        <img src={asset.path} alt="alt">
                    </div>
                {/each}
            {/if}
            <!-- <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor nisi sit amet diam viverra, et commodo ante scelerisque. Morbi quis commodo erat. Quisque et ligula venenatis, interdum eros sit amet, lacinia libero. Aenean fermentum dictum diam quis rhoncus. Nullam vel vehicula est, ut sodales metus. Praesent finibus sem a lacus tempor, sed lobortis augue gravida. Ut nibh ante, aliquam in sollicitudin iaculis, maximus et dolor. Donec at pellentesque orci, in fermentum libero. Cras ac nunc enim.
            </p> <br>
            <p>
                In hac habitasse platea dictumst. Etiam ut sem ac libero bibendum mattis. Donec vel consectetur tellus. Phasellus dictum lectus non molestie ultricies. Vestibulum rhoncus sodales risus, ac congue est molestie et. Donec pellentesque bibendum diam, sit amet interdum urna. Nulla nec tortor sit amet risus gravida varius. Suspendisse dignissim quis magna et ultricies. Praesent purus ipsum, lacinia a orci in, mollis dictum diam. Cras imperdiet sollicitudin accumsan. Vivamus placerat purus vel sem commodo, sed ornare magna ullamcorper. Proin ac risus metus. Duis a nulla tristique, rhoncus nibh a, convallis metus. Pellentesque finibus tortor a fermentum placerat. Donec auctor nulla vitae nisi tempus, hendrerit sollicitudin dui pharetra. Suspendisse potenti.
            </p> <br>
            <p>
                Mauris malesuada nisi et venenatis fringilla. Phasellus semper nulla sagittis leo suscipit, at lobortis tortor tempus. Fusce lobortis arcu at est venenatis finibus. Donec auctor imperdiet sem sagittis ullamcorper. Ut nec mi dignissim, vulputate dui vitae, faucibus quam. Morbi semper pharetra metus, ut hendrerit est vehicula at. Nam mattis consequat leo, quis faucibus quam fermentum blandit. Nulla egestas porta enim quis porttitor. Curabitur eleifend pulvinar tellus, facilisis ullamcorper massa gravida ac. Nullam vitae pretium purus. Maecenas erat risus, facilisis id porttitor ut, congue ac urna.
            </p> <br>
            <p>
                Etiam bibendum convallis urna, sit amet aliquam quam suscipit et. Ut sollicitudin laoreet lorem iaculis rhoncus. Nulla suscipit, massa eget aliquam commodo, lacus nisi lacinia diam, non ullamcorper mi quam a eros. Vivamus quis tempor purus, ac pulvinar nunc. In id rutrum lectus. Sed et neque at nisi rutrum facilisis. Nulla commodo ex eget nulla finibus imperdiet. Praesent non lacus vel turpis scelerisque efficitur. Pellentesque a ex iaculis, fringilla lacus at, faucibus felis. Duis convallis turpis eget mollis euismod. Cras rutrum tortor ut nibh porttitor malesuada. Fusce pellentesque justo quis nisl fringilla, eu eleifend arcu auctor.
            </p> <br>
            <p>
                Pellentesque hendrerit eros condimentum sagittis interdum. Donec sit amet est vel lacus varius feugiat. Vivamus bibendum nisl turpis, et dignissim velit feugiat non. Etiam fermentum orci sed nisl commodo euismod. Integer nibh est, lacinia at nisl at, tincidunt maximus velit. Aliquam faucibus ex nunc, at fermentum enim ullamcorper eu. Donec id egestas tellus. Vestibulum nisl ex, sagittis eget quam in, auctor elementum dui. Aliquam viverra dolor sed enim bibendum, id imperdiet est venenatis. Proin nec risus viverra, tempor quam nec, fermentum augue.
            </p> -->
        </div>
        <div class="xl:hidden">
            <Divider/>
        </div>
        
        <div class="xl:(border-l-5 border-primary-900 rounded w-1/3)">
            <div class="ml-4">
                <div class="text-2xl text-primary-900 uppercase font-semibold xl:(text-4xl)">
                    <p>events</p>
                </div>
                <div>
                    {#each event_data as data (data._id)}
                    <a href={`#/events/${data._id}`}>
                    <div class="h-50 my-8">
                        
                        <NewsCard data={data}/>
                    
                    </div>
                </a>
                    {/each}
                </div>
                <div class="text-2xl text-primary-900 uppercase mt-8 font-semibold xl:(text-4xl)">
                    <p>announcement</p>
                </div>
                <div>
                    {#each announcement_data as data}
                    <div class="h-50 my-8">
                        <NewsCard data={data}/>
                    </div>
                    {/each}
                </div>
            </div>
            
            <!-- <div class="<xl:(bg-primary-900 text-white h-15 text-4xl uppercase flex items-center justify-center) xl:(text-4xl text-primary-900 uppercase)">
                <p>announcement</p>
            </div>
            <div>
                <NewsCard/>
                <NewsCard/>
            </div> -->
        </div>
    </div>

    
    
</div>