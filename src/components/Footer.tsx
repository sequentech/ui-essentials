// SPDX-FileCopyrightText: 2022 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitter, faYoutube, faGithub} from "@fortawesome/free-brands-svg-icons"
import {styled} from "@mui/material/styles"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import Paper, {PaperProps} from "@mui/material/Paper"
import Box from "@mui/material/Box"
import {useTranslation} from "react-i18next"
import {PageBanner} from "./PageBanner"
import {PageLimit} from "../components/PageLimit"

const StyledPaper = styled(Paper)(
    ({theme}) => `
        display: flex;
        background-color: ${theme.palette.grey[300]};
        padding: 40px 0;
        color: ${theme.palette.grey[900]};
    `
)

const SocialWrapper = styled(Box)`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Footer: React.FC<PaperProps> = (args) => {
    const {t} = useTranslation("translations")

    return (
        <StyledPaper {...args}>
            <PageLimit maxWidth="md">
                <PageBanner direction="row" sx={{padding: "14px 0px"}}>
                    <Typography variant="subtitle2">
                        {t("poweredBy")}{" "}
                        <Link href="//sequentech.io/" target="_blank" variant="black">
                            Sequent Tech Inc.
                        </Link>
                    </Typography>
                    <SocialWrapper>
                        <Link href="//twitter.com/Sequent_Tech" target="_blank" variant="black">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </Link>
                        <Link
                            href="//www.youtube.com/results?search_query=sequent+tech"
                            target="_blank"
                            variant="black"
                        >
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </Link>
                        <Link href="//github.com/sequentech/" target="_blank" variant="black">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </Link>
                    </SocialWrapper>
                </PageBanner>
            </PageLimit>
        </StyledPaper>
    )
}
