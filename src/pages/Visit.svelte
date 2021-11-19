<script>
    const main = "./images/NEU_MAIN.png"
    const gensan = "./images/NEU_GENSAN.png"
    const pampanga = "./images/NEU_PAMPANGA.png"
    const lipa = "./images/NEU_LIPA.png"
</script>



<div class="w-full h-25 bg-primary-900 text-white text-5xl font-bold py-7 text-center fade-in">
    UNIVERSITY BRANCHES
</div>


<div class=" bg-gray-200 fade-in">
    <div class="container mx-auto shadow-lg bg-white rounded py-5">

        <div class="mx-auto items-center max-w-screen-md shadow-lg">
            <div class="image mb-1 ">
                <img src = {main} alt=main>
                
                <div class="overlay">
                    <div class="desc text-4xl text-center">
                        New Era University
                        <p class="text-2xl">
                            Quezon City (Main Branch)
                        </p>
                    </div>
                </div>
            </div>

            <div class="image mb-1">
                <img src = {gensan} alt=gensan>
                <div class="overlay">
                    <div class="desc text-4xl text-center">
                        New Era University
                        <p class="text-2xl">
                            General Santos City
                        </p>
                    </div>
                </div>
            </div>

            <div class="image mb-1">
                <img src = {pampanga} alt=pampanga>
                <div class="overlay">
                    <div class="desc text-4xl text-center">
                        New Era University
                        <p class="text-2xl">
                            Pampanga
                        </p>
                    </div>
                </div>
            </div>

            <div class="image mb-1">
                <img src = {lipa} alt=lipa>
                <div class="overlay">
                    <div class="desc text-4xl text-center">
                        New Era University
                        <p class="text-2xl">
                            Lipa City
                        </p>
                    </div>
                </div>
            </div>

            
                    

        </div>

        <div class="text-primary-900 text-5xl font-bold border-b-6 border-primary-900 py-8 mb-5 mt-5 py-7 text-left px-25 fade-in">
            School Facilities
        </div>

        <div class="container2">
            <div class="text-center py-50 p-15">
                <div class="font-bold mb-1">
                    Professional Schools Library
                </div>
                <p>Alorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
            </div>
            <div class="justify-center p-15">
                <img class="display-block ml-auto position-relative" src="http://www.neu.edu.ph/law/wp-content/uploads/2017/01/Law-Library-3.jpg" alt=libLaw>
            </div>

            <div class="justify-center p-15">
                <img class="display-block ml-auto position-relative" src="http://www.neu.edu.ph/law/wp-content/uploads/2017/01/Law-Library-3.jpg" alt=libLaw>
            </div>
            <div class="text-center py-50 p-15">
                <div class="font-bold mb-1">
                    Professional Schools Library
                </div>
                <p>Alorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
            </div>
        </div>

    </div>
    
    

</div>


<style>
    .container2{
        margin: 20px auto;
        background-color:white;
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-row: auto auto;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }


    /* .box{
        background-color:#333;
        padding:20px;
        border-radius:10px;
        color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:40px;
        font-family:sans-serif;
    } */

    .image{
        position: relative;

    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        color: #ffffff;
        font-family: 'Quicksand', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.25s;
    }

    .overlay > * {
        transform: translateY(20px);
        transition: transform 0.25s;
    }

    .overlay:hover {
        cursor: pointer;
        opacity: 1;
    }

    .overlay:hover > * {
        transform: translateY(0);
    }

    

  



















    /* fade in effect */
    .fade-in {
        animation: fadeIn ease 3s;
        -webkit-animation: fadeIn ease 3s;
        -moz-animation: fadeIn ease 3s;
        -o-animation: fadeIn ease 3s;
        -ms-animation: fadeIn ease 3s;
    }
    @keyframes fadeIn {
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
    }
    }

    @-moz-keyframes fadeIn {
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
    }
    }

    @-webkit-keyframes fadeIn {
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
    }
    }

    @-o-keyframes fadeIn {
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
    }
    }

    @-ms-keyframes fadeIn {
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
    }
</style>