import * as React from 'react';
import { render } from '@testing-library/react';
import { Seo } from './Seo';

describe('<Layout /> tests', function () {
  test('Should match with the component snapshot', function () {
    const { asFragment } = render(<Seo title="Hello" description="World" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
