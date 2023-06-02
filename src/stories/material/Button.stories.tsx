// SPDX-FileCopyrightText: 2022 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React from "react"
import {ComponentStory, ComponentMeta} from "@storybook/react"
import Button from "@mui/material/Button"
import {styled} from "@mui/material/styles"
import Box from "@mui/material/Box"

const VerticalBox = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-width: 210px;
    padding: 4px;
`

export default {
    title: "material/Button",
    component: Button,
    parameters: {
        backgrounds: {
            default: "white",
        },
    },
    argTypes: {},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
    <VerticalBox>
        <Button className="normal" {...args}>
            Label
        </Button>
        <Button disabled {...args}>
            Label
        </Button>
        <Button className="hover" {...args}>
            Label
        </Button>
        <Button className="active" {...args}>
            Label
        </Button>
        <Button className="focus" {...args}>
            Label
        </Button>
    </VerticalBox>
)

export const DefaultButton = Template.bind({})
DefaultButton.parameters = {
    pseudo: {
        hover: [".hover"],
        active: [".active"],
        focus: [".focus"],
    },
}

export const ActionButton = Template.bind({})
ActionButton.parameters = {
    pseudo: {
        hover: [".hover"],
        active: [".active"],
        focus: [".focus"],
    },
}
ActionButton.args = {
    variant: "action",
}
