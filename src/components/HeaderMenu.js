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
                {pages.map((element) => (
                    <ItemList {...itemListStyles} key={`${element.id}`}>
                        <Link to={`/${element.page}`} style={linkStyles}>
                            { element.name }
                        </Link>
                    </ItemList>
                ))}
                
            </List>
        )
    }
    return null;
    
}

export default HeaderMenu;