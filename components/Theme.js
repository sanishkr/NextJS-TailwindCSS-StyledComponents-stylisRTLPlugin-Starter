import React from 'react'
import { ThemeProvider, StyleSheetManager } from 'styled-components'
import stylisRTLPlugin from 'stylis-plugin-rtl'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './../tailwind.config.js'

const { theme } = resolveConfig(tailwindConfig)

// use `stylisPlugins={[stylisRTLPlugin]}`
// to apply any bidirectional style changes automatically based on language
// eg: float, margin, padding, border...(left/right)
// this gives better DX, as you have to write only one style
const Theme = props => {
  const lang = typeof window === 'object' ? localStorage.getItem('lang') : null
  return (
    <>
      {lang ? (
        <StyleSheetManager
          stylisPlugins={lang === 'ar' ? [stylisRTLPlugin] : []}
        >
          <ThemeProvider {...props} {...{ theme }} />
        </StyleSheetManager>
      ) : null}
    </>
  )
}

export default Theme
