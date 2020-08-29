module.exports = {
  head: {
	title: 'Nazym Jumadilova | Frontend Engineer',
	htmlAttrs: {
		lang: 'en'
	},
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
  modules: [
	'@nuxtjs/style-resources',
  ],
  styleResources: {
	scss: './assets/css/main.scss',
  },
  loading: { color: '#f7ba63' },
  build: {
	vendor: ['pts'],
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

