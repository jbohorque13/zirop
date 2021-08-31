import React from 'react';
import { createGlobalStyle } from "styled-components"

// styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme === "purple" ? "purple" : "white")};
    margin: 0;
  }
`
const Layout = ({ children }) => {
    return (
        <React.Fragment> 
          <GlobalStyle theme="purple" />
          {children}
        </React.Fragment>
    )
}

export default Layout;