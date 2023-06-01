// SPDX-FileCopyrightText: 2022 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import {Color, createTheme} from "@mui/material"
import {LinkProps} from "@mui/material/Link"
//import {LinkBehavior} from "../components/LinkBehavior"
import {grey} from "@mui/material/colors"
import {Theme as MUITheme} from "@mui/material"

// Re-declare the emotion theme to have the properties of the MaterialUiTheme
// See: https://github.com/emotion-js/emotion/discussions/2291#discussioncomment-491185
declare module "@emotion/react" {
    export interface Theme extends MUITheme {}
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        black: true
    }
}

declare module "@mui/material/Paper" {
    interface PaperPropsVariantOverrides {
        dashed: true
        responsive: true
        fixed: true
    }
}

declare module "@mui/material/Card" {
    interface PaperPropsVariantOverrides {
        responsive: true
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        raised: true
    }
}

declare module "@mui/material/styles" {
    export interface PaletteOptions {
        customGreen: {
            light: string
            dark: string
        }
        lightBackground: string
    }
    export interface Palette extends PaletteOptions {}
}

export const theme = createTheme({
    components: {
        MuiLink: {
            /*defaultProps: {
                component: LinkBehavior,
            } as LinkProps,*/
            variants: [
                {
                    props: {variant: "black"},
                    style: {
                        color: "black",
                        fontWeight: "bold",
                        textDecorationColor: "black",
                    },
                },
            ],
            styleOverrides: {
                root: {
                    "fontSize": "0.875rem",
                    "textDecoration": "none",
                    "&:hover": {
                        textDecoration: "underline",
                    },
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                //LinkComponent: LinkBehavior,
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "unset",
                },
            },
        },
        MuiMenu: {
            defaultProps: {
                PaperProps: {
                    style: {
                        minWidth: "120px",
                    },
                },
            },
        },
        MuiMenuItem: {
            defaultProps: {
                style: {
                    marginBlockStart: 0,
                    marginBlockEnd: 0,
                },
            },
        },
        MuiPaper: {
            variants: [
                {
                    props: {variant: "dashed"},
                    style: {
                        border: `2px dashed ${grey[500]}`,
                        padding: "0 10px",
                    },
                },
                {
                    props: {variant: "responsive"},
                    style: {
                        gap: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        borderRadius: "unset",
                    },
                },
                {
                    props: {variant: "fixed"},
                    style: {
                        height: "16rem",
                        width: "28rem",
                        maxWidth: "100%",
                        position: "relative",
                        borderRadius: "unset",
                    },
                },
            ],
        },
        MuiSkeleton: {
            variants: [
                {
                    props: {variant: "text"},
                    style: {
                        lineHeight: 1.43,
                        fontSize: "0.875rem",
                        margin: "14px 0",
                    },
                },
            ],
        },
    },
    typography: {
        body1: {
            textAlign: "left",
            marginBlockStart: "1em",
            marginBlockEnd: "1em",
            marginInlineStart: "0px",
            marginInlineEnd: "0px",
            wordBreak: "keep-all",
            wordWrap: "break-word",
        },
        body2: {
            textAlign: "left",
            marginBlockStart: "1em",
            marginBlockEnd: "1em",
            marginInlineStart: "0px",
            marginInlineEnd: "0px",
            wordBreak: "keep-all",
            wordWrap: "break-word",
        },
        h4: {
            paddingTop: "32px",
            paddingBottom: "16px",
            textAlign: "center",
        },
    },
    palette: {
        customGreen: {
            light: "#cff0dc",
            dark: "#0eb048",
        },
        lightBackground: "#F7F9FE",
    },
})
