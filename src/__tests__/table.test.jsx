import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import TableHeader from '../components/TableHeader';


describe('TableHeader', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <TableHeader category="category" title="title" />
    );
    
    expect(screen.getByText('Table')).toBeInTheDocument();
    expect(screen.getByText('category')).toBeInTheDocument();
    expect(screen.getByText('title')).toBeInTheDocument();
  });
});

test('renders with correct style', () => {
  const { getByTestId } = render(
      <TableHeader category="category" title="title" />
    );
    
    const headerWrapper = screen.getByTestId('header-wrapper');
    expect(headerWrapper).toHaveStyle(`
      margin-bottom: 40px;
    `);
    
    const headerTitle = screen.getByTestId('header-title');
    expect(headerTitle).toHaveStyle(`
      font-size: 1.125rem;
      line-height: 1.75 rem;
      color: rgb(156, 163, 175);
    `);
    
    const headerCategory = screen.getByTestId('header-category');
    expect(headerCategory).toHaveStyle(`
      font-size: 1.875rem;
      line-height: 2.75rem;
      font-weight: 800;
      letter-spacing: -0.025em;
      color:#0F172A;
    `);
    
    const headerSubtitle = screen.getByTestId('header-subtitle');
    expect(headerSubtitle).toHaveStyle(`
      font-size: 1.25rem;
      line-height: 1.75rem;
      text-align: center;
      color: #000000;
    `);
});

test('receives props correctly', () => {
  const category = 'category';
  const title = 'title';
  const { getByText } = render(
    <TableHeader category={category} title={title} />
  );
  
  expect(screen.getByText(category)).toBeInTheDocument();
  expect(screen.getByText(title)).toBeInTheDocument();
});





