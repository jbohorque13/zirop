import * as React from 'react';
import Layout from 'components/Layout';
// imports common components 
//import pages from 'data/pages';
import SectionUI from 'components/Section';
import { Text, Title } from 'components/styled';

import { sectionStyles } from 'components/styles';

const Index1 = ({ props }) => {
    return (
        <Layout>
          <SectionUI style={{ ...sectionStyles, paddingHorizontal: '25px' }}>
            <Title {...sectionStyles }>
               Our Services
            </Title>
            <Text { ...sectionStyles }>
               We are a tech startup based out of LATAM, We provide digital solutions to personalized products or services focusing on UX, creativity and technological scalability.
            </Text>
          </SectionUI>
        </Layout>
      ) 
} 

export default Index1; 