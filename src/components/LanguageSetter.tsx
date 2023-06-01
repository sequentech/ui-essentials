// SPDX-FileCopyrightText: 2022 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React, {PropsWithChildren, useEffect} from "react"
import {useTranslation} from "react-i18next"

interface Props {
    language: string
}

export const LanguageSetter: React.FC<PropsWithChildren<Props>> = ({children, language}) => {
    const {i18n} = useTranslation("translations")

    useEffect(() => {
        i18n.changeLanguage(language)
    }, [language])

    return <>{children}</>
}
