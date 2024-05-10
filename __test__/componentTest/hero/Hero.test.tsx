import { render, screen } from '@testing-library/react';
import Hero from '@/src/components/Hero/Hero';

describe('Hero Component', () => {
  test('renders hero content correctly', () => {
    render(<Hero />);
    
    expect(screen.getByText(/Semicolon Africa/i)).toBeInTheDocument();
    
    expect(screen.getByText(/View Profile/i)).toBeInTheDocument();
  });
});
