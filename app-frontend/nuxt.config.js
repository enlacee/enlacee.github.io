export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.VUE_APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.VUE_APP_DESCRIPTION },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.15.4/css/all.css',integrity: 'sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm', crossorigin: 'anonymous' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/freelancer.css',
  ],

  layout: {
    'default': [],
    'linktree': []
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/utils.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    '@nuxtjs/gtm'
  ],

  // Google Tag Manager (anibalcopitan.com) custum this if you need track this tracker
  gtm: {
    id: 'GTM-MH6GPPL3',
    // enabled: process.env.NODE_ENV === 'production', // Activar solo en producción
    debug: true // Habilitar modo debug
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      source: 'static/icon.png', // ← imagen base desde la cual se generarán los íconos
      fileName: 'icon.png'        // nombre base
    },
    manifest: {
      lang: 'en',
      name: process.env.VUE_APP_NAME || 'Anibal Copitan',
      short_name: 'Anibal',
      description: process.env.VUE_APP_DESCRIPTION,
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: '/nuxt/'
  },
  env: {
    // baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    appName: process.env.VUE_APP_NAME || 'Nuxtjs',
    appTitle: process.env.VUE_APP_TITLE || 'Nuxtjs - Home',
    appSubTitle: process.env.VUE_APP_SUB_TITLE || 'Subtitle Home',
    appBaseUrl: process.env.VUE_APP_BASE_URL || 'https://anibalcopitan.com',
    appUrlBlog: process.env.VUE_APP_URL_BLOG || 'https://blog.anibalcopitan.com',
  },
  /*
   ** Router property -  https://nuxtjs.org/docs/2.x/features/file-system-routing#the-router-property
   */
   router: {
    middleware: ['redirect-to-https']
  },
}
