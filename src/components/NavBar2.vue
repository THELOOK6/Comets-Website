<template>

  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img
            alt="Vue logo"
            class="logo"
            src="@/assets/logo.jpg"
            width="110"
            height="60"
            href="/"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-for="(item, index) in navItems" :key="index">
              <router-link :to="item.route" class="nav-link" :class="{ 'active': activeTab === index }" @click="setActiveTab(index)">
                {{ item.name }}
              </router-link>
            </li>
            <li class="donateBtn">
              <a class="btn btn-danger" href="https://www.jedonneenligne.org/fdets/campagne/ets/challenges/view/e9c0e13d-5e2f-11ee-ac26-001dd8b75df7  " role="button">Faire un don</a>
            </li>
          </ul>
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
        { name: 'Notre équipe', route: { name: 'team'}}, 
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

.navbar{
  background-color: black;
}


.navbar-nav .nav-item {
  float: left;
  display: block;
  /* color: #f2f2f2; */
  text-align: center;
  /* padding: 10px 12px; */
  text-decoration: none;
  font-size: 17px;
  /* border-bottom: 3px solid transparent; */
}

.donateBtn{
    padding-left: 10px;
    padding-top: 2px;
    padding-bottom: 2px ;
}



/* .navbar-nav .nav-item:active {
    text-decoration: underline;
    border-bottom: 3px solid red;
    border-bottom-color: #f19238;
    color: #f19238;
    background-color: yellow;
} */



.navbar-nav .nav-item-centered {
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.nav-link.active {
  border-bottom: 3px solid red; /* Change color as needed */
  transition: color 0.5s;
}


</style>
