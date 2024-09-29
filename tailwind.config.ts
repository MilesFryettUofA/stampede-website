import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
      "themes": {
        "light": {
          "colors": {
            "default": {
              "50": "#e5e4e4",
              "100": "#c1bfbf",
              "200": "#9d9999",
              "300": "#787373",
              "400": "#544e4e",
              "500": "#302828",
              "600": "#282121",
              "700": "#1f1a1a",
              "800": "#171313",
              "900": "#0e0c0c",
              "foreground": "#fff",
              "DEFAULT": "#302828"
            },
            "primary": {
              "50": "#f6eaea",
              "100": "#e8cccc",
              "200": "#dbaeae",
              "300": "#ce9090",
              "400": "#c07272",
              "500": "#b35454",
              "600": "#944545",
              "700": "#743737",
              "800": "#552828",
              "900": "#361919",
              "foreground": "#fff",
              "DEFAULT": "#b35454"
            },
            "secondary": {
              "50": "#edeaf3",
              "100": "#d5cde2",
              "200": "#bcafd1",
              "300": "#a392c1",
              "400": "#8b74b0",
              "500": "#72579f",
              "600": "#5e4883",
              "700": "#4a3967",
              "800": "#36294c",
              "900": "#221a30",
              "foreground": "#fff",
              "DEFAULT": "#72579f"
            },
            "success": {
              "50": "#f3f6f0",
              "100": "#e2e9db",
              "200": "#d0ddc6",
              "300": "#bfd0b1",
              "400": "#aec49c",
              "500": "#9db787",
              "600": "#82976f",
              "700": "#667758",
              "800": "#4b5740",
              "900": "#2f3729",
              "foreground": "#000",
              "DEFAULT": "#9db787"
            },
            "warning": {
              "50": "#fff9eb",
              "100": "#fff2cf",
              "200": "#ffeab3",
              "300": "#ffe297",
              "400": "#ffda7b",
              "500": "#ffd25f",
              "600": "#d2ad4e",
              "700": "#a6893e",
              "800": "#79642d",
              "900": "#4d3f1d",
              "foreground": "#000",
              "DEFAULT": "#ffd25f"
            },
            "danger": {
              "50": "#f8e3df",
              "100": "#efbdb3",
              "200": "#e69686",
              "300": "#dd6f59",
              "400": "#d3492d",
              "500": "#ca2200",
              "600": "#a71c00",
              "700": "#831600",
              "800": "#601000",
              "900": "#3d0a00",
              "foreground": "#fff",
              "DEFAULT": "#ca2200"
            },
            "background": "#252525",
            "foreground": {
              "50": "#ffffff",
              "100": "#ffffff",
              "200": "#ffffff",
              "300": "#ffffff",
              "400": "#ffffff",
              "500": "#ffffff",
              "600": "#d2d2d2",
              "700": "#a6a6a6",
              "800": "#797979",
              "900": "#4d4d4d",
              "foreground": "#000",
              "DEFAULT": "#ffffff"
            },
            "content1": {
              "DEFAULT": "#dbdbdb",
              "foreground": "#000"
            },
            "content2": {
              "DEFAULT": "#a64040",
              "foreground": "#fff"
            },
            "content3": {
              "DEFAULT": "#8d2121",
              "foreground": "#fff"
            },
            "content4": {
              "DEFAULT": "#780000",
              "foreground": "#fff"
            },
            "focus": "#db924b",
            "overlay": "#e3e3e3",
            "divider": "#ff0f0f"
          }
        },
        "dark": {
          "colors": {
            "default": {
              "50": "#e9e6e6",
              "100": "#cac4c4",
              "200": "#aba1a1",
              "300": "#8c7f7f",
              "400": "#6d5c5c",
              "500": "#4e3a3a",
              "600": "#403030",
              "700": "#332626",
              "800": "#251c1c",
              "900": "#171111",
              "foreground": "#fff",
              "DEFAULT": "#4e3a3a"
            },
            "primary": {
              "50": "#f9ecec",
              "100": "#f0d1d1",
              "200": "#e7b6b6",
              "300": "#de9c9c",
              "400": "#d58181",
              "500": "#cc6666",
              "600": "#a85454",
              "700": "#854242",
              "800": "#613030",
              "900": "#3d1f1f",
              "foreground": "#000",
              "DEFAULT": "#cc6666"
            },
            "secondary": {
              "50": "#f9f0e7",
              "100": "#f0dbc5",
              "200": "#e7c6a4",
              "300": "#deb082",
              "400": "#d59b61",
              "500": "#cc863f",
              "600": "#a86f34",
              "700": "#855729",
              "800": "#61401e",
              "900": "#3d2813",
              "foreground": "#000",
              "DEFAULT": "#cc863f"
            },
            "success": {
              "50": "#f3e2e2",
              "100": "#e3b8b8",
              "200": "#d28f8f",
              "300": "#c16666",
              "400": "#b13c3c",
              "500": "#a01313",
              "600": "#841010",
              "700": "#680c0c",
              "800": "#4c0909",
              "900": "#300606",
              "foreground": "#fff",
              "DEFAULT": "#a01313"
            },
            "warning": {
              "50": "#fff7df",
              "100": "#ffecb3",
              "200": "#ffe186",
              "300": "#ffd559",
              "400": "#ffca2d",
              "500": "#ffbf00",
              "600": "#d29e00",
              "700": "#a67c00",
              "800": "#795b00",
              "900": "#4d3900",
              "foreground": "#000",
              "DEFAULT": "#ffbf00"
            },
            "danger": {
              "50": "#ecdfe0",
              "100": "#d2b3b4",
              "200": "#b78688",
              "300": "#9d595d",
              "400": "#822d31",
              "500": "#680005",
              "600": "#560004",
              "700": "#440003",
              "800": "#310002",
              "900": "#1f0002",
              "foreground": "#fff",
              "DEFAULT": "#680005"
            },
            "background": "#0a0101",
            "foreground": {
              "50": "#f9f2f2",
              "100": "#f1e0e0",
              "200": "#e9cfcf",
              "300": "#e1bdbd",
              "400": "#d9abab",
              "500": "#d19999",
              "600": "#ac7e7e",
              "700": "#886363",
              "800": "#634949",
              "900": "#3f2e2e",
              "foreground": "#000",
              "DEFAULT": "#d19999"
            },
            "content1": {
              "DEFAULT": "#291414",
              "foreground": "#fff"
            },
            "content2": {
              "DEFAULT": "#522929",
              "foreground": "#fff"
            },
            "content3": {
              "DEFAULT": "#7a3d3d",
              "foreground": "#fff"
            },
            "content4": {
              "DEFAULT": "#a35252",
              "foreground": "#fff"
            },
            "focus": "#cc6666",
            "overlay": "#ffffff",
            "divider": "#ffffff"
          }
        }
      },
      "layout": {
        "fontSize": {
          "tiny": "1.25rem",
          "small": "1.5rem",
          "medium": "2rem",
          "large": "3rem"
        },
        "lineHeight": {
          "tiny": "1.25rem",
          "small": "1.5rem",
          "medium": "1.75rem",
          "large": "2rem"
        },
        "radius": {
          "small": "0.5rem",
          "medium": "0.75rem",
          "large": "0.875rem"
        },
        "borderWidth": {
          "small": "1px",
          "medium": "2px",
          "large": "3px"
        },
        "disabledOpacity": "0.5",
        "dividerWeight": "1",
        "hoverOpacity": "0.9"
      }

    
    

  })]
};
export default config;