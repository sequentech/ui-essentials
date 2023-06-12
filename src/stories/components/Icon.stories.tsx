// SPDX-FileCopyrightText: 2023 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React from "react"
import {Meta, StoryObj} from "@storybook/react"
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons"
import Box from "@mui/material/Box"
import {styled} from "@mui/material/styles"
import {Icon} from "../../components/Icon"

const VerticalBox = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 32px;
    padding: 4px;
    font-size: 24px;
`

const IconExample: React.FC = () => (
    <VerticalBox>
        <Icon icon={faExclamationTriangle} />
        <Icon icon={faExclamationTriangle} variant="info" />
        <Icon icon={faExclamationTriangle} variant="warning" />
        <Icon icon={faExclamationTriangle} variant="error" />
        <Icon icon={faExclamationTriangle} variant="success" />
        <Icon icon={faExclamationTriangle} variant="form" />
    </VerticalBox>
)

const meta: Meta<typeof IconExample> = {
    title: "components/Icon",
    component: IconExample,
    parameters: {
        backgrounds: {
            default: "white",
        },
    },
}

export default meta

type Story = StoryObj<typeof IconExample>

export const Primary: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {},
    parameters: {
        viewport: {
            disable: true,
        },
    },
}
