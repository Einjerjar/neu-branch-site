<script>
    import ProcedureButton from "@/components/admission/ProcedureButton.svelte";
            let message = "Click me please... uwu";

</script>

<div class="bg-cover page-home neu-pic"></div>


<div class="min-h-full mx-auto max-h-full flex  justify-center text-rose-900 font-medium">
    <div class="items-center my-21">
        <p class=" font-sans shadowing text-center text-6xl mb-15"><strong>ADMISSION</strong></p>
        <p class = "text-center font-mono text-black">
            Admission presupposes that a student’s application has satisfactorily met all the entrance requirements of the University.<br>
            Enrolment in the University is a contractual relationship between the students and the Administration.<br>
            A student is admitted with definite understanding that he and his parents or guardians agree to comply with the scholastic<br>
            standards of the University and its rules governing student’s behavior. The administration is empowered to deal with violations<br>
            in accordance with its systems of discipline and guidance. Admission to the University is made with no discrimination on the<br>
            grounds of religious belief, race, sex, age or physical disability. A student seeking admission to the University must be a<br>
            graduate of a standard secondary course offered by a duly recognized school and must have passed the NEU Admission Test and<br>
            Medical & Physical Examination. A student whose eligibility for admission has been verified must submit to the Registrar or<br>
            his authorized representatives the following:</p>
        <hr class="bg-black my-15"/>

        <h3 class="text-left " ><strong>Tertiary Enrollment Procedure</strong></h3>
        <p class = "text-left font-mono text-black mb-5">
            Log in to SchoolAutomate (https://automate.neu.edu.ph). Click PARENTS/STUDENTS. New students: Use your temporary ID as log in ID <br>
            and password Old students: Use your user name and password. Click the Enrollment tab then Online Advising.Click Schedule <br>
            (under Assign Section, Last Column Right) to choose the schedule then click Proceed. Click Save and take note of <br>
            the assessment of fees and amount to be paid.
        </p >
        <button class="favorite styled mb-15" type="button">
            Click me
        </button>


        <h3 class="text-left "><strong>Admission Procedure (NEU SHS Graduate)</strong></h3>
        <p class = "text-left font-mono text-black mb-5">
            Request for your Temporary Student ID thru sending the following details to admissionrequirements@neu.edu.ph; <br>
            Name (Last Name, First Name, Middle Name), Course Applying, Gender, and Year Graduated. Once you received the Temporary Username <br>
            and Password thru email, You can now edit your Personal Information Sheet thru this link NEU Automate for Application.<br>
        </p>
        <button class="favorite styled mb-15" type="button">
            Click me
        </button>

        <h3 class="text-left"><strong>Admission Procedure (Non-NEU SHS Graduate)</strong></h3>
        <p class = "text-left font-mono text-black mb-5">
            Fill out the General Personal Information Sheet thru this link NEU Automate for Application. Submit all the following requirements <br>
            thru this link Admission Requirements Submission Link.
        </p>
        <button class="favorite styled mb-15" type="button">
            Click me
        </button>




    </div>


</div>



<style>
    .neu-pic{
        background-image: url('https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.6435-9/33304793_957288674431016_3750456500468842496_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=e3f864&_nc_ohc=F-hKMZgT0f8AX_qefZ_&_nc_ht=scontent.fmnl3-2.fna&oh=2e41a176e891cbcbbad2f2151de2c5dd&oe=61A7A202');
        width: 100%;
        height: 1000px;
    }

    h3{
        font-size: 25px;
        font-family: 'Catamaran', sans-serif;
        color: #791616;
    }

    .styled {
    border: 0;
    line-height: 2.5;
    padding: 0 20px;
    font-size: 1rem;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    border-radius: 10px;
    background-color: rgba(220, 0, 0, 1);
    background-image: linear-gradient(to top left,
                                      rgba(0, 0, 0, .2),
                                      rgba(0, 0, 0, .2) 30%,
                                      rgba(0, 0, 0, 0));
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
                inset -2px -2px 3px rgba(0, 0, 0, .6);
    }

    .styled:hover {
        background-color: rgba(255, 0, 0, 1);
    }

    .styled:active {
        box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
                    inset 2px 2px 3px rgba(0, 0, 0, .6);
    }
</style>