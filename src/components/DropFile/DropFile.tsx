// SPDX-FileCopyrightText: 2023 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React, {useRef} from "react"
import Paper from "@mui/material/Paper"
import {faCloudArrowUp} from "@fortawesome/free-solid-svg-icons"
import {useTranslation} from "react-i18next"
import Button from "@mui/material/Button"
import CustomDropFile from "../CustomDropFile/CustomDropFile"

const DropFile: React.FC = () => {
    const {t} = useTranslation()
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleFiles = (files: FileList) => {
        alert("Number of files: " + files.length)
    }

    // triggers the input when the button is clicked
    const onButtonClick = () => {
        inputRef.current?.click()
    }

    return (
        <CustomDropFile handleFiles={handleFiles} ref={inputRef}>
            <Paper variant="responsive">
                {t("")}
                <Button variant="outlined" onClick={onButtonClick} data-testid="drop-file-button">
                    {t("")}
                </Button>
            </Paper>
        </CustomDropFile>
    )
}

DropFile.displayName = "DropFile"

export default DropFile
