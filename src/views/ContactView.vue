<script setup lang="ts">
// import NavBar from '../components/floatingNavBar.vue'
import NavBar from '../components/RespNavbarFullPage.vue' 
import Footer from '../components/footer.vue'
import contactform from '@/components/contactform.vue'
import Map from '@/components/Map.vue'
</script>

<template>
  <div class="Contact">
    <NavBar />
    <div class="content">
      <div class="mapContainer">
        <iframe class="Map" allowfullscreen="" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5491.523246577794!2d-73.562965!3d45.495101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4e9357b01ffef3ef!2s%C3%89cole%20de%20Technologie%20Sup%C3%A9rieure!5e0!3m2!1sfr!2sca!4v1641331931733!5m2!1sfr!2sca" style="border: 0px; animation-play-state: running;"></iframe>
      </div>
      <contactform />
    </div>
    <Footer />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .Contact {
    min-width: 100vw;
    min-height: 100vh;
    display: block;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/backgrounds/hexagon.svg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 95%;
    height: 85vh;
    /* background-color: red; */
  }

  .Map {
    width: 100%;
    height: 300px;
  }

  .mapContainer {
    display: block;
    /* Changed from block to flex */
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    /* Center the mapContainer */
    width: 85%;
    height: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

@media (max-width: 768px) {

  .mapContainer {
    width: inherit;
    height: 60vw;
    padding: 1rem;
  }

  .Contact {
    min-width: 100vw;
    min-height: 100vh;
    display: block;
    align-items: center;
    justify-content: center;
    background-image: url(../assets/backgrounds/hexagon.svg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  }

  .content {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 0.1fr);
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    /* width: 100%;
    height: 100%; */
    /* background-color: red; */
  }

  .Map{
    width: 100%;
    height: 100%;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {

  .mapContainer {
    width: inherit;
    height: 30vw;
  }
  
  .Contact {
    min-width: 100vw;
    min-height: 100vh;
    display: block;
    align-items: center;
    background-image: url(../assets/backgrounds/hexagon.svg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 95%;
    height: 100%;
    /* background-color: red; */
  }

  .Map {
    width: 100%;
    height: 100%;
  }
}
</style>