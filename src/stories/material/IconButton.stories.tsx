// SPDX-FileCopyrightText: 2023 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React from "react"
import {Meta, StoryObj} from "@storybook/react"
import {IconButton} from "@mui/material"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons"
import Box from "@mui/material/Box"
import {styled} from "@mui/material/styles"
import {theme} from "../../services/theme"

const VerticalBox = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 32px;
    padding: 4px;
`

const IconButtonExample: React.FC = () => (
    <VerticalBox>
        <IconButton aria-label="close">
            <FontAwesomeIcon icon={faTimesCircle} />
        </IconButton>
        <IconButton aria-label="close" sx={{color: theme.palette.blue?.main}}>
            <FontAwesomeIcon icon={faTimesCircle} />
        </IconButton>
        <IconButton aria-label="close" sx={{color: theme.palette.yellow?.main}}>
            <FontAwesomeIcon icon={faTimesCircle} />
        </IconButton>
        <IconButton aria-label="close" sx={{color: theme.palette.red?.main}}>
            <FontAwesomeIcon icon={faTimesCircle} />
        </IconButton>
        <IconButton aria-label="close" sx={{color: theme.palette.green?.dark}}>
            <FontAwesomeIcon icon={faTimesCircle} />
        </IconButton>
    </VerticalBox>
)

const meta: Meta<typeof IconButtonExample> = {
    title: "material/IconButton",
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
