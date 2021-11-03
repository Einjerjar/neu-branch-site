<script>
import Divider from "@/components/Divider.svelte";
import NewsTicker from "@/components/NewsTicker.svelte";
import Slider from "@/components/Slider.svelte";

</script>
<div>
    <NewsTicker/>
    <div class="container mx-auto">
        <Slider/>
        <Divider/>
        <div class="bg-primary-900 text-white h-20 text-4xl uppercase flex items-center justify-center">
            <p>events</p>      
        </div>
        <Divider/>
        <Slider/>
        <Divider/>
        <div class="bg-primary-900 text-white h-20 text-4xl uppercase flex items-center justify-center">
            <p>announcement</p>      
        </div>
        <Slider/>
    </div>
    
</div>