import * as React from 'react';
import Layout from '../../common/components/Layout';
// imports common components 
import HeaderMenu from '../../common/components/HeaderMenu';
const pages = {
    'abouts-us': 'About Us',
    'our-services': 'Our Services',
    'our-culture': 'Our Culture',
    'founders': 'Founders',
    'contact': 'Contact',
}

const Index3 = ({props}) => {
    return (
        <Layout>
          <HeaderMenu 
            {...props}
            pages={pages}
          />
        </Layout>
      ) 
} 

export default Index3; 