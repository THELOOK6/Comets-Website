<template>
  <div :class="['header', { 'scrolled': isScrolled }]">
    <nav :class="['navbar', { 'scrolled': isScrolled }]" class="navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="192" height="65" />
        </a>
        <div class="navItemsContainer">
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <nav class="navigation">
              <a href="/">{{ $t('home') }}<span></span></a>
              <a href="/sponsors">{{ $t('sponsor') }}<span></span></a>
              <a href="/contact">{{ $t('contact') }}<span></span></a>
              <a href="/prototypes">{{ $t('prototype') }}<span></span></a>
            </nav>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Button to switch language -->
            <button class="language-toggle" @click="changeLanguage">{{ selectedLanguage === 'en' ? 'En' : 'Fr' }}</button>
            <nav class="donatebtn">
              <a href="https://www.jedonneenligne.org/fdets/campagne/ets/challenges/view/e9c0e13d-5e2f-11ee-ac26-001dd8b75df7"
                target="_blank" class="btn btn-danger" role="button">{{ $t('donateBtn') }}</a>
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
      isScrolled: false,
      selectedLanguage: localStorage.getItem('selectedLanguage') || this.$i18n.locale,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.updateLanguage();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.isScrolled = scrollTop > 50;
    },
    changeLanguage() {
      this.selectedLanguage = this.selectedLanguage === 'en' ? 'fr' : 'en';
      this.$i18n.locale = this.selectedLanguage;
      localStorage.setItem('selectedLanguage', this.selectedLanguage);
    },
    updateLanguage() {
      if (localStorage.getItem('selectedLanguage')) {
        this.selectedLanguage = localStorage.getItem('selectedLanguage');
        this.$i18n.locale = this.selectedLanguage;
      }
    }
  },
};
</script>

<style>
@media screen and (min-width: 1024px) {

  .language-toggle {
    background-color: transparent;
    color: white;
    border: red 2px solid;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 30px;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .language-toggle:hover {
    background-color: darkred;
  }

  .navbar {
    background-color: transparent;
    transition: all 0.4s ease-in-out;
    padding: 30px 100px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }

  .navbar.scrolled {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
    padding: 15px 50px;
    position: fixed;
    top: 10px;
    transform: translateX(-50%) scale(0.95);
    width: 80%;
    z-index: 999;
    border-radius: 10px;
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

  .navItemsContainer .navigation .navbar-toggler {
    position: relative;
    /* border: black 2px solid; */
    margin-right: 1rem;
    transition: .5s;
  }

  .navItemsContainer .navigation select {
    position: relative;
    border: black 2px solid;
    margin-right: 1rem;
    transition: .5s;
  }

  .navItemsContainer .navigation .select-selected {
    background-color: red;
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

  .navItemsContainer .donatebtn a {
    background-color: red;
    padding: 10px 20px;
    border-radius: 5px;
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

  .navItemsContainer .donatebtn a {
    position: relative;
    font-size: 1.1em;
    color: white;
    font-weight: 500;
    text-decoration: none;
    padding: 6px 15px;
    transition: .5s;
  }
}
</style>