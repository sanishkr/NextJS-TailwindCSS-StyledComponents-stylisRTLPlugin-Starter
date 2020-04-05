import React from 'react'
import Theme from './../components/Theme'
import 'tailwindcss/dist/base.css'

const App = ({ Component, pageProps }) => (
  <Theme>
    <Component {...pageProps} />
  </Theme>
)

export default App
