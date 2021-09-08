import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby";
import Layout from 'components/Layout';
// imports common components 
import SectionUI from 'components/Section';
import RowUI from 'components/Row';
import { Text, Title } from 'components/styled';
import { sectionStyles, titleStyles, linkButtonStyles } from 'components/styles';
// Specified Styles

/* const section = {
  flexDirection: 'row', 
  paddingHorizontal: '50px', 
  paddingVertical: '40px'
} */
// markup
const IndexPages = ({ props }) => {
  return (
    <Layout>
      <SectionUI style={{ ...sectionStyles, flexDirection: 'row', paddingHorizontal: '50px', paddingVertical: '40px', backgroundColor: '#373948' }}>
        <RowUI style={{ ...sectionStyles, paddingHorizontal: '50px' }}>
          <Title {...titleStyles }>
            Abount Us 
          </Title>
          <Text {...{ ...sectionStyles, color: '#fff', fontSize: '25px'}}>
              We are a tech startup based out of LATAM, We provide digital solutions to personalized products or services focusing on UX, creativity and technological scalability.
          </Text>
          <Text {...{ ...sectionStyles, color: '#fff', fontSize: '18px'}}>
              We are a tech startup based out of LATAM, We provide digital solutions to personalized products or services focusing on UX, creativity and technological scalability.
          </Text>
          <Link to="/our-services" style={linkButtonStyles} >
              Our Sevices
          </Link>
        </RowUI>
        <RowUI style={{ alignSelf: `center` }}> 
          <StaticImage src="../images/us.jpg" alt="....." />
        </RowUI>
      </SectionUI>
      <SectionUI style={{ ...sectionStyles, flexDirection: 'row', paddingHorizontal: '50px', paddingVertical: '40px' }}>
        <RowUI style={{ ...sectionStyles, paddingHorizontal: '50px' }}>
          <Title { ...{...titleStyles, color: `#000`} }>
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
        </RowUI>
        <RowUI style={{ alignSelf: `center` }}> 
          <StaticImage src="../images/us.jpg" alt="....." />
        </RowUI>
      </SectionUI>
    </Layout>
  ) 
}

export default IndexPages
