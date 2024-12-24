import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SessionBrief from '../SessionBrief';

const testSession = {
  id: '1',
  name: 'Test Session',
  description: 'This is a test session',
  date: '2023-06-15',
  time: '14:00',
  price: 50,
};

describe('SessionBrief component', () => {
  it('renders the correct session details', () => {
    render(<SessionBrief session={testSession} />);
    expect(screen.getByText('Test Session')).toBeInTheDocument();
    expect(screen.getByText('This is a test session')).toBeInTheDocument();
    expect(screen.getByText('Date: 2023-06-15 - 14:00')).toBeInTheDocument();
    expect(screen.getByText('Price: 50')).toBeInTheDocument();
  });
}); 