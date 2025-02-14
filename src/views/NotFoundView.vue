<script setup>
  // import NavBar from '@/components/floatingNavBar.vue'
  import NavBar from '../components/RespNavbarFullPage.vue' 
  import Footer from '@/components/footer.vue'

</script>

<template>
  <main class="home">
    <NavBar />
    <div class="card" style="width: 80%;">
      <div class="card-body">
        <div class="leftCard">
          <img src="@/assets/uturn.jpg" class="card-img-top">
        </div>
        <div class="rightCard">
          <h4 class="card-title">404</h4>
          <p class="card-text">Oops - I think you made a wrong Turn</p>
          <a href="/" class="btn btn-danger">Go Home</a>
        </div>
      </div>
    </div>
    <Footer />
  </main>
</template>

<style>
.home {
  display: block;
  align-items: center;
  background-image: url(../assets/backgrounds/hexagon.svg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.card {
  margin: 0 auto;
  margin-top: 10%;
  margin-bottom: 10%;
}

.leftCard {
  float: left;
  width: 20%;
  padding: 10px;
}

.rightCard {
  float: right;
  width: 80%;
  padding: 10px;
}
</style>
