<script>
  import MediumHeader from "@/components/admission/MediumHeader.svelte";
  export let title;
</script>

<div class="min-h-full mx-auto max-h-full flex flex-wrap justify-start text-rose-900 ">
  <div class="items-center mb-5 text-left text-black mb-5 ">
      <!-- <h3 class="text-left my-5" ><strong>Tertiary Enrollment Procedure</strong></h3> -->
      <MediumHeader midTitle={title}/>
        <slot></slot>


<!-- asd

          Log in to SchoolAutomate (https://automate.neu.edu.ph). Click PARENTS/STUDENTS. New students: Use your temporary ID as log in ID <br>
          and password Old students: Use your user name and password. Click the Enrollment tab then Online Advising.Click Schedule <br>
          (under Assign Section, Last Column Right) to choose the schedule then click Proceed. Click Save and take note of <br>
          the assessment of fees and amount to be paid.

          asd -->

  </div>
</div>

<style>



</style>