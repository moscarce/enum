import { render } from '@testing-library/react';
import Page from '../../../app/workspace/page';

describe('Page component', () => {
  it('should render "workspace"', () => {
    const { getByText } = render(<Page />);
    const resourceElement = getByText('workspace');
    expect(resourceElement).toBeInTheDocument();
  });

});
