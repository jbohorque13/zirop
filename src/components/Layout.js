import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';  
import Context from 'components/Context';
import HeaderMenu from 'components/HeaderMenu';
import { GlobalStyle } from "styles/index";
import { useMetaDataQuery } from 'components/hooks/useMetaDataQuery';
import { useConfig } from 'components/hooks/useConfig';
// styles

const Layout = ({ children }) => {
    const [pageYScroll, setPageYScroll] = useState(0);
    const [showMenu, setShowMenu] = useState(true);
    const data = useMetaDataQuery();
    const menu = useConfig();

    useEffect(() => {
      const handleScroll = () => {
        const { pageYOffset } = window;
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
          <HeaderMenu pages={menu} />
          
          {children}
        </Context.Provider>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;