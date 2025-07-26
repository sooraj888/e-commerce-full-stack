import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Home Page', () => {
  it('renders heading', () => {
    render(<Page />);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});
