// SPDX-FileCopyrightText: 2022 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React from "react"
import Image from "mui-image"
import {LanguageMenu} from "./LanguageMenu"
import {PageBanner} from "./PageBanner"
import {PageLimit} from "../components/PageLimit"
import {theme} from "../services/theme"
import LogoImg from "../../public/Sequent_logo_small.png"
import styled from "@emotion/styled"

const HeaderWrapper = styled(PageBanner)`
    background-color: ${theme.palette.lightBackground};
    padding: 36.5px 0;

    @media (max-width: ${theme.breakpoints.values.lg}px) {
        padding: 9px;
    }
`

const StyledLink = styled.a`
    max-height: 100%;
    max-width: 50%;
`

export const Header: React.FC = () => (
    <HeaderWrapper className="header-class" sx={{backgroundColor: theme.palette.lightBackground}}>
        <PageLimit maxWidth="md" sx={{height: {xs: "37px", md: "47px"}}}>
            <PageBanner direction="row" sx={{height: "100%"}}>
                <StyledLink href="//sequentech.io/" target="_blank">
                    <Image src={LogoImg} duration={100} sx={{maxHeight: "100%"}} />
                </StyledLink>
                <LanguageMenu />
            </PageBanner>
        </PageLimit>
    </HeaderWrapper>
)
