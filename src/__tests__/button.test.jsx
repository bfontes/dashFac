import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

test('uses styled-components library correctly', () => {
  const { getByTestId } = render(<Header category="Some category" title="Some title" />);
  const categoryElement = screen.getByTestId('category');
  const titleElement = screen.getByTestId('title');

  expect(categoryElement).toHaveStyleRule('color', '#9CA3AF');
  expect(titleElement).toHaveStyleRule('letter-spacing', '-0.025em');
});

test('styles Header component correctly', () => {
  const { getByTestId } = render(<Header category="Some category" title="Some title" />);
  const categoryElement = screen.getByTestId('category');
  const titleElement = screen.getByTestId('title');

  expect(categoryElement).toHaveStyle('font-size: 1.125rem;');
  expect(titleElement).toHaveStyle('font-size: 1.875rem;');
  expect(titleElement).toHaveStyle('font-weight: 800;');
});
