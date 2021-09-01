import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby";
import Layout from '../common/components/Layout';
// imports common components 
import SectionUI from '../common/components/Section';
import { Text, Title } from '../common/components/styled';
import { sectionStyles, titleStyles, linkButtonStyles } from '../common/components/styles';

// markup
const IndexPages = ({ props }) => {
  return (
    <Layout>
      <SectionUI style={{ ...sectionStyles, flexDirection: 'row', paddingHorizontal: '50px', paddingVertical: '40px' }}>
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
