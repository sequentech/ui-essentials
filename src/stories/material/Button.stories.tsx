// SPDX-FileCopyrightText: 2022 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React from "react"
import {ComponentStory, ComponentMeta} from "@storybook/react"
import Button from "@mui/material/Button"
import {styled} from "@mui/material/styles"
import Box from "@mui/material/Box"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPrint} from "@fortawesome/free-solid-svg-icons"

const VerticalBox = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 20px;
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
            <FontAwesomeIcon icon={faPrint} size="md" />
            Label
        </Button>
        <Button disabled {...args}>
            <FontAwesomeIcon icon={faPrint} size="md" />
            Label
        </Button>
        <Button className="hover" {...args}>
            <FontAwesomeIcon icon={faPrint} size="md" />
            Label
        </Button>
        <Button className="active" {...args}>
            <FontAwesomeIcon icon={faPrint} size="md" />
            Label
        </Button>
        <Button className="focus" {...args}>
            <FontAwesomeIcon icon={faPrint} size="md" />
            Label
        </Button>
    </VerticalBox>
)

export const SecondaryButton = Template.bind({})
SecondaryButton.parameters = {
    pseudo: {
        hover: [".hover"],
        active: [".active"],
        focus: [".focus"],
    },
}
SecondaryButton.args = {
    variant: "secondary",
}

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

export const WarningButton = Template.bind({})
WarningButton.parameters = {
    pseudo: {
        hover: [".hover"],
        active: [".active"],
        focus: [".focus"],
    },
}
WarningButton.args = {
    variant: "warning",
}

export const WarningPopupButton = Template.bind({})
WarningPopupButton.parameters = {
    pseudo: {
        hover: [".hover"],
        active: [".active"],
        focus: [".focus"],
    },
}
WarningPopupButton.args = {
    variant: "warningPopup",
}
