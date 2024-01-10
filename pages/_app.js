
import React from 'react';  




import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`
export default function App({ Component, pageProps }) {
  return( 
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
  )
 
 
}
