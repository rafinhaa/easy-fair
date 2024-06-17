import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { default as ptBR } from "./resources/pt-BR.json"

export enum Locales {
  "pt-BR" = "pt-BR",
}

i18n.use(initReactI18next).init({
  resources: {
    [Locales["pt-BR"]]: {
      translation: ptBR,
    },
  },
  lng: Locales["pt-BR"],
  fallbackLng: Locales["pt-BR"],

  compatibilityJSON: "v3",

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
