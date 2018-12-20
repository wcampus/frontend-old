const pkg = require('./package')
const nodeExternals = require("webpack-node-externals")

module.exports = {
  mode: 'universal',
  head: {
    title: "Webcampus",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // loading: { color: '#3B8070' },
  css: [
    'element-ui/lib/theme-default/index.css'
  ],
  sassResources: ["~/assets/styles/combine.sass"],
  plugins: [
    "~/plugins/axios",
    "~/plugins/font-awesome",
    { src: "~/plugins/nuxt-client-init.js", ssr: false },
    '@/plugins/element-ui'
  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-sass-resources-loader',
    ["nuxt-i18n", require("./i18n/config")]
  ],
  axios: {
    host: "localhost",
    prefix: "/api/",
    port: "8000"
  },
  build: {
    vendor: ["vue-awesome"],
    postcss: [
      require("postcss-nested")(),
      require("postcss-responsive-type")(),
      require("postcss-hexrgba")(),
      require("autoprefixer")()
    ],
    extend(config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
        config.module.rules.find(
          el => el.loader === "vue-loader"
        ).options.loaders.i18n =
          "@kazupon/vue-i18n-loader"
      }

      if (isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [
              /es6-promise|\.(?!(?:js|json)$).{1,5}$/i,
              /^vue-awesome/
            ]
          })
        ]
      }
    }
  }
}
