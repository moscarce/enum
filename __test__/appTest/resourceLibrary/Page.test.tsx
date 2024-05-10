import { render } from '@testing-library/react';
import Page from '../../../app/resourceslibrary/page';

describe('Page component', () => {
  it('should render "resource"', () => {
    const { getByText } = render(<Page />);
    const resourceElement = getByText('resource');
    expect(resourceElement).toBeInTheDocument();
  });

});
