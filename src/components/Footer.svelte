<script>
  import '@/common_styles.css'
  import { links, external_links } from "@/route_data";
  const year = new Date().getFullYear();

  const link_groups = [
    {
      name: 'Campuses',
      children: [
        {name: 'NEW Quezon City (Main)', path: '#/'},
        {name: 'NEW Batangas', path: '#/'},
        {name: 'NEW Pampanga', path: '#/'},
        {name: 'NEW General Santos City', path: '#/'},
        {name: 'NEW Rizal', path: '#/'},
      ]
    },
    {
      name: 'Other Links',
      children: [
        {name: 'School Calendar', path: '#/'},
        {name: 'Research and Publication', path: '#/'},
        {name: 'NEUTECH', path: '#/'},
        {name: 'MCLE', path: '#/'},
        {name: 'Russian Studies Center', path: '#/'},
      ]
    },
    {
      name: 'Alumni Affairs',
      children: []
    }
  ]

  const social_links = [
    {name: 'Facebook', icon: 'fa-facebook-square', path: 'https://facebook.com'},
    {name: 'Twitter', icon: 'fa-twitter-square', path: 'https://twitter.com'},
    {name: 'Instagram', icon: 'fa-instagram-square', path: 'https://instagram.com'},
    {name: 'Youtube', icon: 'fa-youtube-square', path: 'https://youtube.com'},
  ]

  const extra_links = [
    {name: 'Automate', path: 'https://automate.neu.edu.ph'},
    {name: 'NEUVLE', path: 'https://automate.neu.edu.ph'},
    {name: 'Subscribe', path: 'https://automate.neu.edu.ph'},
  ]
</script>

<div class="cmp-footer w-full text-white bg-primary-900">
  <div class="container mx-auto">
    <div class="flex flex-col sm:flex-row">
      <a href="#/" class="mb-8 mx-auto min-w-35 md:ml-auto w-35 h-35 lg:(min-w-50 w-50 h-50) relative">
        <div class="absolute bg-gra shadow-lg w-full h-full bg-primary-300 -top-2 rounded-b-lg p-5">
          <img
            src="https://neu.edu.ph/main/assets/images/NEU_LOGO.png"
            alt="neu"
            class="w-full h-full"
          />
        </div>
      </a>
      <div class="container mx-auto flex flex-col p-4 lg:flex-row">
        <div class="flex flex-wrap justify-center text-center ml-auto">
          {#each link_groups as links}
            <div class="w-60 mb-8">
              <div class="font-bold uppercase text-lg">
                {links.name}
              </div>
              <ul class="flex flex-col">
                {#each links.children as link}
                  <a href={link.path}>{link.name}</a>
                {/each}
              </ul>
            </div>
          {/each}
        </div>

        <div class="flex flex-col w-60 mx-auto">
          <div class="font-bold uppercase text-lg text-center">
            Social Links
          </div>
          <ul class="flex flex-wrap justify-center mb-4">
            {#each social_links as link}
              <li>
                <a href={link.path} class="mx-2">
                  <i class={`fab ${link.icon} text-3xl`}></i>
                </a>
              </li>
            {/each}
          </ul>

          <ul class="flex flex-col text-right mx-4">
            {#each extra_links as link}
              <li>
                <a href={link.path} class="uppercase font-bold">{link.name}</a>
              </li>
            {/each}
          </ul>
        </div>
        <!-- <div class="footer-primary-links  md:(grid grid-cols-2 gap-15) lg:(grid grid-cols-4 gap-20)" >
          {#each links as link}
            {#if link.category == "footer"}
              <div class="mt-4">
                <h3 class="text-lg font-medium text-white uppercase text-center">
                  {link.name}
                </h3>
                <ul>
                  {#each link.sublinks as sublink}
                    <li class="text-gray-300 capitalize leading-relaxed px-4">
                      <a href={"#" + sublink.path} class="hover:text-white"
                        >{sublink.label}</a
                      >
                    </li>
                  {/each}
                </ul>
              </div>
            {/if}
          {/each}
          <div class="mt-4">
            <h3 class="text-lg font-medium text-white uppercase text-center">
              {external_links.name}
            </h3>
            <ul>
              {#each external_links.sublinks as sublink}
                <li class="text-gray-300 capitalize leading-relaxed px-4">
                  <a href={sublink.path} class="hover:text-white"
                    >{sublink.label}</a
                  >
                </li>
              {/each}
            </ul>
          </div>
          <div class="mt-4">
            <h3 class="text-lg font-medium text-white uppercase text-center">
              ALUMNI AFFAIRS
            </h3>
            <div class="mt-4">
              <h3 class="text-lg font-medium text-white uppercase text-center">
                OFFICIAL SOCIAL MEDIA
              </h3>
              <ul class="flex justify-around text-2xl py-2">
                <li>
                  <a href="https://www.facebook.com/Neu.ph.official/">
                    <i class="fab fa-facebook-square hover:text-white" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/NEU_ph_official/">
                    <i class="fab fa-twitter-square hover:text-white" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/newerauniversity_official/">
                    <i class="fab fa-instagram-square hover:text-white" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCXEnDGnw3poCdV7VL-8YJ7w/videos">
                    <i class="fab fa-youtube-square hover:text-white" />
                  </a>
                </li>
              </ul>
            </div>
            <ul class="text-base font-medium text-gray-300 uppercase">
              <li>
                <a href="https://automate.neu.edu.ph/" class="hover:text-white">automate</a>
              </li>
              <li>
                <a href="https://neuvle.neu.edu.ph/" class="hover:text-white">neuvle</a>
              </li>
              <li>
                <a href="https://www.neu.edu.ph/main/m4il.php" class="hover:text-white">subscribe</a>
              </li>
            </ul>
          </div>
        </div> -->
      </div>
    </div>
  </div>

  <div class="w-full px-8 bg-gray-900 bg-opacity-10">
    <div class="container mx-auto py-8 px-8 flex flex-col items-center text-white space-y-6 md:(justify-between flex-row)">
      <div class="lg:(flex items-center)">
        <div class="font-shelley text-4xl capitalize border-b-5px pb-6 lg:(border-none mr-6)" >
          new era university
        </div>
        <div class="mt-6 lg:(border-l-5px pl-6)">
          <p>No. 9 Central Ave., New Era,</p>
          <p>Quezon City, Philippines, 1107</p>
          <p>Telephone: (02) 8981-4221</p>
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