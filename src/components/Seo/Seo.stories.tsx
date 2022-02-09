import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { SeoProps } from '../../utils/types';
import { Seo } from './Seo';

export default {
  title: 'Seo',
  component: Seo,
} as Meta;

const Template: Story<SeoProps> = (args) => <Seo {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Example | Home',
  description: 'Perfect example for the Seo component',
};
