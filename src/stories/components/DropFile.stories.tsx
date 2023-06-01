// SPDX-FileCopyrightText: 2022 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React, {useRef} from "react"
import {ComponentStory, ComponentMeta} from "@storybook/react"
import {DropFile} from "../../components/DropFile"
import Button from "@mui/material/Button"
import {within, userEvent} from "@storybook/testing-library"
import {expect} from "@storybook/jest"
import Box from "@mui/material/Box"
import {styled} from "@mui/material/styles"
import Paper from "@mui/material/Paper"

const StyledBox = styled(Box)`
    height: 16rem;
    width: 28rem;
    max-width: 100%;
    position: relative;
`

export default {
    title: "components/DropFile",
    component: DropFile,
    parameters: {
        backgrounds: {
            default: "white",
        },
    },
    argTypes: {},
} as ComponentMeta<typeof DropFile>

const BasicTemplate: ComponentStory<typeof DropFile> = (args) => (
    <DropFile {...args}>
        <StyledBox />
    </DropFile>
)

export const BasicDropFile = BasicTemplate.bind({})

BasicDropFile.args = {
    handleFiles: (files: FileList) => {},
}

interface WithButtonTemplateProps {
    text: string
    buttonText: string
}
type DropFileProps = React.ComponentProps<typeof DropFile>

const WithButtonTemplate: ComponentStory<React.FC<DropFileProps & WithButtonTemplateProps>> = ({
    text,
    buttonText,
    ...args
}) => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const handleFiles = (files: FileList) => {
        alert("Number of files: " + files.length)
    }

    // triggers the input when the button is clicked
    const onButtonClick = () => {
        inputRef.current?.click()
    }

    return (
        <DropFile {...args} handleFiles={handleFiles} ref={inputRef}>
            <Paper variant="responsive">
                {text}
                <Button variant="outlined" onClick={onButtonClick} data-testid="drop-file-button">
                    {buttonText}
                </Button>
            </Paper>
        </DropFile>
    )
}

export const WithButtonDropFile = WithButtonTemplate.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithButtonDropFile.args = {
    text: "Drop a file here or",
    buttonText: "Click to Upload",
}

WithButtonDropFile.play = async ({canvasElement}) => {
    const canvas = within(canvasElement)

    const fakeFile = new File(["hello"], "hello.png", {type: "image/png"})

    const inputFile = canvas.getByTestId<HTMLInputElement>("drop-input-file")
    userEvent.upload(inputFile, fakeFile)

    expect(inputFile.files).toHaveLength(1)
    expect(inputFile.files![0]).toStrictEqual(fakeFile)
    expect(inputFile.files!.item(0)).toStrictEqual(fakeFile)
}
