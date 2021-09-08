import React from 'react';
import { Section } from 'components/styled/index';

const SectionUI = (props) => {
    return (
        <Section { ...props.style } >
            { props.children }
        </Section>
    );
}

export default SectionUI;