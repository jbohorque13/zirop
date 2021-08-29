import * as React from "react";
import Layout from '../common/components/Layout';
// imports common components 
import HeaderMenu from '../common/components/HeaderMenu';
//import pages from '../common/data/pages';

const pages = {
  'abouts-us': 'About Us',
  'our-services': 'Our Services',
  'our-culture': 'Our Culture',
  'founders': 'Founders',
  'contact': 'Contact',
}

// markup
const IndexPages = ({ props }) => {
  return (
    <Layout>
      <HeaderMenu 
        {...props}
        pages={pages}
      />
    </Layout>
  ) 
}

export default IndexPages
