// SPDX-FileCopyrightText: 2022 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React from "react"
import {Meta, StoryObj} from "@storybook/react"
import {Header} from "../../components/Header"
import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport"

const meta: Meta<typeof Header> = {
    title: "components/Header",
    component: Header,
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

type Story = StoryObj<typeof Header>

export const Primary: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        logoutFn: () => {},
    },
    parameters: {
        viewport: {
            disable: true,
        },
    },
}

export const PrimaryMobile: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        logoutFn: () => {},
    },
    parameters: {
        viewport: {
            defaultViewport: "iphone6",
        },
    },
}
