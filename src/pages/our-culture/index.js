import * as React from 'react';
import Layout from '../../common/components/Layout';
// imports common components 
import HeaderMenu from '../../common/components/HeaderMenu';
import { Text, Title } from '../../common/components/styled';

import SectionUI from '../../common/components/Section';
import { sectionStyles } from '../../common/styles/';

const pages = {
    'abouts-us': 'About Us',
    'our-services': 'Our Services',
    'our-culture': 'Our Culture',
    'founders': 'Founders',
    'contact': 'Contact',
}

const Index2 = ({ props }) => {
    return (
        <Layout>
          <HeaderMenu 
            {...props}
            pages={pages}
          />
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