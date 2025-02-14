<script setup lang="ts">
// import floatingNavBar from '../components/floatingNavBar.vue'
import NavBar from '../components/RespNavbarFullPage.vue'
import Footer from '../components/footer.vue'
</script>

<template>
    <div class="mainContainer">
        <NavBar />
        <div class="background"></div>
        <div class="cards">
            <div class="indiv">
                <!-- <router-link to="/halley" class="card halley">
                    <p class="tip"><img src="../assets/imageHaley/halley-logo.png"></p>
                </router-link>
                <router-link to="/atlas" class="card atlas">
                    <span class="titleAtlas">ATLAS</span>
                </router-link> -->
                <a href="/halley" class="card halley">
                    <p class="tip"><img src="../assets/imageHaley/halley-logo.png"></p>
                </a>
                <a href="/atlas" class="card atlas">
                    <span class="titleAtlas">ATLAS</span>
                </a>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style>
@font-face {
    font-family: 'Rapido Racers Two';
    font-style: normal;
    font-weight: normal;
    src: local('Rapido Racers Two'), url('../assets/fonts/RapidoRacersTwo-ywOpe.woff') format('woff');
}

@font-face {
    font-family: "Helvetica 87 Heavy Condensed Oblique";
    src: url("https://db.onlinewebfonts.com/t/3fe222a6b4ff5a85138b24f64f19e59c.eot");
    src: url("https://db.onlinewebfonts.com/t/3fe222a6b4ff5a85138b24f64f19e59c.eot?#iefix") format("embedded-opentype"),
        url("https://db.onlinewebfonts.com/t/3fe222a6b4ff5a85138b24f64f19e59c.woff2") format("woff2"),
        url("https://db.onlinewebfonts.com/t/3fe222a6b4ff5a85138b24f64f19e59c.woff") format("woff"),
        url("https://db.onlinewebfonts.com/t/3fe222a6b4ff5a85138b24f64f19e59c.ttf") format("truetype"),
        url("https://db.onlinewebfonts.com/t/3fe222a6b4ff5a85138b24f64f19e59c.svg#Helvetica 87 Heavy Condensed Oblique") format("svg");
}

h1 {
    font-size: 4rem;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
}

h2 {
    font-family: "Helvetica 87 Heavy Condensed Oblique";
    font-size: 7rem;
}


body,
html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    /* Prevent horizontal scroll */
    width: 100%;
    /* Ensure it takes the full width */
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

/* Global box-sizing to avoid overflow issues */
* {
    box-sizing: border-box;
}

.mainContainer {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
}


.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    /* Use viewport width to prevent overflow */
    height: 100%;
    background: url(../assets/backgrounds/hexagon.svg) no-repeat center center/cover;
    z-index: -2;
}


.navbar {
    opacity: 0;
    animation: fadeIn 2s forwards;
    width: 100%;
    z-index: 1000;
  }

.footer {
    opacity: 0;
    animation: fadeIn 2s forwards;
    z-index: 1;
}

.content {
    position: relative;
    height: 65vh;
    text-align: center;
    justify-content: center;
    align-content: center;
    color: white;
    opacity: 0;
    animation: fadeIn 8s forwards;
}

.card{
    z-index: 1;
}

@media (min-width: 1024px) {


    .cards {
        position: relative;
        height: 65vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        opacity: 0;
        animation: fadeIn 8s forwards;
        gap: 15px;
    }

    .cards .indiv {
        display: flex;
        flex-direction: row;
        color: white;
        gap: 15px;
        width: 80%;
        height: 80%;
        border-radius: 10px;
        align-items: center;
        justify-content: center;

    }

    .cards .indiv .card {
        display: flex;
        flex-direction: row;
        color: white;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        border-radius: 10px;
        border-color: red;
        border-width: medium;
        width: 100%;
        height: 100%;
        padding: 1rem;
        box-sizing: border-box;
    }

    .cards .indiv .halley {
        font-family: "Helvetica 87 Heavy Condensed Oblique";
        font-size: 4rem;
        background-color: #007e9e;
        background: url(../assets/imageHaley/haley.jpg) no-repeat center center/cover;

    }

    .cards .indiv .atlas {
        font-family: "Helvetica 87 Heavy Condensed Oblique";
        font-size: 4rem;
        background-color: #0062ff;
        background: url('../assets/Designer (5).jpg') no-repeat center center/cover;
    }

    .cards .card {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        height: 100px;
        width: 100px;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        transition: 400ms;
    }

    .cards .card p.tip {
        font-size: 1em;
        font-weight: 700;
    }

    .cards .card p.tip img {
        width: 60%;
        height: 60%;
        border-radius: 10px;
    }


    .cards .card p.second-text {
        font-size: .7em;
    }

    .cards .card:hover {
        transform: scale(1.2, 1.2);
        z-index: 10;
    }

    .indiv:hover>.card:not(:hover) {
        filter: blur(10px);
        transform: scale(0.9, 0.9);
    }

    .cards .indiv .card p.tip,
    .cards .indiv .card .linkAtlas {
        margin: 0;
    }


    .titleAtlas {
        font-family: "Rapido Racers Two";
        font-size: 4rem;
        color: white;
    }


}

@media (min-width: 768px) and (max-width: 1024px) {

    .cards {
        position: relative;
        height: 65vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        opacity: 0;
        animation: fadeIn 8s forwards;
        gap: 15px;
    }

    .cards .indiv {
        display: flex;
        flex-direction: column;
        color: white;
        gap: 15px;
        width: 80%;
        height: 80%;
        border-radius: 10px;
        align-items: center;
        justify-content: center;

    }

    .cards .indiv .card {
        display: flex;
        flex-direction: row;
        color: white;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        border-radius: 10px;
        border-color: red;
        border-width: medium;
        width: 100%;
        height: 100%;
        padding: 1rem;
        box-sizing: border-box;
    }

    .cards .indiv .halley {
        font-family: "Helvetica 87 Heavy Condensed Oblique";
        font-size: 4rem;
        background-color: #007e9e;
        background: url(../assets/imageHaley/haley.jpg) no-repeat center center/cover;
    }

    .cards .indiv .atlas {
        font-family: "Helvetica 87 Heavy Condensed Oblique";
        font-size: 4rem;
        background-color: #0062ff;
        background: url('../assets/Designer (5).jpg') no-repeat center center/cover;
    }

    .cards .card {
        flex: 1;
        min-height: 100px;
        /* Optionally set a minimum height */
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        transition: 400ms;
    }


    .cards .card p.tip {
        font-size: 1em;
        font-weight: 700;
    }

    .cards .card p.tip img {
        width: 40%;
        height: 40%;
        border-radius: 10px;
    }

    .cards .card p.second-text {
        font-size: .7em;
    }

    .cards .indiv .card p.tip,
    .cards .indiv .card .linkAtlas {
        margin: 0;
    }

    .titleAtlas {
        font-family: "Rapido Racers Two";
        font-size: 4rem;
        color: white;
    }

}

@media (max-width: 767px) {
    
    .cards {
        position: relative;
        height: 65vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        opacity: 0;
        animation: fadeIn 8s forwards;
        gap: 15px;
    }

    .cards .indiv {
        display: flex;
        flex-direction: column;
        color: white;
        gap: 15px;
        width: 80%;
        height: 80%;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
    }

    .cards .indiv .card {
        display: flex;
        flex-direction: row;
        color: white;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        border-radius: 10px;
        border-color: red;
        border-width: medium;
        width: 100%;
        height: 100%;
        padding: 1rem;
        box-sizing: border-box;
    }

    .cards .indiv .halley {
        font-family: "Helvetica 87 Heavy Condensed Oblique";
        font-size: 4rem;
        background-color: #007e9e;
        background: url(../assets/imageHaley/haley.jpg) no-repeat center center/cover;
    }

    .cards .indiv .atlas {
        font-family: "Helvetica 87 Heavy Condensed Oblique";
        font-size: 4rem;
        background-color: #0062ff;
        background: url('../assets/Designer (5).jpg') no-repeat center center/cover;
    }

    .cards .card {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        height: 100px;
        width: 100px;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        transition: 400ms;
    }

    .cards .card p.tip {
        font-size: 1em;
        font-weight: 700;
    }

    .cards .card p.tip img {
        width: 60%;
        height: 60%;
        border-radius: 10px;
    }

    .cards .card p.second-text {
        font-size: .7em;
    }

    .cards .indiv .card p.tip,
    .cards .indiv .card .linkAtlas {
        margin: 0;
    }


    .titleAtlas {
        font-family: "Rapido Racers Two";
        font-size: 4rem;
        color: white;
    }

}
</style>
