<template>
  <div id="app">
    <header>
      <nav class="desktop-nav">
        <nuxt-link to="/about" class="desktop-nav-link">About</nuxt-link>
        <nuxt-link to="/portfolio" class="desktop-nav-link">Portfolio</nuxt-link>
        <nuxt-link to="/contact" class="desktop-nav-link">Contact</nuxt-link>
      </nav>
      <section class="diagonal-background">
        <div class="centered-text">    
      <h1 class="georgi-name">
        <span class="black-text">Georgi</span>
        <span class="white-text">Karchev</span>
      </h1>
        </div>
        <div class="content">
          <h1 class="ime">Georgi Karchev</h1>
          <p class="opisanie">I am a freelance video editor and developer who likes creating useful software and websites.</p>
        </div>
        <Whitesidecontent />
      </section>
      <nav class="navbar">
        <div class="logo-container">
          <img :src="logoImage" alt="logo" class="logo">
        </div>
        <button @click="toggleMenu" class="hamburger-button" :class="{ 'active': isMenuOpen }">
          <span></span>
          <span></span>    
          <span></span>
        </button>
      </nav>
    </header>
    <div class="menu-wrapper" :class="{ 'menu-open': isMenuOpen }">
      <button v-if="isMenuOpen" @click="closeMenu" class="close-button">
        <span>&times;</span>
      </button>
      <div class="menu-content" v-show="isMenuOpen"> <!-- Add the v-show directive -->
        <ul class="menu">
          <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
            <nuxt-link v-if="item === 'About'" to="/about" class="menu-link">{{ item }}</nuxt-link>
            <nuxt-link v-else-if="item === 'Portfolio'" to="/portfolio" class="menu-link">{{ item }}</nuxt-link>
            <a v-else href="#" class="menu-link" @click="closeMenu">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import gotovoLogo from '../assets/gotovo_logo_izrod1.png';
import theRealOne from '../assets/the real one.png'; // Updated image path
import "@/assets/css/main.css";


export default {
  
  data() {
    return {
      isMenuOpen: false,
      menuItems: [
      'Portfolio', 
      'About',
       'Contact', 
    ],
      logoImage: undefined,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      liceHeight: 100,
    };
  },
  mounted() {
    this.checkWindowSize();
    window.addEventListener('resize', this.checkWindowSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkWindowSize);
  },
  methods: {
    checkWindowSize() {
      if (window.innerWidth <= 770) {
        this.logoImage = theRealOne; // Updated image assignment
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
  },
};
</script>