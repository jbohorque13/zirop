import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from "styled-components"
import Context from './Context';
// styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme === "purple" ? "purple" : "white")};
    margin: 0;
  }
`
const Layout = ({ children }) => {
    const [pageYOffset, setPageYOffset] = useState(window.pageYOffset);
    const [showMenu, setShowMenu] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > pageYOffset) {
          setShowMenu(false)
        } else {
          setShowMenu(true)
        }
        setPageYOffset(window.pageYOffset);
      }
      window.addEventListener('scroll', handleScroll);
    });

    return (
        <Context.Provider value={showMenu}> 
          <GlobalStyle theme="purple" />
          {children}
        </Context.Provider>
    )
}



export default Layout;