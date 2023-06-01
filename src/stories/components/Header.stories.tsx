// SPDX-FileCopyrightText: 2022 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React from "react"
import {ComponentStory, ComponentMeta} from "@storybook/react"
import {Header} from "../../components/Header"
import Container from "@mui/material/Container"

export default {
    title: "components/Header",
    component: Header,
    parameters: {
        backgrounds: {
            default: "light",
        },
    },
    argTypes: {},
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => (
    <Container style={{backgroundColor: "white"}}>
        <Header {...args} />
    </Container>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    label: "Header",
}
