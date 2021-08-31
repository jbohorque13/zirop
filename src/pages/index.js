import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby";
import Layout from '../common/components/Layout';
// imports common components 
import HeaderMenu from '../common/components/HeaderMenu';
import SectionUI from '../common/components/Section';
import { Text, Title } from '../common/components/styled';
import { sectionStyles, titleStyles, linkButtonStyles } from '../common/styles/';

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
      <SectionUI style={{ ...sectionStyles, flexDirection: 'row', paddingHorizontal: '50px' }}>
        <SectionUI style={{ ...sectionStyles, paddingHorizontal: '50px' }}>
          <Title {...titleStyles }>
            Abount Us 
          </Title>
          <Text {...{ ...sectionStyles, fontSize: '25px'}}>
              We are a tech startup based out of LATAM, We provide digital solutions to personalized products or services focusing on UX, creativity and technological scalability.
          </Text>
          <Text {...{ ...sectionStyles, fontSize: '18px'}}>
              We are a tech startup based out of LATAM, We provide digital solutions to personalized products or services focusing on UX, creativity and technological scalability.
          </Text>
          <Link to="/our-services" style={linkButtonStyles} >
              Our Sevices
          </Link>
        </SectionUI>
        <SectionUI> 
          <StaticImage src="../images/us.jpg" alt="....." />
        </SectionUI>
        
      </SectionUI>
    </Layout>
  ) 
}

export default IndexPages
