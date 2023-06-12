// SPDX-FileCopyrightText: 2022 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import {SimplePaletteColorOptions, ThemeOptions, createTheme} from "@mui/material"
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
    export interface PaletteOptions {
        lightBackground: string
        brandColor: string
        brandSuccess: string
        errorColor: string
        red: SimplePaletteColorOptions
        green: SimplePaletteColorOptions
        customGreen: SimplePaletteColorOptions
        yellow: SimplePaletteColorOptions
        blue: SimplePaletteColorOptions
        customGrey: SimplePaletteColorOptions
        white: string
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
        main: "#991B1B",
        dark: "#991B1B",
    },
    green: {
        light: "#ECFDF5",
        main: "#064E3B",
        dark: "#064E3B",
    },
    customGreen: {
        light: "#CFF0DC",
        main: "#0EB048",
        dark: "#0EB048",
    },
    yellow: {
        light: "#FFF7D9",
        main: "#957400",
        dark: "#957400",
    },
    blue: {
        light: "#CCE5FF",
        main: "#292F99",
        dark: "#292F99",
    },
    customGrey: {
        light: "#E7EAEE",
        main: "#757575",
        dark: "#191D23",
    },
    white: "white",
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
                        color: `${palette.brandColor} !important`,
                        backgroundColor: `${palette.white} !important`,
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
                            backgroundColor: `${palette.brandColor} !important`,
                            border: `1px solid ${palette.brandColor}`,
                            color: `${palette.white} !important`,
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
                            backgroundColor: `${palette.brandColor} !important`,
                            border: `1px solid ${palette.brandSuccess}`,
                            color: `${palette.brandSuccess} !important`,
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
                            backgroundColor: `${palette.errorColor} !important`,
                            border: `1px solid ${palette.errorColor}`,
                            color: `${palette.white} !important`,
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
                        "backgroundColor": palette.customGrey.light,
                        "border": `1px solid ${palette.customGrey.light}`,
                        "color": palette.black,
                        "&:hover": {
                            backgroundColor: palette.customGrey.light,
                            border: `1px solid ${palette.customGrey.light}`,
                            color: palette.black,
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        },
                        "&:active": {
                            backgroundColor: `${palette.black} !important`,
                            border: `1px solid ${palette.black}`,
                            color: `${palette.customGrey.light} !important`,
                        },
                        "&:focus": {
                            border: `2px solid ${palette.black}`,
                            backgroundColor: palette.customGrey.light,
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
                            backgroundColor: `${palette.white} !important`,
                            border: `1px solid ${palette.errorColor}`,
                            color: `${palette.errorColor} !important`,
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
                        "padding": "4px",
                        "fontWeight": "normal",
                        "minWidth": "unset",
                        "minHeight": "unset",
                        "backgroundColor": "transparent",
                        "border": `1px solid transparent`,
                        "color": palette.brandColor,
                        "&:hover": {
                            "backgroundColor": "transparent",
                            "border": `1px solid transparent`,
                            "color": palette.brandColor,
                            "*": {
                                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                            },
                            "boxShadow": "unset",
                        },
                        "&:active": {
                            backgroundColor: `${palette.brandColor} !important`,
                            border: `1px solid ${palette.brandColor}`,
                            color: `${palette.white} !important`,
                        },
                        "&:focus": {
                            border: `1px solid ${palette.brandColor}`,
                            backgroundColor: "transparent",
                            color: `${palette.brandColor}`,
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
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: "5px 10px",
                    display: "flex",
                    flexDirection: "row",
                    gap: "11px",
                    alignItems: "center",
                    backgroundColor: palette.lightBackground,
                    fontSize: "16px",
                    color: palette.customGrey.dark,
                },
            },
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: "16px 48px 0 48px !important",
                },
            },
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: "15px 48px",
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    border: `2px solid ${palette.black}`,
                    maxWidth: "496px",
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    "padding": 0,
                    "border": `2px solid transparent`,
                    "color": palette.black,
                    "&:hover": {
                        padding: 0,
                        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    },
                    "&:active": {
                        color: palette.customGrey.main,
                        border: `2px solid ${palette.black}`,
                        backgroundColor: palette.white,
                    },
                },
            },
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
