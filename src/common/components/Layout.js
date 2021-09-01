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
    const [pageYScroll, setPageYScroll] = useState(0);
    const [showMenu, setShowMenu] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const { pageYOffset } = window;
        console.log(pageYOffset, pageYScroll);
        if (pageYOffset > pageYScroll) {
          setShowMenu(false)
        } else {
          setShowMenu(true)
        }
        setPageYScroll(pageYOffset);
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