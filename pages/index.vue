<template>
  <div id="app">
    <header>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
      <nav class="desktop-nav">
        <nuxt-link to="#me" class="desktop-nav-link">Home</nuxt-link>
        <nuxt-link to="/portfolio" class="desktop-nav-link"
          >Portfolio</nuxt-link
        >
        <nuxt-link to="/contact" class="desktop-nav-link">Contact</nuxt-link>
      </nav>
      <section class="diagonal-background">
        <div class="centered-text">
          <h1 class="georgi-name">
            <span class="black-text">Georgi</span>
            <span class="white-text">Karchev</span>
          </h1>
        </div>
        <section id="whiteside-content">
          <Whitesidecontent />
        </section>
      </section>
      <nav class="navbar">
        <div class="logo-container">
          <img :src="logoImage" alt="logo" class="logo" />
        </div>
        <button
        @click="toggleMenu"
        class="hamburger-button"
        :class="{ active: isMenuOpen }"
        >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  </header>
  <div class="content">
   <h1 class="georgi">GEORGI</h1>
   <h1 class="karchev">KARCHEV</h1>
   <div class="social-buttons">
  <UButton @click="goToGitHub"><Icon name="uil:github" color="white" class="git"/></UButton>
  <UButton @click="goToLinkedIn"><Icon name="fa6-brands:linkedin" color="white" class="linkding"/></UButton>
  <UButton @click="goToEmail"><Icon name="material-symbols:mail" color="white" class="mail"/></UButton>
  <UButton @click="goToInstagram"><Icon name="mdi:instagram" color="white" class="insta"/></UButton>
</div>
  </div>
    <div class="menu-wrapper" :class="{ 'menu-open': isMenuOpen }">
      <button v-if="isMenuOpen" @click="closeMenu" class="close-button">
        <span>&times;</span>
      </button>
      <div class="menu-content" v-show="isMenuOpen">
        <!-- Add the v-show directive -->
        <ul class="menu">
          <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
            <nuxt-link v-if="item === 'About'" to="/about" class="menu-link">{{
              item
            }}</nuxt-link>
            <nuxt-link
              v-else-if="item === 'Portfolio'"
              to="/portfolio"
              class="menu-link"
              >{{ item }}</nuxt-link
            >
            <a v-else href="#" class="menu-link" @click="closeMenu">{{
              item
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import gotovoLogo from '../assets/gotovo_logo_izrod1.png';
import theRealOne from '../assets/the real one.png';
import '@/assets/css/main.css';

export default {
  data() {
    return {
      isMenuOpen: false,
      menuItems: ['Portfolio', 'About', 'Contact'],
      logoImage: undefined,
    };
  },

  methods: {
    checkWindowSize() {
      if (window.innerWidth <= 768) {
        this.logoImage = theRealOne;
      } else {
        this.logoImage = gotovoLogo;
      }
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    closeMenu() {
      this.isMenuOpen = false;
    },

    goToGitHub() {
      window.open('https://github.com/your-github-username', '_blank');
    },

    goToLinkedIn() {
      window.open('https://www.linkedin.com/in/your-linkedin-username', '_blank');
    },

    goToEmail() {
      this.$router.push("/email");
    },

    goToInstagram() {
      window.open('https://www.instagram.com/your-instagram-username', '_blank');
    },
  },

  mounted() {
    this.checkWindowSize();
    window.addEventListener('resize', this.checkWindowSize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.checkWindowSize);
  },
};
</script>