import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('Header renders', () => {
    render(<Header />);
    const headerTitle = screen.getByText(/Where in the world?/i);
    const modeText = screen.getByText(/Dark Mode/i);
    const modeIcon = screen.getByRole('img');
    expect(modeIcon).toHaveAttribute('src', 'moon.svg');
    expect(modeIcon).toHaveAttribute('alt', 'Moon');
    expect(headerTitle).toBeInTheDocument();
    expect(modeText).toBeInTheDocument();
  });
});
