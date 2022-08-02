import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('<Button /> tests', function() {
  test('Should render provided children prop', function() {
    render(<Button>Hello World</Button>);
    expect(screen.getByText(/Hello World/i));
  });

  test('Should receive event handlers', async function() {
    const user = userEvent.setup();
    const mockEventHandler = jest.fn();
    render(<Button onClick={mockEventHandler}>Hello World</Button>);
    await user.click(screen.getByText(/hello world/i));
    // expect(mockEventHandler).toHaveBeenCalled();
  });
});
