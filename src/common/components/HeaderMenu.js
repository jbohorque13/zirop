import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"

const MenuContainer = styled.ul`
    display: flex;
    flex: 1;
    padding: 8 0,
    margin: 0;
    padding: 8;
`
const MenuRow = styled.li`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`   
const stylesLink = {
    fontSize: 16,
    color: '#fff',
    fontWeight: 600,
    textDecoration: 'none',
}

const HeaderMenu = ({ pages }) => {
    
    return (
        <MenuContainer>
            {Object.keys(pages).map((element, key) => (
                <MenuRow key={`${pages[element]}${key}`}>
                    <Link to={`/${element}`} style={stylesLink}>
                        { pages[element] }
                    </Link>
                </MenuRow>
            ))}
            
        </MenuContainer>
    )
}

export default HeaderMenu;