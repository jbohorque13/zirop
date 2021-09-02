import React, { useEffect, useState } from 'react';
import Context from 'components/Context';
import HeaderMenu from 'components/HeaderMenu';
import { GlobalStyle } from "styles/index";

// styles

const pages = {
  'abouts-us': 'About Us',
  'our-services': 'Our Services',
  'our-culture': 'Our Culture',
  'founders': 'Founders',
  'contact': 'Contact',
}

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
          <HeaderMenu 
            pages={pages}
          />
          
          {children}
        </Context.Provider>
    )
}



export default Layout;