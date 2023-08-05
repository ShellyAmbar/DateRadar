import i18next from "i18next";
import {I18nManager as RNI18nManager} from "react-native";
import * as config from "../../config/i18n";
import languageDetector from "./language-detector";
import translationLoader from "./translation-loader";

const i18n = {
  /**
   * @returns {Promise}
   */
  init: () => {
    return new Promise((resolve, reject) => {
      i18next
        .use(languageDetector)
        .use(translationLoader)
        .init(
          {
            compatibilityJSON: "v3",
            fallbackLng: config.fallback,
            ns: config.namespaces,
            defaultNS: config.defaultNamespace,
            interpolation: {
              escapeValue: false,
            },
          },
          (error) => {
            if (error) {
              return reject(error);
            }
          }
        );

      console.log(i18n, i18next, RNI18nManager);
      resolve();
    });
  },
  /**
     * @param {string} key
   
     * @returns {string}
     */
  t: (key) => i18next.t(key),
  /**
   * @returns {string}
   */
  get locale() {
    return i18next.language;
  },
  /**
   * @returns {'LTR' | 'RTL'}
   */
  get dir() {
    return i18next.dir().toUpperCase();
  },
  /**
   * @returns {boolean}
   */
  get isRTL() {
    return this.dir === "RTL";
  },
  /**
   * Similar to React Native's Platform.select(),
   * i18n.select() takes a map with two keys, 'rtl'
   * and 'ltr'. It then returns the value referenced
   * by either of the keys, given the current
   * locale's direction.
   *
   * @param {Object<string,mixed>} map
   * @returns {mixed}
   */
  select(map) {
    const key = this.isRTL ? "rtl" : "ltr";
    return map[key];
  },
};
export const t = i18n.t;
export default i18n;
