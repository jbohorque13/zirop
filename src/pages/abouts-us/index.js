import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
// imports common components 
import SectionUI from 'components/Section';
import { Text, Title } from 'components/styled';
import { sectionStyles } from 'components/styles';

const Index5 = ({ props }) => {
  
    return (
        <Layout>
          <SectionUI style={{ ...sectionStyles, paddingHorizontal: '25px', paddingVertical: '30px' }}>
            <Title {...sectionStyles }>
              Abount Us 
            </Title>
            <Text {...{ ...sectionStyles, fontSize: '25px'}}>
               We are a tech startup based out of LATAM, We provide digital solutions to personalized products or services focusing on UX, creativity and technological scalability.
            </Text>
            <Text {...{ ...sectionStyles, fontSize: '22px'}}>
               We are a tech startup based out of LATAM, We provide digital solutions to personalized products or services focusing on UX, creativity and technological scalability.
               We are a tech startup based out of LATAM, We provide digital solutions to personalized products or services focusing on UX, creativity and technological scalability.
               We are a tech startup based out of LATAM, We provide digital solutions to personalized products or services focusing on UX, creativity and technological scalability.
            </Text>
            <StaticImage src="../../images/us.jpg" alt="....." />
          </SectionUI>
        </Layout>
      ) 
} 

export default Index5; 