import React from 'react';
import styled from 'styled-components';

const TableHeaderWrapper = styled.div`
  margin-bottom: 40px;
`;

const TableHeaderTitle = styled.p`
  font-size: 1.125rem;
  line-height: 1.75 rem;
  color: rgb(156, 163, 175);
`;

const TableHeaderCategory = styled.p`
  font-size: 1.875rem;
  line-height: 2.75rem;
  font-weight: 800;
 letter-spacing: -0.025em;
  color:#0F172A;
`;

const TableHeaderSubtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: center;
  color: #000000;
`;

const TableHeader = ({ category, title }) => (
  <TableHeaderWrapper data-testid="header-wrapper">
    <div>
      <TableHeaderTitle data-testid="header-title">Table</TableHeaderTitle>
      <TableHeaderCategory  data-testid="header-category">{category}</TableHeaderCategory>
    </div>
    <TableHeaderSubtitle  data-testid="header-subtitle">{title}</TableHeaderSubtitle>
  </TableHeaderWrapper>
);


export default TableHeader;
