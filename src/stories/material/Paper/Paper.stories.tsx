// SPDX-FileCopyrightText: 2022 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React from "react"
import {ComponentStory, ComponentMeta} from "@storybook/react"
import Paper from "@mui/material/Paper"

export default {
    title: "material/Paper",
    component: Paper,
    parameters: {
        backgrounds: {
            default: "light",
        },
    },
    argTypes: {},
} as ComponentMeta<typeof Paper>

const FixedTemplate: ComponentStory<typeof Paper> = (args) => <Paper variant="fixed">data</Paper>

export const Fixed = FixedTemplate.bind({})

const ResponsiveTemplate: ComponentStory<typeof Paper> = (args) => (
    <Paper variant="responsive">
        <Paper sx={{width: "10rem", height: "10rem", backgroundColor: "blue"}} />
        <Paper sx={{width: "10rem", height: "10rem", backgroundColor: "blue"}} />
        <Paper sx={{width: "10rem", height: "10rem", backgroundColor: "blue"}} />
        <Paper sx={{width: "10rem", height: "10rem", backgroundColor: "blue"}} />
    </Paper>
)

export const Responsive = ResponsiveTemplate.bind({})
