import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';

describe('<Layout /> tests', function () {
  test('Should render the provided children prop', function () {
    render(<Layout>Hello World</Layout>);
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });
});
