import { defineNuxtConfig } from 'nuxt'

export default {
  css: ['~/assets/css/main.css'],
  modules:  ['nuxt-icon'],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};
