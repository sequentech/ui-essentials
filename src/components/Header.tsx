// SPDX-FileCopyrightText: 2022 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React from "react"
import Image from "mui-image"
import {LanguageMenu} from "./LanguageMenu"
import {PageBanner} from "./PageBanner"
import { PageLimit } from "../components/PageLimit"
import { theme } from "../services/theme"

export const Header: React.FC = () => (
    <PageBanner sx={{backgroundColor: theme.palette.lightBackground}}>
        <PageLimit maxWidth="md" sx={{padding: "8px !important"}}>
            <PageBanner direction="row" sx={{padding: 0}}>
                <a href="//sequentech.io/" target="_blank">
                    <Image src="Sequent_logo_small.png" height="27px" duration={100} />
                </a>
                <LanguageMenu />
            </PageBanner>
        </PageLimit>
    </PageBanner>
)
