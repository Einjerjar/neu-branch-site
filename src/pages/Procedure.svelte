<script>
  import ProcedureButton from "@/components/admission/ProcedureButton.svelte";
  import { admissionLinks } from "@/route_data";
  import Banner from "@/components/admission/Banner.svelte";
  import BigHeader from "@/components/admission/BigHeader.svelte";
  import MediumHeader from "@/components/admission/MediumHeader.svelte";
  import Article from "@/components/admission/Article.svelte";

  let bigTitle = "admission";
  let bannerName = "Procedures";
</script>

<Banner message={bannerName} />
<!-- enclose every section of paragraphs in a div, and apply margins and paddings. -->
<div class="container mx-auto px-4">
  <BigHeader {bigTitle} />
  <!-- -========================================================================== -->
  <div class="text-center max-w-300 mx-auto mb-16">
    <p>
      Admission presupposes that a student’s application has satisfactorily met
      all the entrance requirements of the University.
    </p>
    <p>
      Enrolment in the University is a contractual relationship between the
      students and the Administration.
    </p>
    <p>
      A student is admitted with definite understanding that he and his parents
      or guardians agree to comply with the scholastic standards of the
      University and its rules governing student’s behavior. The administration
      is empowered to deal with violations in accordance with its systems of
      discipline and guidance. Admission to the University is made with no
      discrimination on the grounds of religious belief, race, sex, age or
      physical disability. A student seeking admission to the University must be
      a graduate of a standard secondary course offered by a duly recognized
      school and must have passed the NEU Admission Test and Medical & Physical
      Examination. A student whose eligibility for admission has been verified
      must submit to the Registrar or his authorized representatives the
      following:
    </p>
  </div>

  <div class="max-w-300 mx-auto mb-16">
    <Article title="Tertiary Enrollment Procedure">
      <p>
        Log in to SchoolAutomate (<a href="https://automate.neu.edu.ph"
          >https://automate.neu.edu.ph</a
        >). Click PARENTS/STUDENTS. New students: Use your temporary ID as log
        in ID and password Old students: Use your user name and password. Click
        the Enrollment tab then Online Advising.Click Schedule (under Assign
        Section, Last Column Right) to choose the schedule then click Proceed.
        Click Save and take note of the assessment of fees and amount to be
        paid.
      </p>
      <a href="#/" class="block text-center md:text-left my-4">
        <div class="border-2 border-primary-800 px-4 py-2 rounded-md inline-block font-bold text-primary-800">
          See More
        </div>
      </a>
    </Article>

    <Article title="Admission Procedure (NEU SHS Graduate)">
      <p>
        Request for your Temporary Student ID thru sending the following details
        to admissionrequirements@neu.edu.ph; Name (Last Name, First Name, Middle
        Name), Course Applying, Gender, and Year Graduated. Once you received
        the Temporary Username and Password thru email, You can now edit your
        Personal Information Sheet thru this link NEU Automate for Application.
      </p>
      <a href="#/" class="block text-center md:text-left my-4">
        <div class="border-2 border-primary-800 px-4 py-2 rounded-md inline-block font-bold text-primary-800">
          See More
        </div>
      </a>
    </Article>

    <Article title="Admission Procedure (Non-NEU SHS Graduate)">
      <p>
        Request for your Temporary Student ID thru sending the following details
        to admissionrequirements@neu.edu.ph; Name (Last Name, First Name, Middle
        Name), Course Applying, Gender, and Year Graduated. Once you received
        the Temporary Username and Password thru email, You can now edit your
        Personal Information Sheet thru this link NEU Automate for Application.
      </p>
      <a href="#/" class="block text-center md:text-left my-4">
        <div class="border-2 border-primary-800 px-4 py-2 rounded-md inline-block font-bold text-primary-800">
          See More
        </div>
      </a>
    </Article>
  </div>
</div>
