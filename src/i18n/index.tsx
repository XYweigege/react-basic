import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translate_en from './en.json'
import translate_zh from './zh.json'

const pathName = window.location.pathname
const pathArr = pathName.split('/')
const enArr = pathArr.filter(item => item.toLocaleLowerCase() === 'en')

const resources = {
  en: {
    translation: translate_en
  },
  zh: {
    translation: translate_zh
  }
}
i18n.use(initReactI18next).init({
  fallbackLng: enArr.length > 0 ? 'en' : 'zh',
  lng: enArr.length > 0 ? 'en' : 'zh',
  debug: true,
  resources: resources,
  interpolation: {
    escapeValue: false
  }
})
export default i18n
