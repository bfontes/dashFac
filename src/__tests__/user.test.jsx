import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import UserProfile from '../components/UserProfile';

const useStateContext = require('../contexts/ContextProvider').useStateContext;

jest.mock('../contexts/ContextProvider', () => ({
  useStateContext: jest.fn(),
}));

describe('My component', () => {
  it('should render correctly with mocked currentColor', () => {
    const mockedCurrentColor = '#ff0000';
    useStateContext.mockImplementation(() => ({
      currentColor: mockedCurrentColor,
    }));

    // your test code here
  });
});

test('should render UserProfile component', () => {
  render(<UserProfile />);
  const userProfile = screen.getByText('User Profile');
  expect(userProfile).toBeInTheDocument();
});

test('should render logout button', () => {
  render(<UserProfile />);
  const logoutButton = screen.getByRole('button', { name: 'Logout' });
  expect(logoutButton).toBeInTheDocument();
});

test('should render user profile data', () => {
  render(<UserProfile />);
  const userName = screen.getByText('Ana');
  expect(userName).toBeInTheDocument();
  const jobTitle = screen.getByText('FrontEnd Enginner');
  expect(jobTitle).toBeInTheDocument();
  const email = screen.getByText('ana@factory.com');
  expect(email).toBeInTheDocument();
});



