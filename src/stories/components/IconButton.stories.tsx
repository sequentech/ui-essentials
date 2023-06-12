// SPDX-FileCopyrightText: 2023 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React from "react"
import {Meta, StoryObj} from "@storybook/react"
import {IconButton as MuiIconButton} from "@mui/material"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons"
import Box from "@mui/material/Box"
import {styled} from "@mui/material/styles"
import {theme} from "../../services/theme"
import {IconButton} from "../../components/IconButton"

const VerticalBox = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 32px;
    padding: 4px;
`

const IconButtonExample: React.FC = () => (
    <VerticalBox>
        <IconButton icon={faTimesCircle} />
        <IconButton icon={faTimesCircle} variant="info" />
        <IconButton icon={faTimesCircle} variant="warning" />
        <IconButton icon={faTimesCircle} variant="error" />
        <IconButton icon={faTimesCircle} variant="success" />
    </VerticalBox>
)

const meta: Meta<typeof IconButtonExample> = {
    title: "components/IconButton",
    component: IconButtonExample,
    parameters: {
        backgrounds: {
            default: "white",
        },
    },
}

export default meta

type Story = StoryObj<typeof IconButtonExample>

export const Primary: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {},
    parameters: {
        viewport: {
            disable: true,
        },
    },
}
