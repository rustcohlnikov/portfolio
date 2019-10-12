module.exports = {
  buildDir: 'public',
  /*
  ** Headers of the page
  */
  head: {
    title: 'another frontend engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~assets/css/global.css',
    '~assets/css/variables.scss',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#F66361' },
  /*
  ** Build configuration
  */
  build: {
    styleResources: {
      scss: './assets/css/variables.scss',
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

