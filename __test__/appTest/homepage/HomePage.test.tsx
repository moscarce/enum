/* eslint-env jest */
/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../../../app/home/page';

describe('HomePage component', () => {
    it('renders without crashing', () => {
        render(<HomePage />);
    });

    it('displays the correct content', () => {
        const { getByText } = render(<HomePage />);
        const homePageText = getByText('HomePage');
        expect(homePageText).toBeInTheDocument();
    });
});
