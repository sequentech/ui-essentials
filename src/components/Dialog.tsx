// SPDX-FileCopyrightText: 2023 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React, {PropsWithChildren} from "react"
import DialogTitle from "@mui/material/DialogTitle"
import MaterialDialog from "@mui/material/Dialog"
import {Backdrop, Box, Button} from "@mui/material"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faTimesCircle,
    faExclamationCircle,
    faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons"
import styledEmotion from "@emotion/styled"
import {styled} from "@mui/material/styles"
import {Icon} from "./Icon"
import {IconButton} from "./IconButton"

const StyledBackdrop = styledEmotion(Backdrop)`
    opacity: 0.5 !important;
`

const BlueIcon = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.palette.brandColor};
`

const CloseIcon = styled(FontAwesomeIcon)``

export interface DialogProps extends PropsWithChildren {
    handleClose: (value: boolean) => void
    open: boolean
    title: string
    cancel?: string
    ok: string
    variant?: "warning" | "info" | "action"
}

export const Dialog: React.FC<DialogProps> = ({
    children,
    handleClose,
    open,
    title,
    cancel,
    ok,
    variant,
}) => {
    const okVariant = "primary"
    const faIcon = "info" === variant ? faExclamationCircle : faExclamationTriangle
    const infoVariant = "action" === variant ? "error" : variant
    const cancelVariant = "info" === variant ? "cancel" : "solidWarning"
    const closeDialog = () => handleClose(false)
    const clickOk = () => handleClose(true)

    return (
        <MaterialDialog onClose={closeDialog} open={open} slots={{backdrop: StyledBackdrop}}>
            <DialogTitle>
                <Icon variant={infoVariant} icon={faIcon} />
                <Box component="span" flexGrow={2} pt="3px">
                    {title}
                </Box>
                <IconButton icon={faTimesCircle} variant="primary" onClick={closeDialog} />
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                {cancel ? (
                    <Button
                        variant={cancelVariant}
                        onClick={closeDialog}
                        sx={{minWidth: "unset", flexGrow: 2}}
                    >
                        {cancel}
                    </Button>
                ) : undefined}
                <Button
                    variant={okVariant as any}
                    onClick={clickOk}
                    sx={{minWidth: "unset", flexGrow: 2}}
                >
                    {ok}
                </Button>
            </DialogActions>
        </MaterialDialog>
    )
}
