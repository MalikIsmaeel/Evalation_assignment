
// @ts-nocheck


export const localeCodes =  [
  "en",
  "es",
  "ar"
]

export const localeMessages = {
  "en": [{ key: "../lang/en-US.json", load: () => import("../lang/en-US.json" /* webpackChunkName: "locale_C_58_C_58_Users_user_Documents_GitHub_nuxt_app_lang_en_US_json" */), cache: true }],
  "es": [{ key: "../lang/en-US.json", load: () => import("../lang/en-US.json" /* webpackChunkName: "locale_C_58_C_58_Users_user_Documents_GitHub_nuxt_app_lang_en_US_json" */), cache: true }],
  "ar": [{ key: "../lang/ar-SA.json", load: () => import("../lang/ar-SA.json" /* webpackChunkName: "locale_C_58_C_58_Users_user_Documents_GitHub_nuxt_app_lang_ar_SA_json" */), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": ""
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "en",
      "iso": "en-US",
      "dir": "ltr",
      "files": [
        "lang/en-US.json"
      ]
    },
    {
      "code": "es",
      "iso": "es-ES",
      "dir": "ltr",
      "files": [
        "lang/en-US.json"
      ]
    },
    {
      "code": "ar",
      "iso": "ar-SA",
      "dir": "rtl",
      "files": [
        "lang/ar-SA.json"
      ]
    }
  ],
  "defaultLocale": "en",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": true,
  "langDir": "lang/",
  "rootRedirect": null,
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "i18nModules": []
}

export const nuxtI18nOptionsDefault = {
  "experimental": {
    "localeDetector": ""
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [],
  "defaultLocale": "",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": false,
  "langDir": null,
  "rootRedirect": null,
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false
}

export const nuxtI18nInternalOptions = {
  "__normalizedLocales": [
    {
      "code": "en",
      "iso": "en-US",
      "dir": "ltr",
      "files": [
        {
          "path": "lang/en-US.json"
        }
      ]
    },
    {
      "code": "es",
      "iso": "es-ES",
      "dir": "ltr",
      "files": [
        {
          "path": "lang/en-US.json"
        }
      ]
    },
    {
      "code": "ar",
      "iso": "ar-SA",
      "dir": "rtl",
      "files": [
        {
          "path": "lang/ar-SA.json"
        }
      ]
    }
  ]
}

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

