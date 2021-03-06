import Vue from "vue";
// 前面cookies與local storange課程有用到，直接調用
import Cookies from "js-cookie";
import VueI18n from "vue-i18n";
import twLocale from "./zh_tw";
import enLocale from "./en";
import jpLocale from "./jp";
// 課程中都有使用到element UI，這裡需要element UI 的locale設置
import locale_TW from "element-ui/lib/locale/lang/zh-TW";
import locale_EN from "element-ui/lib/locale/lang/en";
import locale_JA from "element-ui/lib/locale/lang/ja";
import locale from "element-ui/lib/locale";

// 全域啟用i18n
Vue.use(VueI18n);

// element UI 所使用的多語切換 i18n.t(key, value) = $t(key, value)
locale.i18n((key, value) => i18n.t(key, value));

// 定義語系使用的key name，我們可以將外部的語系檔案在 messages 中引用
const messages = {
    en: {
        ...enLocale,
        ...locale_EN,
    },
    zh_tw: {
        ...twLocale,
        ...locale_TW,
    },
    jp: {
        ...jpLocale,
        ...locale_JA,
    },
};

const languageKey = "language"; // 定義寫入Cookies時使用的名稱
const chooseLanguage = Cookies.get("language"); // 定義取得Cookies的常數

// 定義取得Cookies的函數並匯出
export const getLanguage = () => {
    Cookies.get(languageKey);
    if (chooseLanguage) {
        return chooseLanguage;
    }

    // 如果沒有選擇任何一項語言
    const language = navigator.language.toLowerCase(); // 將瀏覽器回傳語value字串統一為小寫
    const locales = Object.keys(messages); // { en, zh_tw, jp }
    for (const locale of locales) {
        if (language.indexOf(locale) > -1) {
            return locale;
        }
    }
    return "zh_tw"; // 沒選擇語言的時候，預設轉到繁體中文
};

// 定義設置Cookies的函數並匯出，之後我們會在各組件中呼叫它來使用
export const setLanguage = (language) => {
    i18n.locale = language;
    Cookies.set(languageKey, language);
};

const i18n = new VueI18n({
    // set locale
    // options: en | zh | es
    locale: getLanguage(),
    messages,
    // 避免i18n會因為一點小事刷你整頁的console
    silentTranslationWarn: true,
});

export default i18n;