import React, { useContext } from 'react';
import { ItemList, List } from 'components/styled/';
import { Link } from "gatsby"
import { linkStyles, listStyles, itemListStyles } from 'components/styles';
import Context from 'components/Context';

const HeaderMenu = (props) => {
    const { pages } = props;
    const value = useContext(Context);
    if (value) {
        return (
            <List {...listStyles}>
                {Object.keys(pages).map((element, key) => (
                    <ItemList {...itemListStyles} key={`${pages[element]}${key}`}>
                        <Link to={`/${element}`} style={linkStyles}>
                            { pages[element] }
                        </Link>
                    </ItemList>
                ))}
                
            </List>
        )
    }
    return null;
    
}

export default HeaderMenu;