/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    global: {
      ripple: false
    },
    VBtn: {
      variant: 'tonal',
      color: 'terciary'
    },
    VTextField: {
      variant: 'outlined'
    },
    VSelect: {
      variant: 'outlined'
    }
  },
  
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#61850D',
          secondary: '#850D0D',
          terciary: '#0E325D',
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: '#B4EDB5',
          secondary: '#EDB4B4',
          terciary: '#85B5ED',
        }
      }
    },
  },
})
