<script>
    import { events } from '@/sample_data/events'
    import { HOST_ROOT } from '@/utils'
    export let data = events.entries[0]
</script>

<a href={'#/events/'+data._id}>
    <div class="news-card transform transition transition-transform hover:scale-105 shadow rounded rounded-md overflow-hidden h-full overflow-hidden relative bg-primary-400" style="background-image: url({HOST_ROOT}{data.banner.path});background-size: cover; background-repeat: no-repeat; background-position: center;">
        <div class="bg-primary-900 text-white bg-opacity-80 text-semibold absolute bottom-0 h-80px w-full">
            <div class="w-full bg-black bg-opacity-50 px-8 py-2 h-full">
              <div class="mb-2 text-xl font-bold truncate">{data.title}</div>
              <div class="mb-2 text-xs">{data.date_written}</div>
            </div>
        </div>
    </div>
</a>
