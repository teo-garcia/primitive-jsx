import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Global } from './Global';

describe('<Global /> tests', function () {
  test('Should render the provided children prop', function () {
    render(<Global>Hello World</Global>);
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });
});
