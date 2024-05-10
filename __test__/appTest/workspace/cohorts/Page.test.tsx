import { render } from '@testing-library/react';
import Cohorts from '../../../../app/workspace/cohorts/page';

describe('Cohorts component', () => {
  it('should render "cohorts"', () => {
    const { getByText } = render(<Cohorts />);
    const cohortsElement = getByText('cohorts');
    expect(cohortsElement).toBeInTheDocument();
  });

});
