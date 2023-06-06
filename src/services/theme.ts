// SPDX-FileCopyrightText: 2022 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import {ThemeOptions, createTheme} from "@mui/material"
import {LinkProps} from "@mui/material/Link"
import {LinkBehavior} from "../components/LinkBehavior"
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
        secondary: true
        action: true
        warning: true
        cancel: true
        solidWarning: true
        actionbar: true
    }
}

declare module "@mui/material/styles" {
    export interface CustomColor {
        light: string
        dark: string
    }
    export interface PaletteOptions {
        lightBackground: string
        brandColor: string
        brandSuccess: string
        errorColor: string
        red: CustomColor
        green: CustomColor
        customGreen: CustomColor
        yellow: CustomColor
        blue: CustomColor
        white: string
        greyColor: string
        black: string
    }
    export interface Palette extends PaletteOptions {}
}

const palette = {
    lightBackground: "#F7F9FE",
    brandColor: "#0F054C",
    brandSuccess: "#43E3A1",
    errorColor: "#EF4444",
    red: {
        light: "#FECACA",
        dark: "#991B1B",
    },
    green: {
        light: "#ECFDF5",
        dark: "#064E3B",
    },
    customGreen: {
        light: "#CFF0DC",
        dark: "#0EB048",
    },
    yellow: {
        light: "#FFF7D9",
        dark: "#957400",
    },
    blue: {
        light: "#CCE5FF",
        dark: "#292F99",
    },
    white: "white",
    greyColor: "#E7EAEE",
    black: "black",
}

export const themeOptions: ThemeOptions = {
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
            } as LinkProps,
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
                LinkComponent: LinkBehavior,
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    "padding": "6px 12px",
                    "display": "flex",
                    "flexDirection": "row",
                    "gap": "4px",
                    "fontSize": "16px",
                    "textTransform": "unset",
                    "backgroundColor": palette.brandColor,
                    "border": `1px solid ${palette.brandColor}`,
                    "color": palette.white,
                    "minWidth": "200px",
                    "minHeight": "44px",
                    "&:hover": {
                        backgroundColor: palette.brandColor,
                        color: palette.white,
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    },
                    "&:active": {
                        color: palette.brandColor,
                        backgroundColor: palette.white,
                    },
                    "&:focus": {
                        border: `2px solid ${palette.brandSuccess}`,
                        color: palette.white,
                        backgroundColor: palette.brandColor,
                    },
                    "&.Mui-disabled": {
                        background: "rgba(15, 5, 76, 0.4)",
                        border: "1px solid rgba(255, 255, 255, 0.4)",
                        color: palette.white,
                    },
                },
            },
            variants: [
                {
                    props: {variant: "secondary"},
                    style: {
                        "backgroundColor": palette.white,
                        "border": `1px solid ${palette.brandColor}`,
                        "color": palette.brandColor,
                        "&:hover": {
                            backgroundColor: palette.white,
                            border: `1px solid ${palette.brandColor}`,
                            color: palette.brandColor,
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        },
                        "&:active": {
                            backgroundColor: palette.brandColor,
                            border: `1px solid ${palette.brandColor}`,
                            color: palette.white,
                        },
                        "&:focus": {
                            border: `2px solid ${palette.brandSuccess}`,
                            backgroundColor: palette.white,
                            color: palette.brandColor,
                        },
                        "&.Mui-disabled": {
                            "background": "rgba(255, 255, 255, 0.4)",
                            "border": "1px solid rgba(15, 5, 76, 0.4)",
                            "color": palette.brandColor,
                            "*": {
                                opacity: 0.5,
                            },
                        },
                    },
                },
                {
                    props: {variant: "action"},
                    style: {
                        "backgroundColor": palette.brandSuccess,
                        "border": `1px solid ${palette.brandColor}`,
                        "color": palette.brandColor,
                        "&:hover": {
                            backgroundColor: palette.brandSuccess,
                            border: `1px solid ${palette.brandColor}`,
                            color: palette.brandColor,
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        },
                        "&:active": {
                            backgroundColor: palette.brandColor,
                            border: `1px solid ${palette.brandSuccess}`,
                            color: palette.brandSuccess,
                        },
                        "&:focus": {
                            border: `2px solid ${palette.brandColor}`,
                            backgroundColor: palette.brandSuccess,
                            color: palette.brandColor,
                        },
                        "&.Mui-disabled": {
                            "background": "rgba(67, 227, 161, 0.4)",
                            "border": "1px solid rgba(15, 5, 76, 0.4)",
                            "color": palette.brandColor,
                            "*": {
                                opacity: 0.5,
                            },
                        },
                    },
                },
                {
                    props: {variant: "warning"},
                    style: {
                        "backgroundColor": palette.white,
                        "border": `1px solid ${palette.errorColor}`,
                        "color": palette.errorColor,
                        "&:hover": {
                            backgroundColor: palette.white,
                            border: `1px solid ${palette.errorColor}`,
                            color: palette.errorColor,
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        },
                        "&:active": {
                            backgroundColor: palette.errorColor,
                            border: `1px solid ${palette.errorColor}`,
                            color: palette.white,
                        },
                        "&:focus": {
                            border: `2px solid ${palette.errorColor}`,
                            backgroundColor: palette.white,
                            color: palette.errorColor,
                        },
                        "&.Mui-disabled": {
                            "background": "rgba(255, 255, 255, 0.4)",
                            "border": "1px solid rgba(239, 68, 68, 0.4)",
                            "color": palette.errorColor,
                            "*": {
                                opacity: 0.5,
                            },
                        },
                    },
                },
                {
                    props: {variant: "cancel"},
                    style: {
                        "backgroundColor": palette.greyColor,
                        "border": `1px solid ${palette.greyColor}`,
                        "color": palette.black,
                        "&:hover": {
                            backgroundColor: palette.greyColor,
                            border: `1px solid ${palette.greyColor}`,
                            color: palette.black,
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        },
                        "&:active": {
                            backgroundColor: palette.black,
                            border: `1px solid ${palette.black}`,
                            color: palette.greyColor,
                        },
                        "&:focus": {
                            border: `2px solid ${palette.black}`,
                            backgroundColor: palette.greyColor,
                            color: palette.black,
                        },
                        "&.Mui-disabled": {
                            "background": "rgba(231, 234, 238, 0.4)",
                            "border": "1px solid rgba(231, 234, 238, 0.4)",
                            "color": palette.black,
                            "*": {
                                opacity: 0.5,
                            },
                        },
                    },
                },
                {
                    props: {variant: "solidWarning"},
                    style: {
                        "backgroundColor": palette.errorColor,
                        "border": `1px solid ${palette.errorColor}`,
                        "color": palette.white,
                        "&:hover": {
                            backgroundColor: palette.errorColor,
                            border: `1px solid ${palette.errorColor}`,
                            color: palette.white,
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        },
                        "&:active": {
                            backgroundColor: palette.white,
                            border: `1px solid ${palette.errorColor}`,
                            color: palette.errorColor,
                        },
                        "&:focus": {
                            border: `2px solid ${palette.brandColor}`,
                            backgroundColor: palette.errorColor,
                            color: palette.white,
                        },
                        "&.Mui-disabled": {
                            background: "rgba(239, 68, 68, 0.4)",
                            border: "1px solid rgba(239, 68, 68, 0.4)",
                            color: palette.white,
                        },
                    },
                },
                {
                    props: {variant: "actionbar"},
                    style: {
                        "minWidth": "unset",
                        "minHeight": "unset",
                        "backgroundColor": palette.white,
                        "border": `1px solid transparent`,
                        "color": palette.brandColor,
                        "&:hover": {
                            "backgroundColor": palette.white,
                            "border": `1px solid transparent`,
                            "color": palette.brandColor,
                            "*": {
                                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                            },
                            "boxShadow": "unset",
                        },
                        "&:active": {
                            backgroundColor: palette.brandColor,
                            border: `1px solid ${palette.brandColor}`,
                            color: palette.white,
                        },
                        "&:focus": {
                            border: `1px solid ${palette.brandColor}`,
                            backgroundColor: palette.white,
                            color: palette.brandColor,
                        },
                        "&.Mui-disabled": {
                            background: "rgba(255, 255, 255, 0.4)",
                            border: "none",
                            color: palette.brandColor,
                            opacity: 0.5,
                        },
                    },
                },
            ],
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
    palette,
}

export const theme = createTheme(themeOptions)
