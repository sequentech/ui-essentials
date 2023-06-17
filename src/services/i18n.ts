// SPDX-FileCopyrightText: 2022 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import i18n, {i18n as I18N} from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from "react-i18next"
import englishTranslation from "../translations/en"
import spanishTranslation from "../translations/es"

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            en: englishTranslation,
            es: spanishTranslation,
        },
        fallbackLng: "es",
        debug: true,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: ".",

        interpolation: {
            escapeValue: false,
        },
    })

export const getLanguages = (i18n: I18N) => Object.keys(i18n.services.resourceStore.data)

export default i18n
