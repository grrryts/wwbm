import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import RootPage from '../app/page';

describe('RootPage', () => {
  it('renders the page', () => {
    const container = render(<RootPage />);
    expect(container).toMatchSnapshot();
  });
});
