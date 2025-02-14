<!-- REGULAR NAVBAR WITHOUT  -->

<template>

  <div class="header">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="192" height="65" href="/" />
        </a>
        <div class="navItemsContainer">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <nav class="navigation">
              <a href="/">Acceuil<span></span></a>
              <a href="/sponsors">Commanditaires<span></span></a>
              <a href="/contact">Nous Rejoindre<span></span></a>
              <!-- Team Members Page to be added later on after website publishing -->
              <!-- <a href="/team">Notre Équipe<span></span></a> -->
              <a href="/prototypes">Prototypes<span></span></a>
              <!-- Moved Individual Prototype Pages to Prototypes Page -->
              <!-- <a href="/halley">Halley 2.0<span></span></a>
                <a href="/zephyr">Zephyr<span></span></a> -->
            </nav>
            <nav class="donatebtn">
              <a href="https://www.jedonneenligne.org/fdets/campagne/ets/challenges/view/e9c0e13d-5e2f-11ee-ac26-001dd8b75df7"
                target="_blank" class="btn btn-danger" role="button">Faire un don</a>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>

export default {
  data() {
    return {
      navItems: [
        { name: 'Acceuil', route: { name: 'home' } },
        { name: 'À propos', route: { name: 'about' } },
        { name: 'Sponsors', route: { name: 'sponsors' } },
        { name: 'Contactez-nous', route: { name: 'contact' } },
      ],
      activeTab: 0 // Default active tab index
    };
  },
  methods: {
    setActiveTab(index) {
      this.activeTab = index;
    }
  },
};

</script>

<style>
@media screen and (min-width: 1024px) {

  .navbar {
    background-color: transparent;
  }

  .navItemsContainer .navigation {
    float: right;
    display: block;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
  }



  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
  }


  .logo {
    font-size: 2em;
    color: white;
    user-select: none;
  }


  .navItemsContainer .navigation a {
    position: relative;
    font-size: 1.1em;
    color: white;
    font-weight: 500;
    text-decoration: none;
    margin-right: 10px;
    padding: 8px 15px;
    transition: .5s;
  }

  .navItemsContainer .donatebtn a {
    position: relative;
    font-size: 1.1em;
    color: white;
    font-weight: 500;
    text-decoration: none;
    padding: 6px 15px;
    transition: .5s;
  }

  .navItemsContainer .navigation a:hover {
    color: red;
  }

  .navItemsContainer .navigation a span {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 10%;
    background: red;
    border-radius: 30px;
    z-index: 0;
    transform: scale(0);
    transition: .5s;
  }

  .navItemsContainer .navigation a:hover span {
    transform: scale(1);
  }
}

@media (min-width: 360px) and (max-width: 576px) {

  .container.width {
    width: 100vw;
  }

  .navbar {
    background-color: transparent;
  }

  .navItemsContainer .navigation {
    float: right;
    display: block;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
  }

  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
  }


  .logo {
    font-size: 2em;
    color: white;
    user-select: none;
  }


  .navItemsContainer .navigation a {
    position: relative;
    font-size: 1.1em;
    color: white;
    font-weight: 500;
    text-decoration: none;
    margin-right: 10px;
    padding: 8px 15px;
    transition: .5s;
  }

  .navItemsContainer .donatebtn a {
    position: relative;
    font-size: 1.1em;
    color: white;
    font-weight: 500;
    text-decoration: none;
    padding: 6px 15px;
    transition: .5s;
  }

  .navItemsContainer .navigation a:hover {
    color: red;
  }

  .navItemsContainer .navigation a span {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 10%;
    background: red;
    border-radius: 30px;
    z-index: 0;
    transform: scale(0);
    transition: .5s;
  }

  .navItemsContainer .navigation a:hover span {
    transform: scale(1);
  }
}
</style>