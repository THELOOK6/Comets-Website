import { createI18n } from "vue-i18n";

const messages = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      contact: "Contact"
    },
    home: {
      header: "Welcome to the Home Page",
      created_by: "This tutorial was brought to you by Lokalise."
    },
    about: {
      header: "About us"
    },
    contact: {
      header: "Contact us"
    },
    locale: {
        en: "English",
        fr: "French"
      },
    donate:{
        header: "Donate Now"
    },
    rights:{
        header: "All rights reserved. Copyright © 2024 ComETS"
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      contact: "Contactez-nous"
    },
    home: {
      header: "Bienvenue a la page d'acceuil    ",
      created_by: "Ce tutoriel vous est offert par Lokalise."
    },
    about: {
      header: "À propos de nous"
    },
    contact: {
        header: "Contactez-nous"
    },
    locale: {
        en: "Anglais",
        fr: "Français"
    },
    donate:{
        header: "Faire un don"
    },
    rights:{
        header: "Tous droits réservés. Droit d'auteur © 2024 ComETS"
   },
  }
}

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages
  })
