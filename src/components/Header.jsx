import React from 'react'

import styled from 'styled-components';

const HeaderContainer = styled.div`
  margin-bottom: 40px;
`;

const Category = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #9CA3AF;
`;

const Title = styled.p`
  font-size: 1.875rem;
  font-weight: 800;
  line-height: 2.25rem;
  letter-spacing: -0.025em; 
`;

const Header = ({ category, title }) => (
  <HeaderContainer>
    <Category data-testid="category">{category}</Category>
    <Title data-testid="title">{title}</Title>
  </HeaderContainer>
);


export default Header