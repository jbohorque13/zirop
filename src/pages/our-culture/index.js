import * as React from 'react';
import Layout from '../../common/components/Layout';
// imports common components 
import { Text, Title } from '../../common/components/styled';

import SectionUI from '../../common/components/Section';
import { sectionStyles } from '../../common/components/styles';

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