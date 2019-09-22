import { createGlobalStyle } from 'styled-components'

const BaseStyles = createGlobalStyle`
  body {
    margin: 0;
    color: #FAF5E3;
    background-color: #FAF5E3;
    font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
    font-size: 0.9rem;
  }
`

export default BaseStyles;