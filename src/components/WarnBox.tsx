// SPDX-FileCopyrightText: 2023 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React from "react"
import {styled} from "@mui/material/styles"
import Box from "@mui/material/Box"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faWarning} from "@fortawesome/free-solid-svg-icons"

const WarnContainer = styled(Box)`
    background-color: #fff7d9;
    padding: 17px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    border-radius: 4px;
    line-height: 19px;
    color: #837032;
    align-items: center;
`

interface WarnBoxProps {
    message: string
}

export const WarnBox: React.FC<WarnBoxProps> = ({message}) => (
    <WarnContainer>
        <FontAwesomeIcon icon={faWarning} size="sm" />
        <Box>{message}</Box>
    </WarnContainer>
)
