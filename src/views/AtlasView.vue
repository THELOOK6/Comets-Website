<script setup lang="ts">
// import NavBar from '../components/floatingNavBar.vue'
import NavBar from '../components/RespNavbarFullPage.vue'
import Footer from '../components/footer.vue'
</script>

<template>
  <div class="AtlasMainContainer">
    <div class="coming-soon">
      <div class="background"></div>
      <div class="overlay"></div>
      <NavBar />
      <div class="content">
        <!-- <h1>Nouvelle Conception</h1> -->
        <h2>{{ $t('comingSoon') }}</h2>
      </div>
      <Footer />
    </div>
  </div>
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

/* Prevent scrolling */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@media (min-width: 1024px) {
  .AtlasMainContainer {
    width: 100%;
    height: 100vh;
    /* Full viewport height */
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  .coming-soon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* Centers content vertically */
    align-items: center;
    /* Centers content horizontally */
    height: 100vh;
    /* Ensures the container always fills the viewport height */
    overflow: hidden;
    /* Prevents unwanted scrolling */
    position: relative;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../assets/Designer (5).jpg') no-repeat center center/cover;
    filter: blur(10px);
    z-index: -2;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .navbar {
    opacity: 0;
    animation: fadeIn 2s forwards;
  }

  .footer {
    opacity: 0;
    animation: fadeIn 2s forwards;
  }

  .content {
    flex-grow: 1;
    /* Expands to fill available space */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    opacity: 0;
    animation: fadeIn 8s forwards;
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

  /* Prevent any hidden overflow */
  * {
    max-width: 100%;
    box-sizing: border-box;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .AtlasMainContainer {
    width: 100%;
    height: 100vh;
    /* Full viewport height */
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  .coming-soon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* Centers content vertically */
    align-items: center;
    /* Centers content horizontally */
    height: 100vh;
    /* Ensures the container always fills the viewport height */
    overflow: hidden;
    /* Prevents unwanted scrolling */
    position: relative;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../assets/Designer (5).jpg') no-repeat center center/cover;
    filter: blur(10px);
    z-index: -2;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .navbar {
    opacity: 0;
    animation: fadeIn 2s forwards;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }

  .footer {
    opacity: 0;
    animation: fadeIn 2s forwards;
  }

  .content {
    flex-grow: 1;
    /* Expands to fill available space */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    opacity: 0;
    animation: fadeIn 8s forwards;
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

  /* Prevent any hidden overflow */
  * {
    max-width: 100%;
    box-sizing: border-box;
  }
}

@media (max-width: 767px) {
  .AtlasMainContainer {
    width: 100%;
    height: 100vh;
    /* Full viewport height */
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  .coming-soon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* Centers content vertically */
    align-items: center;
    /* Centers content horizontally */
    height: 100vh;
    /* Ensures the container always fills the viewport height */
    overflow: hidden;
    /* Prevents unwanted scrolling */
    position: relative;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../assets/Designer (5).jpg') no-repeat center center/cover;
    filter: blur(10px);
    z-index: -2;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .navbar {
    opacity: 0;
    animation: fadeIn 2s forwards;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }

  .footer {
    opacity: 0;
    animation: fadeIn 2s forwards;
  }

  .content {
    flex-grow: 1;
    /* Expands to fill available space */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    opacity: 0;
    animation: fadeIn 8s forwards;
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

  /* Prevent any hidden overflow */
  * {
    max-width: 100%;
    box-sizing: border-box;
  }
}
</style>
