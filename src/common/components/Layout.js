import React from 'react';
import { createGlobalStyle } from "styled-components"

// styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme === "purple" ? "purple" : "white")};
    margin: 0;
  }
`
const stylesDivTest = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const Layout = ({ children }) => {
    return (
        <React.Fragment> 
          <GlobalStyle  theme="purple" />
          {children}
          <main style={stylesDivTest}>
              <h1>
                  {children._owner.key.replaceAll('/', '')}
              </h1>
          </main>
        </React.Fragment>
    )
}

export default Layout;