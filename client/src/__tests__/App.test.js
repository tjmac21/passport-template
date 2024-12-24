import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('renders App component without crashing', () => {
  render(<App />);
  expect(screen.getByText('Passport-Template')).toBeInTheDocument();
}); 