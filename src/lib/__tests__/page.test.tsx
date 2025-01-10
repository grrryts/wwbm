import { Provider } from 'react-redux';

import store from '@/lib/store';
import HomeView from '@/ui/views/home-view';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

it('renders the HomeView and matches snapshot', () => {
  const container = render(
    <Provider store={store}>
      <HomeView />
    </Provider>,
  );

  expect(container).toMatchSnapshot();
});
