<template>
  <div :class="['header', { 'scrolled': isScrolled }]">
    <nav :class="['navbar', { 'scrolled': isScrolled }]" class="navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="192" height="65" />
        </a>
        <div class="navItemsContainer">
          <!-- Hamburger button for mobile -->
          <button 
            class="hamburger-button" 
            :class="{ 'active': isMobileMenuOpen }"
            @click="toggleMobileMenu"
            aria-label="Toggle navigation"
          >
            <span v-if="!isMobileMenuOpen">☰</span>
            <span v-else>X</span>
          </button>
          
          <!-- Mobile overlay - Only shown when menu is open -->
          <div 
            v-if="isMobileMenuOpen"
            class="mobile-nav-overlay"
            @click="closeMobileMenu"
          ></div>
          
          <div 
            class="collapse navbar-collapse" 
            :class="{ 'show': isMobileMenuOpen }" 
            id="navbarTogglerDemo02"
          >
            <nav class="navigation">
              <a href="/" @click="closeMobileMenu">{{ $t('home') }}<span></span></a>
              <a href="/sponsors" @click="closeMobileMenu">{{ $t('sponsor') }}<span></span></a>
              <a href="/contact" @click="closeMobileMenu">{{ $t('contact') }}<span></span></a>
              <a href="/prototypes" @click="closeMobileMenu">{{ $t('prototype') }}<span></span></a>
            </nav>
            
            <!-- Language toggle button -->
            <button class="language-toggle" @click="changeLanguage">
              {{ selectedLanguage === 'en' ? 'En' : 'Fr' }}
            </button>
            
            <nav class="donatebtn">
              <a 
                href="https://www.jedonneenligne.org/fdets/campagne/ets/challenges/view/57020bb8-de75-11ef-a492-0050560131d0"
                target="_blank" 
                class="btn btn-danger" 
                role="button"
                @click="closeMobileMenu"
              >
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
      isMobileMenuOpen: false,
      selectedLanguage: localStorage.getItem('selectedLanguage') || this.$i18n.locale,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.updateLanguage();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    document.body.style.overflow = '';
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.isScrolled = scrollTop > 50;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = '';
    },
    changeLanguage() {
      this.selectedLanguage = this.selectedLanguage === 'en' ? 'fr' : 'en';
      this.$i18n.locale = this.selectedLanguage;
      localStorage.setItem('selectedLanguage', this.selectedLanguage);
      if (this.isMobileMenuOpen) {
        this.closeMobileMenu();
      }
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
/* Desktop Styles */
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
    color: white;
    text-decoration: none;
  }

  /* Hide mobile elements on desktop */
  .hamburger-button,
  .mobile-nav-overlay {
    display: none;
  }
}

/* Mobile menu button styles */
.hamburger-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 15px;
  z-index: 1000;
  position: relative;
  color: white;
  font-size: 24px;
}

/* Mobile overlay */
.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 98;
  opacity: 0;
  animation: fadeIn 0.3s forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Mobile styles */
@media (max-width: 1023px) {
  .hamburger-button {
    display: block;
  }

  .navbar-collapse {
    position: fixed;
    top: 0;
    left: -300px;
    height: 100vh;
    width: 300px;
    background-color: rgba(0, 0, 0, 0.95);
    padding: 80px 20px 20px;
    transition: transform 0.3s ease-in-out;
    z-index: 99;
    transform: translateX(0);
  }

  .navbar-collapse.show {
    transform: translateX(300px);
  }

  .navigation {
    flex-direction: column;
    align-items: flex-start;
  }

  .navigation a {
    margin: 10px 0;
    font-size: 1.2em;
    display: block;
    width: 100%;
    color: white;
    text-decoration: none;
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  .navbar-collapse.show .navigation a {
    opacity: 1;
    transform: translateX(0);
    transition-delay: 0.2s;
  }

  .language-toggle {
    margin: 20px 0;
    background-color: transparent;
    color: white;
    border: red 2px solid;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  .navbar-collapse.show .language-toggle {
    opacity: 1;
    transform: translateX(0);
    transition-delay: 0.3s;
  }

  .donatebtn {
    margin-top: 20px;
  }

  .donatebtn a {
    color: white;
    background-color: red;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  .navbar-collapse.show .donatebtn a {
    opacity: 1;
    transform: translateX(0);
    transition-delay: 0.4s;
  }
}

/* Mobile landscape styles */
@media (min-width: 360px) and (max-width: 576px) {
  .container.width {
    width: 100vw;
  }

  .navbar {
    background-color: transparent;
  }

  .logo {
    font-size: 2em;
    color: white;
    user-select: none;
  }
}
</style>