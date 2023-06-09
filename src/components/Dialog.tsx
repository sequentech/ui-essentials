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
import {faTimesCircle, faExclamationCircle} from "@fortawesome/free-solid-svg-icons"
import styledEmotion from "@emotion/styled"
import {styled} from "@mui/material/styles"
import IconButton from "@mui/material/IconButton"

const StyledBackdrop = styledEmotion(Backdrop)`
    opacity: 0.5 !important;
`

const BlueIcon = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.palette.brandColor};
`
/*
const CloseIcon = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.palette.black};

    &:hover {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        cursor: pointer;
    }
    &:active {
        color: ${({theme}) => theme.palette.customGrey.light} !important;
    }
    &:focus {
        border: 1px solid black;
    }
`
*/
const CloseIcon = styled(FontAwesomeIcon)``

export interface DialogProps extends PropsWithChildren {
    handleClose: (value: boolean) => void
    open: boolean
    title: string
    cancel: string
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
    const okVariant = "warning" === variant ? "solidWarning" : variant
    const closeDialog = () => handleClose(false)
    const clickOk = () => handleClose(true)

    return (
        <MaterialDialog onClose={closeDialog} open={open} slots={{backdrop: StyledBackdrop}}>
            <DialogTitle>
                <BlueIcon icon={faExclamationCircle} />
                <Box component="span" flexGrow={2} pt="3px">
                    {title}
                </Box>
                <IconButton aria-label="close">
                    <CloseIcon icon={faTimesCircle} onClick={closeDialog} />
                </IconButton>
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button
                    variant="cancel"
                    onClick={closeDialog}
                    sx={{minWidth: "unset", flexGrow: 2}}
                >
                    {cancel}
                </Button>
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
