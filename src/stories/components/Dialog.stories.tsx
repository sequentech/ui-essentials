// SPDX-FileCopyrightText: 2023 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React, {useState} from "react"
import {Meta, StoryObj} from "@storybook/react"
import {Dialog} from "../../components/Dialog"
import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport"
import {Button} from "@mui/material"
import {useTranslation} from "react-i18next"

const DialogExample: React.FC = () => {
    const {t} = useTranslation()
    const [open, setOpen] = useState(true)

    return (
        <>
            <Button onClick={() => setOpen(true)}>{t("stories.openDialog")}</Button>
            <Dialog
                handleClose={() => setOpen(false)}
                open={open}
                title={t("ballotSelectionsScreen.statusModal.title")}
                ok={t("ballotSelectionsScreen.statusModal.ok")}
                variant="info"
            >
                <p>{t("ballotSelectionsScreen.statusModal.content")}</p>
            </Dialog>
        </>
    )
}

const meta: Meta<typeof DialogExample> = {
    title: "components/Dialog",
    component: DialogExample,
    parameters: {
        backgrounds: {
            default: "white",
        },
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: "iphone6",
        },
    },
}

export default meta

type Story = StoryObj<typeof DialogExample>

export const Primary: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {},
    parameters: {
        viewport: {
            disable: true,
        },
    },
}

export const PrimaryMobile: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {},
    parameters: {
        viewport: {
            defaultViewport: "iphone6",
        },
    },
}
