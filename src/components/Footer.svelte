<script>
  import { links, external_links } from "@/route_data";
  const year = new Date().getFullYear();
</script>

<div class="cmp-footer w-full">
  <div class="footer-primary bg-gray-500">
    <div
      class="container mx-auto flex flex-col justify-center items-center p-4 lg:(justify-between flex-row)"
    >
      <a href="#/">
        <img
          src="https://neu.edu.ph/main/assets/images/NEU_LOGO.png"
          alt="neu"
          class="w-25 h-25 lg:(w-40 h-40)"
        />
      </a>
      <div
        class="footer-primary-links  md:(grid grid-cols-2 gap-15) lg:(grid grid-cols-4 gap-20)"
      >
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
      </div>
    </div>
  </div>

  <div class="footer-secondary bg-gray-700">
    <div
      class="container mx-auto py-8 flex flex-col items-center text-white space-y-6 md:(justify-between flex-row)"
    >
      <div class="lg:(flex items-center)">
        <div
          class="font-shelley text-4xl capitalize border-b-5px pb-6 lg:(border-none mr-6)"
        >
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

<style>
  @import url("https://db.onlinewebfonts.com/c/3fda0d6ca5116e691e85501911ffa12c?family=Shelley");

  .font-shelley {
    font-family: Shelley;
  }
</style>
