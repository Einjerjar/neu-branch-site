<script>
  import { HOST_ROOT } from '@/utils'

  import SkeletonImage from '../SkeletonImage.svelte'

  export let prg = {
    program_name: 'Bachelor of Science in Accounting Information System',
    program_desc:
      '<p>Bachelor of Science in Accounting Information System</p>\n<p>Bachelor of Science in Accounting Information System</p>\n<p>Bachelor of Science in Accounting Information System</p>\n<p>Bachelor of Science in Accounting Information System</p>',
    branch: [ 'gensan', 'lipa', 'pampanga' ],
    level: [ 'undergraduate', 'tertiary' ],
    _mby: '56500c4665393650ef0000cf',
    _by: '56500c4665393650ef0000cf',
    _o: 5,
    _modified: 1639641452,
    _created: 1635774106,
    _id: '955862716134343cac000172',
    department: [
      {
        _id: '95df14a7653631604e0002c7',
        link: 'departments',
        display: 'pampanga cbaa',
      },
    ],
    description: null,
    image: {
      path: '/cockpit/storage/uploads/2021/12/16/D_compressed_uid_61baf0cfdf324.jpg',
    },
    images: null,
    children: [],
  }

  $: p_img = prg.image ? HOST_ROOT + prg.image.path : './images/acad/default_compressed.jpg'
</script>

<div on:click class="w-full rounded bg-light-700 h-40 p-4 flex group cursor-pointer" >
  <!-- <div class="h-full bg-red-200 rounded bg-cover bg-center" style='aspect-ratio: 1/1; background-image: url({p_img});' /> -->
  <SkeletonImage class='h-full rounded bg-cover bg-center flex-shrink-0' style='aspect-ratio: 1/1;' img={p_img} viewable={false}/>
  <div class="pl-4 overflow-hidden">
    <div class="<sm:text-base <md:text-xl text-3xl font-medium text-primary-900 group-hover:text-primary-400 mb-2 truncate" >
      {prg.program_name}
    </div>
    <div class="text-gray-700 text-sm max-h-4.1em overflow-hidden children:text-sm children:truncate">
      {@html prg.program_desc}
    </div>
  </div>
</div>
