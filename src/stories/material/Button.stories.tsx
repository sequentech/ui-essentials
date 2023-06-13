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
import VerticalBox from "../../components/VerticalBox/VerticalBox"

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
    <VerticalBox maxWidth="210px">
        <Button className="normal" {...args}>
            <FontAwesomeIcon icon={faPrint} size="sm" />
            <span>Label</span>
        </Button>
        <Button disabled {...args}>
            <FontAwesomeIcon icon={faPrint} size="sm" />
            <span>Label</span>
        </Button>
        <Button className="hover" {...args}>
            <FontAwesomeIcon icon={faPrint} size="sm" />
            <span>Label</span>
        </Button>
        <Button className="active" {...args}>
            <FontAwesomeIcon icon={faPrint} size="sm" />
            <span>Label</span>
        </Button>
        <Button className="focus" {...args}>
            <FontAwesomeIcon icon={faPrint} size="sm" />
            <span>Label</span>
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

export const CancelButton = Template.bind({})
CancelButton.parameters = {
    pseudo: {
        hover: [".hover"],
        active: [".active"],
        focus: [".focus"],
    },
}
CancelButton.args = {
    variant: "cancel",
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

export const SolidWarningButton = Template.bind({})
SolidWarningButton.parameters = {
    pseudo: {
        hover: [".hover"],
        active: [".active"],
        focus: [".focus"],
    },
}
SolidWarningButton.args = {
    variant: "solidWarning",
}

export const ActionbarButton = Template.bind({})
ActionbarButton.parameters = {
    pseudo: {
        hover: [".hover"],
        active: [".active"],
        focus: [".focus"],
    },
}
ActionbarButton.args = {
    variant: "actionbar",
}
