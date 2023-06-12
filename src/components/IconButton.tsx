// SPDX-FileCopyrightText: 2023 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React from "react"
import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome"
import {theme} from "../services/theme"
import {IconButton as MuiIconButton} from "@mui/material"

export interface IconButtonProps extends FontAwesomeIconProps {
    variant?: "primary" | "info" | "warning" | "error" | "success"
}

const ColorMap = {
    primary: theme.palette.black,
    info: theme.palette.blue?.main,
    warning: theme.palette.yellow?.main,
    error: theme.palette.red?.main,
    success: theme.palette.green?.main,
}

export const IconButton: React.FC<IconButtonProps> = ({variant, ...props}) => (
    <MuiIconButton aria-label="close" sx={{color: ColorMap[variant || "primary"]}}>
        <FontAwesomeIcon {...props} />
    </MuiIconButton>
)
