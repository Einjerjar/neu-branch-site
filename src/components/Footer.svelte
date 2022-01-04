<script>
  import { footer_links, branch_data as bd } from '@/store'
  // console.log($bd.address.address)
  import LinkGroup from './footer/LinkGroup.svelte'

  const year = new Date().getFullYear()
</script>

<div class="cmp-footer w-full text-white bg-primary-900 z-98">
  <div class="container mx-auto">
    <div class="flex flex-col sm:flex-row">
      <a href="#/" class="mb-8 mx-auto min-w-35 md:ml-auto w-35 h-35 lg:(min-w-50 w-50 h-50) relative">
        <div class="absolute bg-gra shadow-lg w-full h-full bg-primary-800 -top-2 rounded-b-lg p-5">
          <img
            src="./images/logo_x300.png"
            alt="neu"
            class="w-full h-full"
          />
        </div>
      </a>
      <div class="container mx-auto flex flex-col p-4 lg:flex-row">
        <div class="flex flex-wrap justify-center text-center ml-auto">
          <LinkGroup links={$footer_links.campus_links} title="Campus Links" />
          <LinkGroup links={$footer_links.other_links} title="Other Links" />
          <LinkGroup links={$footer_links.alumni_links} title="Alumni Affairs" />
        </div>

        <div class="flex flex-col w-60 mx-auto">
          <LinkGroup links={$footer_links.social_icons} icon_only={true} title="Social Links" />
          <LinkGroup links={$footer_links.extra_links} title="Extra Links" show_title={false} extra_format={true}/>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full px-8 bg-gray-900 bg-opacity-20">
    <div class="container mx-auto py-8 px-8 flex flex-col items-center text-white space-y-6 md:(justify-between flex-row)">
      <div class="lg:(flex items-center)">
        <div class="font-shelley text-4xl capitalize border-b-5px pb-6 lg:(border-none mr-6)" >
          new era university
        </div>
        <div class="mt-6 lg:(border-l-5px pl-6)">
          <p>{$bd.address.address}</p>
          <p>{`${$bd.address.city} ${$bd.address.country} ${$bd.address.postal_code}`}</p>
          <p>Telephone: {$bd.telephone_numbers[0].value.number}</p>
          <p>info@neu.edu.ph</p>
        </div>
      </div>
      <div>
        <h3 class="text-lg font-medium uppercase">branches</h3>
        <p>Batangas</p>
        <p>Pampanga</p>
        <p>General Santos City</p>
        <p>Rizal</p>
      </div>
    </div>
    <div class="text-center text-gray-300 text-sm pb-8">
      Copyright © {year} New Era University. All Rights Reserved
    </div>
  </div>
</div>