import React from 'react'
import data from '../../../../data/data.json'

import {
  UmdpSection,
  UmdpImgContainer,
  UmdpTextContainer,
  UmdpTextContent,
  UmdpParagrph,
  UmdpSignature,
  UmdpTitle,
  UmdpTextContentContainer,
} from '../../style'

const Umdp = () => {
  return (
    <UmdpSection id='umdp'>
      <UmdpImgContainer />
      <UmdpTextContainer >
        <UmdpTextContent  className="container">
          <UmdpTextContentContainer>
            <UmdpTitle>{data.umdp.title}</UmdpTitle>
            <UmdpParagrph>{data.umdp.text1}</UmdpParagrph>
            <UmdpParagrph>{data.umdp.text2}</UmdpParagrph>
            <UmdpParagrph>{data.umdp.text3}</UmdpParagrph>
            <UmdpParagrph>{data.umdp.text5}</UmdpParagrph>
            <UmdpSignature>{data.umdp.signature}</UmdpSignature>
          </UmdpTextContentContainer>
        </UmdpTextContent>
      </UmdpTextContainer>
    </UmdpSection>
  )
}

export default Umdp
