<template>
  <div class="container">
    <nav class="nav">
      <div class="nav-left">
        <router-link class="nav-item" to="/">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bikes Garage">
        </router-link>
      </div>
      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
      <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div class="nav-right nav-menu">
        <router-link class="nav-item" to="shop">Shop</router-link>
        <router-link class="nav-item" to="community">Community</router-link>
        <router-link class="nav-item" to="directory">Directory</router-link>
        <router-link class="nav-item" to="stolen-bikes">Stolen Bikes</router-link>
        <div class="nav-item">
          <div class="field">
            <login></login>
          </div>
        </div>
        <div class="nav-item">
          <div class="field">
            <sign-up></sign-up>
          </div>
        </div>
        
      </div>
    </nav>
  </div>
</template>
<script>
import 'vue-awesome/icons/sign-in';
import 'vue-awesome/icons/user-plus';
import Login from '@/Pages/Users/Login';
import SignUp from '@/Pages/Users/SignUp';

export default {
  components: {
    Login,
    SignUp,
  },
};
</script>
