import * as React from 'react';
import Layout from '../../common/components/Layout';
// imports common components 
import HeaderMenu from '../../common/components/HeaderMenu';
import SectionUI from '../../common/components/Section';
import { Text, Title } from '../../common/components/styled';

import { section } from '../../common/styles/';

const pages = {
    'abouts-us': 'About Us',
    'our-services': 'Our Services',
    'our-culture': 'Our Culture',
    'founders': 'Founders',
    'contact': 'Contact',
}

const Index5 = ({ props }) => {
    return (
        <Layout>
          <HeaderMenu 
            {...props}
            pages={pages}
          />
          <SectionUI style={{ ...section, paddingHorizontal: '25px' }}>
            <Title {...section }>
              Abount Us 
            </Title>
            <Text { ...section }>
               We are a tech startup based out of LATAM, We provide digital solutions to personalized products or services focusing on UX, creativity and technological scalability.
            </Text>
          </SectionUI>
        </Layout>
      ) 
} 

export default Index5; 