import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Typography } from './Typography';

describe('<Typography /> tests', function () {
  test('Should render the provided children prop', function () {
    render(<Typography>Hello World</Typography>);
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });

  test('Should render the provided tagName prop', function () {
    render(<Typography tagName="h1">Hello World</Typography>);
    expect(screen.getByText(/Hello World/i).tagName).toBe('H1');
  });
});
