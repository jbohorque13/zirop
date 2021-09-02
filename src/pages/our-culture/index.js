import * as React from 'react';
import Layout from 'components/Layout';
// imports common components 
import { Text, Title } from 'components/styled';

import SectionUI from 'components/Section';
import { sectionStyles } from 'components/styles';

const Index2 = ({ props }) => {
    return (
        <Layout>
          <SectionUI style={{ ...sectionStyles, paddingHorizontal: '25px' }}>
            <Title {...sectionStyles }>
               Our Culture
            </Title>
            <Text { ...sectionStyles }>
              .....
            </Text>
          </SectionUI>
        </Layout>
      ) 
} 

export default Index2; 