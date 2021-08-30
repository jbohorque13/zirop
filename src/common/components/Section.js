import * as React from 'react';
import { Section, Text, Title } from './styled/index';


/* props => 
   * title: string
   * description: string
   * image?: string
   * backgroundImage?: string
   * urlLink?: string
*/

const SectionUI = (props) => {
    return (
        <Section { ...props.style } >
                <Title { ...props.style }>Prueba de Section</Title>
                <Text { ...props.style }> subtitulo</Text>
        </Section>
    );
}

export default SectionUI;