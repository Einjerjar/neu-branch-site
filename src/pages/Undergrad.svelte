<script>
    import Banner from "@/components/admission/Banner.svelte";
    import BigHeader from "@/components/admission/BigHeader.svelte";
    import Article from "@/components/admission/Article.svelte";

    let bannerName = "Undergrad Procedures";
    let bigTitle = "We are Eranians";
</script>

<main>

<Banner message={bannerName}/>
<div class="mx-60 catamaran">
    <BigHeader bigTitle={bigTitle}/>

    <div class="min-h-full mx-auto max-h-full flex  justify-center text-rose-900 font-medium">
        <div class="items-center">
        <p class=" text-black text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took<br>
            a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, <br>
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the<br>
            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop <br>
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <hr class="bg-black my-15"/>
        </div>
    </div>

    <h2 class="mb-15"><strong>Admission Procedure (NEU SHS Graduates)</strong></h2>

    <Article title="Step 1: Request for Temporary Student ID">
        <p>Request for your Temporary Student ID thru sending the following details to admissionrequirements@neu.edu.ph</p>
            <ul class="mb-10 list-disc ml-10">
                <li>Name: (Last Name, First Name, Middle Name)</li>
                <li>Course Applying: </li>
                <li>Gender: </li>
                <li>Year Graduated: </li>
            </ul>

    </Article>

    <Article title="Step 2: Edit your personal sheet thru NEU Automate">
        <p>Once you received the Temporary Username and Password thru email, You can now edt your
            Personal Information Sheet thru this link NEU Automate for Application</p>
        <ul class="mb-10 list-roman ml-10">
            <li>Enter your log-in credentials (username and password)</li>
            <li>Click Personal Info</li>
            <li>Click Edit Personal Info </li>
            <li>Fill out the General Student Personal Information Sheet (Special characters are not allowed)</li>
            <li>CLick Proceed and Print Personal Info then Save/Print as PDF</li>
        </ul>
    </Article>

    <Article title="Step 3: Submission">
        <p>Submit all the following requirements thru this link Admission Requirements Submission Link
            Admission Requirements for Freshmen</p>
        <ul class="list-disc ml-10">
            <li>General Student Personal Information Sheet (GSPIS)</li>
            <li>PSA Authenticated Birth Certificate</li>
            <li>Senior High School Report Card (F-138) with Graduated Remarks</li>
            <li>2x2 picture with white background</li>
        </ul>
        <p>Admission Requirements for Transferees and Graduate School</p>
        <ul class="mb-10 list-disc ml-10">
            <li>General Student Personal Information Sheet (GSPIS)</li>
            <li>PSA Authenticated Birth Certificate</li>
            <li>Transcript of Records</li>
            <li>Honorable Dismissal / Transfer Credential Certificate</li>
            <li>2x2 picture with white background </li>
        </ul>
    </Article>

    <Article title="Step 4: Admission Approval">
        <p class="max-w-screen-lg mb-30">Upon receipt of the advise from the College Admissions Office on the Approval of admission, you may now log-in thru this link NEU Automate for Student Enrollment using the log-in credentials (Username and Password) that you have created in filling out your General Information Sheet.
        </p>
    </Article>

</div>

</main>

<style>
    .catamaran {
        font-family: 'Catamaran', sans-serif;
        /* color: #791616; */
    }

    h2{
        font-size: 35px;
        font-family: 'Catamaran', sans-serif;
        text-align: center;
        color: #791616;
    }

</style>