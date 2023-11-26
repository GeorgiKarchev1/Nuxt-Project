import path from 'path';

export default {
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  router: {
    extendRoutes(routes) {
      routes.push(
        { name: 'index', path: '/', component: path.resolve(__dirname, 'pages/index.vue') },
        { name: 'about', path: '/about', component: path.resolve(__dirname, 'pages/about.vue') },
        { name: 'portfolio', path: '/portfolio', component: path.resolve(__dirname, 'pages/portfolio.vue') },
        { name: 'contact', path: '/contact', component: path.resolve(__dirname, 'pages/contact.vue') }
      );
    },
  },
};
