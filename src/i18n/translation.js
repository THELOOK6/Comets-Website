import i18n from "@/i18n" 

const Trans = {
    get supportedLocales() {
      return import.meta.env.VITE_SUPPORTED_LOCALES.split(",")
    },
    set currentLocale(newLocale) { // <--- 2
      i18n.global.locale.value = newLocale
    },
    async switchLanguage(newLocale) { // <--- 3
      Trans.currentLocale = newLocale
      document.querySelector("html").setAttribute("lang", newLocale)
    },
    // async routeMiddleware(to, _from, next) {
    //   const paramLocale = to.params.locale
    //   if(!Trans.isLocaleSupported(paramLocale)) {
    //     return next(Trans.guessDefaultLocale())
    //   }
    //   await Trans.switchLanguage(paramLocale)
    //   return next()
    // },
  }
  
  export default Trans