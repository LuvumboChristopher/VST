import React from 'react';
import data from '../../../../data/data.json';

import CardImage1 from '../../../../assets/img/services_image_1.jpg';
import CardImage2 from '../../../../assets/img/services_image_2.jpg';
import CardImage3 from '../../../../assets/img/services_image_3.jpg';

import { 
  ServicesSection, 
  ServicesContainer, 
  ContentContainer, 
  Card, 
  CardImage, 
  CardTextContainer, 
  CardTitle, 
  CardText, 
  CardImageContainer, 
  ServicestHeader, 
  ServicesTitle, 
  ServicesSubtitle, 
  ServicesSectionContainer, 
  LoremText
} from '../../style';

const Services = () => {
  return (
    <ServicesSection id='services'>
      <ServicesSectionContainer  className="container">
        <ServicestHeader>
          <ServicesTitle>Nos Services</ServicesTitle>
          <ServicesSubtitle>Nos différents produits et services</ServicesSubtitle>
        </ServicestHeader>
        <ServicesContainer>
          <ContentContainer>
            <Card>
              <CardImageContainer>
                <CardImage
                  src={CardImage1}
                  title='Pré-écoutez avant achat'
                  alt='Pré-écoutez avant achat img'
                />
              </CardImageContainer>
              
              <CardTextContainer>
                <CardTitle>{data.services.title1}</CardTitle>
                <LoremText>{data.services.text1}</LoremText>
              </CardTextContainer>
            </Card>
            <Card reverse>
              <CardImageContainer>
                <CardImage
                  src={CardImage2}
                  title='Payez en 4x sans frais'
                  alt='Payez en 4x sans frais img'
                />
              </CardImageContainer>
              <CardTextContainer>
                <CardTitle>{data.services.title2}</CardTitle>
                <LoremText>{data.services.text2}</LoremText>
              </CardTextContainer>
            </Card>
            <Card>
              <CardImageContainer>
                <CardImage
                  src={CardImage3}
                  title='Vinyles et offres exclusives'
                  alt='Vinyles et offres exclusives img'
                />
              </CardImageContainer>
              <CardTextContainer>
                <CardTitle>{data.services.title3}</CardTitle>
                <LoremText>{data.services.text3}</LoremText>
              </CardTextContainer>
            </Card>
          </ContentContainer>
        </ServicesContainer>
      </ServicesSectionContainer>
    </ServicesSection>
  );
}

export default Services;
