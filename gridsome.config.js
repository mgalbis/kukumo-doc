// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/config/*.scss')
      ],
    })
}

const absolutePath = process.env.CI_PAGES_URL
const pathPrefix = new URL(absolutePath).pathname
const siteUrl = absolutePath.replace(pathPrefix, '')


module.exports = {
  siteName: 'Kukumo',
  siteUrl,
  pathPrefix,
  icon: './src/assets/img/logo.svg',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Doc',
        baseDir: 'docs',
      //  route: '/:slug',
        template: './src/templates/Doc.vue',
        plugins: [
          '@gridsome/remark-prismjs',
          ["@mgalbis/remark-prefix-links", { pathPrefix }]
        ]
      }
    },
    // {
    //   use: '@gridsome/vue-remark',
    //   options: {
    //     typeName: 'Doc',
    //     baseDir: 'docs/en',
    //     route: '/en/:slug',
    //     template: './src/templates/Doc.vue',
    //     plugins: [
    //       '@gridsome/remark-prismjs',
    //       ["@mgalbis/remark-prefix-links", { pathPrefix }]
    //     ]
    //   }
    // },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'es',
          'en'
        ],
        fallbackLocale: 'es', // fallback language
        defaultLocale: 'es', // default language
        enablePathRewrite: false, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: false, // rewrite default locale, default: true
        enablePathGeneration: false,
        // routes: {
        //   es: [
        //     {
        //       path: '/',
        //       component: './src/pages/Index.vue'
        //     }
        //   ],
        //   en: [
        //     {
        //       path: '/en/',
        //       component: './src/pages/Index.vue'
        //     }
        //   ]
        // },
        messages: {
          'es': require('./src/assets/locales/es.json'),
          'en': require('./src/assets/locales/en.json'),
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}