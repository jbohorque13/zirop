import React from 'react';
import { Section, Line } from 'components/styled/index';
import RowUI from 'components/Row';

const SectionUI = (props) => {
    return (
        <Section { ...props.style } >
            <RowUI style={{ justifyContent: `center`, position: `relative` }}>
                <Line { ...{ top: `5%`, height: `25%`, backgroundColor: `red` }} />
                <Line { ...{ top: `40%` }} />
                
                { props.children }
            </RowUI>
        </Section>
    );
}

export default SectionUI;