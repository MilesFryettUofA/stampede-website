// tailwind.config.js
const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    './app/**/*.tsx',
    './components/**/*.tsx',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui(
    {
      "themes": {
        "light": {
          "colors": {
            "default": {
              "50": "#dfdfdf",
              "100": "#b3b3b3",
              "200": "#868686",
              "300": "#595959",
              "400": "#2d2d2d",
              "500": "#000000",
              "600": "#000000",
              "700": "#000000",
              "800": "#000000",
              "900": "#000000",
              "foreground": "#fff",
              "DEFAULT": "#000000"
            },
            "primary": {
              "50": "#f9e3e3",
              "100": "#f1bcbc",
              "200": "#e89595",
              "300": "#e06e6e",
              "400": "#d74747",
              "500": "#cf2020",
              "600": "#ab1a1a",
              "700": "#871515",
              "800": "#620f0f",
              "900": "#3e0a0a",
              "foreground": "#fff",
              "DEFAULT": "#cf2020"
            },
            "secondary": {
              "50": "#efe9f1",
              "100": "#d9c9dd",
              "200": "#c3aac9",
              "300": "#ad8ab5",
              "400": "#976ba1",
              "500": "#814b8d",
              "600": "#6a3e74",
              "700": "#54315c",
              "800": "#3d2443",
              "900": "#27172a",
              "foreground": "#fff",
              "DEFAULT": "#814b8d"
            },
            "success": {
              "50": "#e7f0df",
              "100": "#c4dab3",
              "200": "#a2c586",
              "300": "#80af59",
              "400": "#5d9a2d",
              "500": "#3b8400",
              "600": "#316d00",
              "700": "#265600",
              "800": "#1c3f00",
              "900": "#122800",
              "foreground": "#fff",
              "DEFAULT": "#3b8400"
            },
            "warning": {
              "50": "#fff8e8",
              "100": "#ffefc7",
              "200": "#ffe6a6",
              "300": "#ffdd85",
              "400": "#ffd364",
              "500": "#ffca43",
              "600": "#d2a737",
              "700": "#a6832c",
              "800": "#796020",
              "900": "#4d3d14",
              "foreground": "#000",
              "DEFAULT": "#ffca43"
            },
            "danger": {
              "50": "#f6e6e2",
              "100": "#e9c2ba",
              "200": "#dc9e92",
              "300": "#d07a6a",
              "400": "#c35741",
              "500": "#b63319",
              "600": "#962a15",
              "700": "#762110",
              "800": "#56180c",
              "900": "#370f08",
              "foreground": "#fff",
              "DEFAULT": "#b63319"
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
              "DEFAULT": "#e8e8e8",
              "foreground": "#000"
            },
            "content2": {
              "DEFAULT": "#ffc2c2",
              "foreground": "#000"
            },
            "content3": {
              "DEFAULT": "#ee6a6a",
              "foreground": "#000"
            },
            "content4": {
              "DEFAULT": "#7c1212",
              "foreground": "#fff"
            },
            "focus": "#ff8000",
            "overlay": "#a59090",
            "divider": "#000000"
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
    }
  )],
};