// SPDX-FileCopyrightText: 2022 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import {theme} from "../src/services/theme"
import {ThemeProvider} from "@mui/material"
import {BrowserRouter, Routes, Route, Router} from "react-router-dom"
import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport"

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
}

const MuiDecorator = (Story) => (
    <ThemeProvider theme={theme}>
        <Story />
    </ThemeProvider>
)

export const decorators = [MuiDecorator]
