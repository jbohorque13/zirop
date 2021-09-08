import React from 'react';
import { Row, Line } from 'components/styled/index';

const RowUI = (props) => {
    const { hasLine } = props;
    console.log(hasLine);
    return (
        <Row { ...props.style }>
            {hasLine &&
                <><Line {...{ top: `5%`, height: `25%`, backgroundColor: `red` }} /><Line {...{ top: `40%` }} /></>
            }
            
            { props.children }
        </Row>
    );
}

export default RowUI;