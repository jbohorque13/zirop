import * as React from 'react';
import { Section } from './styled/index';

const SectionUI = (props) => {
    return (
        <Section { ...props.style } >
            <h1>Prueba de Section</h1>
        </Section>
    );
}

export default SectionUI;