<script setup lang="ts">
// import NavBar from '../components/floatingNavBar.vue'
import NavBar from '../components/RespNavbarFullPage.vue' 
import Footer from '../components/footer.vue'
</script>

<template>

  <main class="home">
    <NavBar />
    <div class="mainContainer">
      <div class="specsDiv">
        <div class="statsContainer">
          <h1 style="color: white; text-align: center; margin-top: 2rem;">Halley</h1>
          <div class="statsCompe">
            <div class="statsMotoStudent">
              <h3 style="color: white; text-align: center; margin-top: 2rem; text-decoration: underline;">Moto Student
                VII</h3>
              <h6 style="color: white; text-align: center; margin-top: 2rem;">{{ $t('3rdRookie') }}</h6>
              <h6 style="color: white; text-align: center; margin-top: 2rem;">{{ $t('Consistency') }}</h6>
              <h6 style="color: white; text-align: center; margin-top: 2rem;">{{ $t('Knockout') }}</h6>
              <h6 style="color: white; text-align: center; margin-top: 2rem;">{{ $t('NorthAmerica') }}</h6>
            </div>

            <div class="stats2024AHRMA">
              <h3 style="color: white; text-align: center; margin-top: 2rem; text-decoration: underline;">2024 AHRMA
                BRIDGESTONE</h3>
              <h6 style="color: white; text-align: center; margin-top: 2rem;">{{ $t('FormulaLightning') }}</h6>
            </div>
          </div>
        </div>
        <div class="halleyImage">
          <picture>
            <source srcset="../assets/imageHaley/varsity/halleyPortrait.png" media="(max-width: 767px)">
            <source srcset="../assets/imageHaley/varsity/sunset-side.jpg" media="(min-width: 768px) and (max-width: 1023px)">
            <img src="../assets/imageHaley/varsity/sunset-side.jpg" alt="Responsive Image">
          </picture>
          <!-- <img src="../assets/imageHaley/varsity/sunset-side.jpg"> -->
        </div>
      </div>

      <!-- Image of the 2024 AHRMA 3rd Place Trophe -->
      <!-- <div>
        <img src="../assets/trophe/2024AHRMA.jpg"
          style=" width: 80vh; height: 100vh; border-radius: 10px; padding: 2%;">
      </div> -->

      <!-- DO NOT REMOVE THE SLIDER, WILL IMPLEMENT AFTER DEPLOYMENT FOR HALLEY SPECIFIC SPONSORS -->
      <!-- <div class="sponsorsSlide">
        <rollingSlide />
      </div> -->

    </div>
    <Footer />
  </main>
</template>

<style>
@font-face {
  font-family: "Helvetica 87 Heavy Condensed Oblique";
  src: url("https://db.onlinewebfonts.com/t/3fe222a6b4ff5a85138b24f64f19e59c.eot");
  src: url("https://db.onlinewebfonts.com/t/3fe222a6b4ff5a85138b24f64f19e59c.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/3fe222a6b4ff5a85138b24f64f19e59c.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/3fe222a6b4ff5a85138b24f64f19e59c.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/3fe222a6b4ff5a85138b24f64f19e59c.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/3fe222a6b4ff5a85138b24f64f19e59c.svg#Helvetica 87 Heavy Condensed Oblique")format("svg");
}


@media (min-width: 1024px) {
  .home {
    min-width: 100vh;
    min-height: 103vh;
    display: block;
    align-items: center;
    background-image: url(../assets/backgrounds/hexagon.svg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  }

  .mainContainer {
    background: transparent;
    display: block;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  /* .sponsorsSlide{
  display: block;
  justify-content: center;
  align-items: center;
   margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 2rem; 
} */

  .specsDiv {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .statsCompe {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }

  .statsMotoStudent {
    grid-area: 1 / 1 / 2 / 2;
  }

  .stats2024AHRMA {
    grid-area: 1 / 2 / 2 / 3;
  }

  .halleyImage>picture>img {
    aspect-ratio: auto;
    height: 60vh;
    border-radius: 50px;
    padding: 2%;
  }

}

@media (min-width: 768px) and (max-width: 1023px) {

  .home {
    min-height: 100vh;
  }

  .specsDiv {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .halleyImage {
    order: 0;
  }

  .halleyImage>picture>img {
    aspect-ratio: auto;
    width: auto;
    height: 50vh;
    border-radius: 50px;
    padding: 2%;
  }

  .statsContainer {
    order: 1;
  }


}

@media (max-width: 767px) {

  .home {
    min-height: 100vh;
  }

  .specsDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .halleyImage {
    order: 0;
  }

  .halleyImage>picture>img {
    aspect-ratio: auto;
    width: auto;
    height: 50vh;
    border-radius: 50px;
    padding: 2%;
  }

  .statsContainer {
    order: 1;
  }
}


h1 {
  font-family: "Helvetica 87 Heavy Condensed Oblique";
}

h6 {
  font-family: "Helvetica 87 Heavy Condensed Oblique";
}
</style>
