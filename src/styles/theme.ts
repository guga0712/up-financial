import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({

    colors: {
        purple: {
          "900": "#090017",
          "800": "#30009c",
          "700": "#3700b3",
          "600": "#5600e8",
          "500": "#6200ee",
          "400": "#7f39fb",
          "300": "#985eff",
          "200": "#bb86fc",
          "100": "#dbb2ff",
          "50": "#dbb2ff"
        }
      },
    fonts:{
        heading:'Roboto',
        body: 'Roboto'
    },
    styles: {
        global:{
            body:{
                bg: 'purple.900',
                color: 'purple.100'
            },

        }
    }
})