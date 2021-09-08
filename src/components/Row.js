import React from 'react';
import { Row } from 'components/styled/index';

const RowUI = (props) => {
    return (
        <Row { ...props.style } >
            { props.children }
        </Row>
    );
}

export default RowUI;