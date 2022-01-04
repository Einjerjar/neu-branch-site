<script>
  import Article from '@/components/admission/Article.svelte'
  import BigHeader from '@/components/admission/BigHeader.svelte'

  let bigTitle = 'New Era University: General Santos Branch events information'
</script>

<div class="container mx-auto px-4">
  <BigHeader {bigTitle} />
  <div class="text-center max-w-300 mx-auto mb-16">
    <div class="items-center my-10">
      <h2>Title description, <br />Dec 7, 2021</h2>
    </div>
    <img src="https://neu.edu.ph/main/assets/images/NEU_Pampanga.jpg" alt="Reload" class="center" width="1000" height="1000" />

    <div class="row">
      <div class="leftcolumn my-16">
        <div class="card">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut modi, officiis et eius sapiente ad, consectetur itaque consequuntur, fuga natus ut vel omnis harum sed nesciunt magni necessitatibus aliquam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae tempore, ducimus corrupti unde molestiae dolores qui odio, sequi nihil, perspiciatis nisi rem necessitatibus inventore veritatis debitis eaque quo culpa modi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, velit similique voluptates atque odio corrupti ipsa consectetur repudiandae esse dolore nostrum enim corporis quaerat a ratione commodi harum? Blanditiis, explicabo. <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut modi, officiis et eius sapiente ad, consectetur itaque consequuntur, fuga natus ut vel omnis harum sed nesciunt magni necessitatibus aliquam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae tempore, ducimus corrupti unde molestiae dolores qui odio, sequi nihil, perspiciatis nisi rem necessitatibus inventore veritatis debitis eaque quo culpa modi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, velit similique voluptates atque odio corrupti ipsa consectetur repudiandae esse dolore nostrum enim corporis quaerat a ratione commodi harum? Blanditiis, explicabo.
          </p>
        </div>
      </div>
      <div class="rightcolumn my-30">
        <div class="card">
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam aperiam temporibus alias, amet quod animi velit labore ullam explicabo non modi consequuntur quia sequi nisi ad! Sed, amet officiis.</p>
        </div>
      </div>
    </div>

    <div class="max-w-300 mx-auto mb-16">
      <Article title="The Concept">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut modi, officiis et eius sapiente ad, consectetur itaque consequuntur, fuga natus ut vel omnis harum sed nesciunt magni necessitatibus aliquam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae tempore, ducimus corrupti unde molestiae dolores qui odio, sequi nihil, perspiciatis nisi rem necessitatibus inventore veritatis debitis eaque quo culpa modi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, velit similique voluptates atque odio corrupti ipsa consectetur repudiandae esse dolore nostrum enim corporis quaerat a ratione commodi harum? Blanditiis, explicabo.</p>
      </Article>
    </div>
  </div>
</div>

<style>
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  /* Create two unequal columns that floats next to each other */
  /* Left column */
  .leftcolumn {
    float: left;
    width: 75%;
    padding: 20px;
    border-right: 1px solid black;
    height: auto;
  }

  /* Right column */
  .rightcolumn {
    float: left;
    width: 25%;
  }
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
</style>
