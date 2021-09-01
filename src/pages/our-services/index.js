import * as React from 'react';
import Layout from '../../common/components/Layout';
// imports common components 
//import pages from '../../common/data/pages';
import SectionUI from '../../common/components/Section';
import { Text, Title } from '../../common/components/styled';

import { sectionStyles } from '../../common/components/styles';

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