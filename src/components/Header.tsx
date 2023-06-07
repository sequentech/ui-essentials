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
import Button from "@mui/material/Button"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons"
import {Box} from "@mui/material"
import {useTranslation} from "react-i18next"

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

export interface LogoutButtonprops {
    logoutFn?: () => void
}

export const LogoutButton: React.FC<HeaderProps> = ({logoutFn}) => {
    const {t} = useTranslation()

    return (
        <Button variant="actionbar">
            <FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" />
            <Box component="span" sx={{display: {xs: "none", md: "block"}}}>
                {t("logout")}
            </Box>
        </Button>
    )
}

export interface HeaderProps {
    logoutFn?: () => void
}

export const Header: React.FC<HeaderProps> = ({logoutFn}) => (
    <HeaderWrapper className="header-class" sx={{backgroundColor: theme.palette.lightBackground}}>
        <PageLimit maxWidth="md" sx={{height: {xs: "37px", md: "47px"}}}>
            <PageBanner direction="row" sx={{height: "100%"}}>
                <StyledLink href="//sequentech.io/" target="_blank">
                    <Image src={LogoImg} duration={100} sx={{maxHeight: "100%"}} />
                </StyledLink>
                <Box display="flex">
                    <LanguageMenu />
                    {logoutFn ? <LogoutButton logoutFn={logoutFn} /> : null}
                </Box>
            </PageBanner>
        </PageLimit>
    </HeaderWrapper>
)
