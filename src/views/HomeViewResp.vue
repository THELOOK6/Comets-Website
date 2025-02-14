<script setup>
// import NavBar from '../components/floatingNavBar.vue'
import NavBar from '../components/RespNavbarFullPage.vue' 
import Footer from '../components/footer.vue'
import contactform from '@/components/contactform.vue'
import arrow from '@/components/arrows.vue'
import slider from '@/components/slider.vue'
import carousel from '@/components/new_carousel.vue'


</script>

<template>

  <main class="home">
    <div class="frontPage">
      <NavBar />
      <div class="frontPage-content">
        <div class="slogan-container">
          <!-- <p class="indivSlogan">{{ $t('slogan') }}</p> -->
        </div>
        <div class="arrow-container">
          <arrow />
        </div>
      </div>
      <button class="sticky-button">
        <a href="https://formulaires.etsmtl.ca/ClubEtudiantAdhesion" target="_blank" class="sticky-button"
          role="button">{{ $t('joinUs') }}</a>
      </button>
    </div>
    <div class="mainContainer">
      <div class="infoContainer">
        <div class="infoText">
          <h1 style="color: white; text-align: center; margin-top: 2rem;">{{ $t('WhoWeAre') }}</h1>
          <h6 style="color: white; text-align: justify; margin-top: 2rem;">{{ $t('WhoWeAreText') }}</h6>
        </div>
        <div class="vertical-line"></div>
        <div class="imageContainer">
          <!-- <img src="../assets/banner.png" style=" width: 80vw; height: 30vw; border-radius: 10px;"> -->
          <!-- <video src="../assets/imageHaley/soudage.mp4" muted autoplay loop style="max-width: 40%; height: auto;"></video> -->
          <img class="whoWeAreImage" src="../assets/imageHaley/haley.jpg">
        </div>
      </div>
      <div class="carouselContainer">
        <carousel /> <!-- Added for now since its easier to use than vueper-slides-->
      </div>
      <div class="infoContainer">
        <div class="imageContainer">
          <img class="innovationImage" src="../assets/imageHaley/varsity/stripped.jpg">
          <!-- <video src="../assets/imageHaley/varsity/" muted autoplay loop
            style="max-width: 60%; height: auto; border-radius: 10px; "></video> -->
          <!-- <img src="../assets/imageHaley/haley.jpg" style=" width: 60vh; height: 60vh; border-radius: 10px;"> -->
        </div>
        <div class="vertical-line"></div>
        <div class="infoText">
          <h1 style="color: white; text-align: center; margin-top: 2rem;">{{ $t('Innovation') }}</h1>
          <h6 style="color: white; text-align: justify; margin-top: 2rem;">{{ $t('InnovationText') }}</h6>
        </div>
      </div>
      <contactform />
    </div>
    <Footer />
  </main>
</template>


<script>
export default {
  data() {
    return {
      words: ["Concevoir", "Construire", "Conquérir"],
    };
  },
  methods: {
    getStyle(index) {
      return {
        color: "red",
        marginLeft: `${index * 250}px`, /* Adjust the step size as needed */
      };
    },
  },
};
</script>

<style>
/* General Styles */

.home {
  display: block;
  align-items: center;
  background-image: url(../assets/backgrounds/hexagon.svg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@font-face {
  font-family: 'Rapido Racers Two';
  font-style: normal;
  font-weight: normal;
  src: local('Rapido Racers Two'), url('../assets/fonts/RapidoRacersTwo-ywOpe.woff') format('woff');
}

/* Responsive Styles for Mobile Devices */
@media (max-width: 767px) {

  .frontPage {
    /* background-image: url(@/assets/frontPage2.png); */
    background-image: url(@/assets/halleyFrontPagePortrait.png);
    height: 100vh;
    width: 100vw;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .frontPage-content {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    position: absolute;
    top: 25%;
    left: 10%;
    /* transform: translateY(+30%); */
    text-align: left;
    color: white;
    width: 80%;
    height: 70%;
  }

  .arrow-container {
    grid-row-start: 2;
  }

  .sticky-button {
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: transparent;
    color: white;
    border: red 2px solid;
    width: 30%;
    height: 7%;
    border-radius: 5px;
    transition: background-color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    z-index: 1000;
  }

  .vertical-line {
    height: 0px;
    width: 0%;
    background-color: red;
  }

  .imageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .infoContainer {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.05fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    justify-items: center;
    align-items: center;

  }

  .infoText {
    display: flex;
    flex-direction: column;
    color: white;
    width: 70%;
  }

  .slogan {
    color: red;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }

  .home {
    background-size: cover;
  }

  .firstDiv {
    flex-direction: column;
    align-items: center;
  }

  .firstDiv img {
    width: 80vw;
    height: auto;
  }

  .carouselContainer {
    height: auto;
  }

  .whoWeAreImage {
    aspect-ratio: auto;
    width: 80%;
    height: auto;
    border-radius: 10px;
  }

  .innovationImage {
    aspect-ratio: auto;
    width: 80%;
    height: auto;
    border-radius: 10px;
  }

}

/* Responsive Styles for Tablets and Smaller Laptops */
@media (min-width: 768px) and (max-width: 1024px) {

  .frontPage {
    /* background-image: url(@/assets/frontPage2.png); */
    background-image: url(@/assets/halleyFrontPagePortrait.png);
    height: 100vh;
    width: 100vw;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .frontPage-content {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    position: absolute;
    top: 25%;
    left: 10%;
    /* transform: translateY(+30%); */
    text-align: left;
    color: white;
    width: 80%;
    height: 70%;
  }

  .arrow-container {
    grid-row-start: 2;
  }

  .sticky-button {
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: transparent;
    color: white;
    border: red 2px solid;
    width: 30%;
    height: 7%;
    border-radius: 5px;
    transition: background-color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    z-index: 1000;
  }

  .vertical-line {
    height: 0px;
    width: 0%;
    background-color: red;
  }

  .imageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .infoContainer {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.05fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    justify-items: center;
    align-items: center;

  }

  .carouselContainer{
    padding: 2rem;
  }

  .infoText {
    display: flex;
    flex-direction: column;
    color: white;
    width: 70%;
  }

  .slogan {
    color: red;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }

  .home {
    background-size: cover;
  }

  .firstDiv {
    flex-direction: column;
    align-items: center;
  }

  .firstDiv img {
    width: 80vw;
    height: auto;
  }

  .carouselContainer {
    height: auto;
  }

  .whoWeAreImage {
    aspect-ratio: auto;
    width: 80%;
    height: auto;
    border-radius: 10px;
  }

  .innovationImage {
    aspect-ratio: auto;
    width: 80%;
    height: auto;
    border-radius: 10px;
  }


}

/* Styles for Larger Screens (Desktops/Laptops) */
@media (min-width: 1024px) {

  .sticky-button {
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: transparent;
    color: white;
    border: red 2px solid;
    width: 15%;
    height: 7%;
    border-radius: 5px;
    transition: background-color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    z-index: 1000;
  }

  .sticky-button:hover {
    background-color: darkred;
  }

  .infoText {
    display: flex;
    flex-direction: column;
    color: white;
    width: 70%;
  }

  .infoContainer {
    display: grid;
    grid-template-columns: 1fr 0.01fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    justify-items: center;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .h1 {
    color: white;
    text-align: center;
    margin-top: 2rem;
  }

  .vertical-line {
    width: 2px;
    height: 550px;
    background-color: red;
  }

  .arrow-container2 {
    display: flex;
    justify-content: center;
    /* Center the arrow horizontally */
    align-items: flex-end;
    /* Align the arrow to the bottom */
    padding-bottom: 2rem;
    /* Adjust spacing from the bottom of the page */
  }

  .indivSlogan {
    font-family: "Rapido Racers Two";
    font-size: 4rem;
    font-weight: normal;
    text-align: left;
    margin-left: 0;
    /* Remove additional margin */
  }

  .frontPage-content {
    display: grid;
    grid-template-columns: 1fr 0.05fr 1fr;
    grid-template-rows: 1fr 0.05fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    position: absolute;
    top: 30%;
    left: 10%;
    /* transform: translateY(+30%); */
    text-align: left;
    color: white;
    width: 80%;
    height: 70%;
  }

  .slogan-container {
    grid-area: 1 / 1 / 2 / 2;
    transform: translateY(+10%);
  }

  .arrow-container {
    grid-area: 2 / 2 / 3 / 3;
  }

  .frontPage {
    /* background-image: url(@/assets/frontPage2.png); */
    background-image: url(@/assets/main-background3.png);
    height: 100vh;
    width: 100vw;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .slogan {
    color: red;
    font-size: 3rem;
    font-weight: bold;
    text-align: left;
    margin-left: 0;
    /* Remove additional margin */
  }

  .home {
    min-width: 100vh;
    min-height: 100vh;
  }

  .firstDiv {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 2rem;
    flex-direction: row;
  }

  .firstDiv img {
    width: 80vh;
    height: auto;
  }

  .thirdDiv {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 2rem;
    flex-direction: row;
  }

  .thirdDiv video {
    width: 80vh;
    height: auto;
  }

  .videoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
  }

  .carouselContainer {
    height: 100%;
  }

  .whoWeAreImage {
    width: 60vh;
    height: 60vh;
    border-radius: 10px;
  }

  .innovationImage {
    width: 60vh;
    height: 60vh;
    border-radius: 10px;
  }
}
</style>
