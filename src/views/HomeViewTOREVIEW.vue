<!-- 
        PAGE IS TO BE REVIEWED IN THE FUTURE
                  
                  DO NOT DELETE
-->


<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
// import carousel from '../components/carousel.vue'
// import NavBar from '../components/TransparentNavBar.vue'
// import NavBarResponsive from '../components/navbarResponsive.vue'
// import Footer from '../components/footer.vue'
// import contactform from '@/components/contactform.vue'
// import arrow from '@/components/arrows.vue'
</script>

<template>

  <main class="home" >
    <NavBar />
    <div class="mainContainer" >
      <div class="carouselContainer">
        <carousel />
      </div>
        <div class="firstDiv">
        <!-- <arrow /> -->
        <div>
          <!-- <h1 style="color: white; text-align: center; margin-top: 2rem;">Bienvenue à ComETS</h1>
          <h6 style="color: white; text-align: center; margin-top: 2rem;">ComETS est une association étudiante de l'École de technologie supérieure (ÉTS) <br> 
                                                                          qui a pour mission de promouvoir un espace dynamique et innovant où <br>
                                                                          les étudiants passionnés par l'ingénierie et la technologie se réunissent <br> 
                                                                          pour construire des motos électriques et participer à des compétitions internationales.</h6> -->
          <img src="@/assets/logo.png" style="width: 80vh; height: 29vh;"></img>
          <h1 style="color: white; text-align: center;">Concevoir</h1>
          <h1 style="color: white; text-align: center;">Construire</h1>
          <h1 style="color: white; text-align: center;">Conquérir</h1>
        </div>
        <div>
          <!-- <img src="../assets/banner.png" style=" width: 80vw; height: 30vw; border-radius: 10px;"> -->
          <img src="../assets/imageHaley/halley_empty.png" style=" width: 60vh; height: 60vh; border-radius: 10px;">
        </div>
      </div>
      <div class="card" style="
          background-color: #27284E;
          margin-top: 2rem;
          display: block;
          justify-content: center;
          align-items: center;
          border-color: black;
          border-width: medium;
          color: white;
          margin-left: auto;
          margin-right: auto;
          width: 85%;
          height: 350px;
          border-radius: 10px;
          transition: 0.3s;">
        <img src="../assets/imageHaley/haleycourse2.jpg" class="image" style=" width: 33%; height: 100%; border-top-left-radius: 10px; border-bottom-left-radius: 10px; ">
        <img src="../assets/imageHaley/compEspagne.jpg" class="image" style=" width: 33%; height: 100%;">
        <img src="../assets/imageHaley/haleycourse.jpg" class="image" style=" width: 34%; height: 100%; border-top-right-radius: 10px; border-bottom-right-radius: 10px;">
        <!-- <div class="card-body">
          <h5 class="card-title">Haley</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div> -->
      </div>
      <div class="thirdDiv">
        <h1 style="color: white; text-align: center; margin-top: 2rem;">Third Div</h1>
      </div>
      <contactform />
    </div>
    <Footer />
  </main>
</template>

<style>
/* @media (min-width: 1024px) {
  .home {
    min-width: 100vh;
    min-height: 100vh;
    display: block;
    align-items: center;
    background-image: url(../assets/backgrounds/hexagon.svg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  }
}

.mainContainer {
  background: transparent;
  display: block;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.carouselContainer {
  background-color: black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section {
  color: white;
  display: block;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
  height: 100%;
  border-radius: 10px;
  transition: 0.3s;
  padding: 2rem;
  background-color: rgba(255, 255, 255, .05);  
  backdrop-filter: blur(5px);
}

.card{
  background-color: black;
  margin-top: 2rem;
  display: block;
  justify-content: center;
  align-items: center;
  border-color: black;
  border-width: medium;
  color: white;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.cardContainer{
  width: 50rem; 
  background: transparent;
  width: 85%;  
  border-color: black; 
  border-width: medium; 
  color: white;
} */

</style>
