<template>
  <div>
    <!-- Variant = color of the navabr -->
    <b-navbar toggleable="lg" type="dark" variant="transparent">
      <b-navbar-brand href="/">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.jpg"
          width="125"
          height="125"
          href="/"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <RouterLink to="/">Home</RouterLink>
          </b-nav-item>
          <b-nav-item>
            <RouterLink to="/about">About</RouterLink>
          </b-nav-item>
          <b-nav-item>
            <RouterLink to="/contact">Contact</RouterLink>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
navbar {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 1rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1s ease-in-out;
  margin-bottom: 2rem;
  background-color: black;
}
</style>
