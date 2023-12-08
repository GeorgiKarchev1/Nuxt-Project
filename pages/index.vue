<template>
  <div id="app">
    <header>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
      <nav class="desktop-nav">
        <client-only>
        <nuxt-link to="#me" class="desktop-nav-link">Home</nuxt-link>
        <nuxt-link to="/portfolio" class="desktop-nav-link"
          >Portfolio</nuxt-link
        >
        <nuxt-link to="/contact" class="desktop-nav-link">Contact</nuxt-link>
        </client-only>
      </nav>
      <section class="diagonal-background">
        <div class="centered-text">
          <h1 class="georgi-name">
            <span class="black-text">Georgi</span>
            <span class="white-text">Karchev</span>
          </h1>
        </div>
          <Whitesidecontent />
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
  </div>
  <div class="social-buttons">
    <button @click="goToGitHub"><Icon name="uil:github" color="black" class="git"/></button>
    <button @click="goToLinkedIn"><Icon name="fa6-brands:linkedin" color="black" class="linkding"/></button>
    <button @click="goToEmail"><Icon name="material-symbols:mail" color="black" class="mail"/></button>
    <button @click="goToInstagram"><Icon name="mdi:instagram" color="black" class="insta"/></button>
  </div>
    <div class="menu-wrapper" :class="{ 'menu-open': isMenuOpen }">
      <button v-if="isMenuOpen" @click="closeMenu" class="close-button">
        <span>&times;</span>
      </button>
      <div class="menu-content" v-show="isMenuOpen">
        <!-- Add the v-show directive -->
        <ul class="menu">
          <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
            <client-only>
            <nuxt-link v-if="item === 'About'" to="/about" class="menu-link">{{
              item
            }}</nuxt-link>
            <nuxt-link
              v-else-if="item === 'Portfolio'"
              to="/portfolio"
              class="menu-link"
              >{{ item }}</nuxt-link>
              <a v-else href="#" class="menu-link" @click="closeMenu">{{
                item
              }}</a>
              </client-only>
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
      console.log('Clicked on GitHub button'); // Добавен дебъг
      window.open('https://github.com/your-github-username', '_blank');
    },

    goToLinkedIn() {
      console.log('Clicked on LinkedIn button'); // Добавен дебъг
      window.open('https://www.linkedin.com/in/your-linkedin-username', '_blank');
    },

    goToEmail() {
      console.log('Clicked on Email button'); // Добавен дебъг
      this.$router.push("/email");
    },

    goToInstagram() {
      console.log('Clicked on Instagram button'); // Добавен дебъг
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
