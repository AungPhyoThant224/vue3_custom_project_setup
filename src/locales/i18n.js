import { createI18n } from "vue-i18n";
import { useAppStore, getAppStore } from "../stores/modules/app";

import messages from "./getLang";

const lang = getAppStore.systemStore.lang;
const i18n = createI18n({
  legacy: false,
  locale: lang.value,
  fallbackLocale: 'en',
  messages: {
    en: { ...messages.en },
    mn: { ...messages.mn },
  },
});

export function changeLang(locale) {
  i18n.global.locale.value = locale;
  useAppStore.systemStore.setLang(locale);
}

export default i18n;
