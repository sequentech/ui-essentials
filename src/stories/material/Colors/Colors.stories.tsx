// SPDX-FileCopyrightText: 2023 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React, {useState} from "react"
import {Meta, StoryObj} from "@storybook/react"
import styled from "@emotion/styled"
import {Box, Typography} from "@mui/material"
import {theme} from "../../../services/theme"

const ColorBox = styled(Box)`
    height: 40px;
    width: 40px;
`

const DescriptorContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
`

const ColorsListContainer = styled(Box)`
    border: 1px solid ${({theme}) => theme.palette.customGrey.light};
    margin: 32px 0;
    padding: 32px;
    border-radius: 8px;
`

interface ColorDescriptorProps {
    title: string
    description: string
    backgroundColor?: string
}

const ColorDescriptor: React.FC<ColorDescriptorProps> = ({title, description, backgroundColor}) => (
    <DescriptorContainer>
        <ColorBox sx={{backgroundColor: backgroundColor}} />
        <Box sx={{flexGrow: 2}}>
            <Typography mb={0.5}>{title}</Typography>
            <Typography mt={0.5} color={theme.palette.customGrey.main}>
                {description}
            </Typography>
        </Box>
        <Typography>{backgroundColor}</Typography>
    </DescriptorContainer>
)

interface ColorsListProps {
    colors: Array<ColorDescriptorProps>
}

const ColorsList: React.FC<ColorsListProps> = ({colors}) => (
    <ColorsListContainer>
        {colors.map((color, idx) => (
            <ColorDescriptor {...color} key={idx} />
        ))}
    </ColorsListContainer>
)

const meta: Meta<typeof ColorsList> = {
    title: "material/Colors",
    component: ColorsList,
    parameters: {
        backgrounds: {
            default: "white",
        },
    },
}

export default meta

type Story = StoryObj<typeof ColorsList>

export const Semantic: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        colors: [
            {
                backgroundColor: theme.palette.lightBackground,
                title: "light-background",
                description: "Light Background",
            },
            {
                backgroundColor: theme.palette.brandColor,
                title: "brand-color",
                description: "Brand color",
            },
            {
                backgroundColor: theme.palette.brandSuccess,
                title: "brand-success",
                description: "Brand success",
            },
            {
                backgroundColor: theme.palette.errorColor,
                title: "error-color",
                description: "Error color",
            },
        ],
    },
    parameters: {
        viewport: {
            disable: true,
        },
    },
}

export const Content: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        colors: [
            {
                backgroundColor: theme.palette.red.light,
                title: "red.light",
                description: "Light Red",
            },
            {
                backgroundColor: theme.palette.red.main,
                title: "red.main",
                description: "Main Red",
            },
            {
                backgroundColor: theme.palette.red.dark,
                title: "red.dark",
                description: "Dark Red",
            },
            {
                backgroundColor: theme.palette.green.light,
                title: "green.light",
                description: "Light Green",
            },
            {
                backgroundColor: theme.palette.green.main,
                title: "green.main",
                description: "Main Green",
            },
            {
                backgroundColor: theme.palette.green.dark,
                title: "green.dark",
                description: "Dark Green",
            },
            {
                backgroundColor: theme.palette.customGreen.light,
                title: "customGreen.light",
                description: "Light Custom Green",
            },
            {
                backgroundColor: theme.palette.customGreen.main,
                title: "customGreen.main",
                description: "Main Custom Green",
            },
            {
                backgroundColor: theme.palette.customGreen.dark,
                title: "customGreen.dark",
                description: "Dark Custom Green",
            },
            {
                backgroundColor: theme.palette.yellow.light,
                title: "yellow.light",
                description: "Light Yellow",
            },
            {
                backgroundColor: theme.palette.yellow.main,
                title: "yellow.main",
                description: "Main Yellow",
            },
            {
                backgroundColor: theme.palette.yellow.dark,
                title: "yellow.dark",
                description: "Dark Yellow",
            },
            {
                backgroundColor: theme.palette.blue.light,
                title: "blue.light",
                description: "Light Blue",
            },
            {
                backgroundColor: theme.palette.blue.main,
                title: "blue.main",
                description: "Main Blue",
            },
            {
                backgroundColor: theme.palette.blue.dark,
                title: "blue.dark",
                description: "Dark Blue",
            },
            {
                backgroundColor: theme.palette.customGrey.light,
                title: "customGrey.light",
                description: "Light Custom Grey",
            },
            {
                backgroundColor: theme.palette.customGrey.main,
                title: "customGrey.main",
                description: "Main Custom Grey",
            },
            {
                backgroundColor: theme.palette.customGrey.dark,
                title: "customGrey.dark",
                description: "Dark Custom Grey",
            },
            {
                backgroundColor: theme.palette.customGrey.contrastText,
                title: "customGrey.contrastText",
                description: "Contrast Text Custom Grey",
            },
            {
                backgroundColor: theme.palette.white,
                title: "white",
                description: "White",
            },
            {
                backgroundColor: theme.palette.black,
                title: "black",
                description: "Black",
            },
        ],
    },
    parameters: {
        viewport: {
            disable: true,
        },
    },
}
