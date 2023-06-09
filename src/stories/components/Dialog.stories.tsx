// SPDX-FileCopyrightText: 2023 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React, {useState} from "react"
import {Meta, StoryObj} from "@storybook/react"
import {Dialog} from "../../components/Dialog"
import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport"
import {Button} from "@mui/material"

const DialogExample: React.FC = () => {
    const [open, setOpen] = useState(true)

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open Dialog</Button>
            <Dialog
                handleClose={() => setOpen(false)}
                open={open}
                title="Status"
                cancel="cancel"
                ok="ok"
                variant="warning"
            >
                <p>The status panel gives you information about the verifications performed.</p>
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
