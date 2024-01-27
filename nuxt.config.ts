// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n:{
lazy:true,
langDir:'lang/',
strategy:"prefix_except_default",
defaultLocale :'en',

locales: [
    {
      code: 'en',
      iso: 'en-US',
      dir: 'ltr',
      file:'en-US.json'
    },
    {
      code: 'es',
      iso: 'es-ES',
      dir: 'ltr',

      file:'en-US.json'
    },
    {
      code: 'ar',
      iso: 'ar-SA',
      dir: 'rtl',
      file:'ar-SA.json'
    }
  ]
  },

  devtools: { enabled: false },
  app: {
    head: {
      title: "Nuxt Blog",
      meta: [{ charset: 'utf-8', }, { name: 'viewport' }, { content: 'width=device-width, initial-scale=1' }
        , { hid: "description", name: 'description', content: "Nuxt Blog meta desc" },
        ,
      { name: 'format-detection', content: 'telephone=no' }
      ],
     
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',

        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: "/favicon.ico"
        },

        {
          rel: "stylesheet",
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
        },
        {
        rel: "stylesheet",
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
      }
      ], script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript'
        },
        {
          src: 'https://code.jquery.com/jquery-3.7.1.min.js',
          type: 'text/javascript'
        }
      ]

    },

  },
})
