import React from 'react';
import styled from "styled-components";

const ChartsHeader = ({ category, title }) => (
  <StyledChartsHeader>
    <div>
      <ChartText>Chart</ChartText>
      <ChartCategory>{category}</ChartCategory>
    </div>
    <ChartTitle>{title}</ChartTitle>
  </StyledChartsHeader>
);

const StyledChartsHeader = styled.div`
  margin-bottom: 2.5rem;
`;

const ChartText = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #9ca3af;
`;

const ChartCategory = styled.p`
  font-size: 2rem;
  font-weight: 800;
  line-height: 2.5rem;
  letter-spacing: -0.025em;
  color: #374151;
`;

const ChartTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.25rem;
  text-align: center;
  color: #374151;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
`;

export default ChartsHeader;
