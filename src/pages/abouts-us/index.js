import * as React from 'react';
import Layout from '../../common/components/Layout';
// imports common components 
import HeaderMenu from '../../common/components/HeaderMenu';
import SectionUI from '../../common/components/Section';
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
          <SectionUI style={section}/>
        </Layout>
      ) 
} 

export default Index5; 