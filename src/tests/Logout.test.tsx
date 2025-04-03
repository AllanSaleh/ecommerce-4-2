import { render } from '@testing-library/react';
import Logout from '../pages/Logout';

test('matches snapshot', () => {
  // Render the component
  const { asFragment } = render(<Logout />);

  // Create a snapshot of the rendered component
  expect(asFragment()).toMatchSnapshot();
});
