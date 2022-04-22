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
  ],
  buildModules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['./assets/css/main.scss'],
  },
  loading: { color: '#f7ba63' },
}

