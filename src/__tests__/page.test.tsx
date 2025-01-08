import RootPage from '../app/page';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('RootPage', () => {
  it('renders the page', () => {
    render(<RootPage />);
  });
});
