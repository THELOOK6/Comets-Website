<template>
    <div :class="['header', { 'scrolled': isScrolled }]">
      <nav :class="['navbar', { 'scrolled': isScrolled }]" class="navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="192" height="65" />
          </a>
          <!-- Hamburger Menu Button -->
          <button 
            class="navbar-toggler" 
            @click="toggleMenu" 
            aria-label="Toggle navigation"
            v-if="isMobile">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- Collapsible Menu -->
          <div v-if="menuOpen" class="collapsible-menu">
            <nav class="navigation">
              <a href="/">{{ $t('home') }}</a>
              <a href="/sponsors">{{ $t('sponsor') }}</a>
              <a href="/contact">{{ $t('contact') }}</a>
              <a href="/prototypes">{{ $t('prototype') }}</a>
            </nav>
            <button class="close-menu" @click="toggleMenu">X</button>
          </div>
          <!-- Normal Navbar for Large Screens -->
          <div v-else class="navItemsContainer" v-if="!isMobile">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <nav class="navigation">
                <a href="/">{{ $t('home') }}<span></span></a>
                <a href="/sponsors">{{ $t('sponsor') }}<span></span></a>
                <a href="/contact">{{ $t('contact') }}<span></span></a>
                <a href="/prototypes">{{ $t('prototype') }}<span></span></a>
              </nav>
              <button class="language-toggle" @click="changeLanguage">
                {{ selectedLanguage === 'en' ? 'En' : 'Fr' }}
              </button>
              <nav class="donatebtn">
                <a 
                  href="https://www.jedonneenligne.org/fdets/campagne/ets/challenges/view/e9c0e13d-5e2f-11ee-ac26-001dd8b75df7"
                  target="_blank" 
                  class="btn btn-danger" 
                  role="button">
                  {{ $t('donateBtn') }}
                </a>
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
      menuOpen: false, // Controls collapsible menu visibility
      isMobile: window.innerWidth <= 768, // Check if screen is mobile-sized
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.checkScreenSize);
    this.updateLanguage();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.checkScreenSize);
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
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 768;
      if (!this.isMobile) this.menuOpen = false; // Close menu if switching to desktop view
    },
  },
};
</script>

<style>
.navbar-toggler {
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: white;
}

.collapsible-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  z-index: 1000;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
}

.collapsible-menu .close-menu {
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 18px;
  color: white;
  cursor: pointer;
}
</style>
