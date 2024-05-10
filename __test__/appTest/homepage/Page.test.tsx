import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import Page from '../../../app/page';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Page component', () => {
  it('should redirect to /home on mount', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    render(<Page />);

    expect(pushMock).toHaveBeenCalledWith('/home');
  });

  // Additional tests can be added here if needed
});
