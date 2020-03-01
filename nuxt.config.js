module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nazym Jumadilova | Frontend Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nazym Jumadilova - Frontend Engineer' }
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
  loading: { color: '#f7ba63' },
  /*
  ** Build configuration
  */
  build: {
    styleResources: {
      scss: './assets/css/main.scss',
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

