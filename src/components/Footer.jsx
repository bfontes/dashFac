import React from 'react'
import styled from 'styled-components';

const FooterContainer = styled.div`
  margin-top: 24px;
`;

const FooterText = styled.p`
  color: #374151;
  text-align: center;
  margin: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2023 All rights reserved by FactoryPal.com
      </FooterText>
    </FooterContainer>
  )
}


export default Footer