import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { TypographyProps } from '../../utils/types';
import { Typography } from './Typography';

export default {
  component: Typography,
  title: 'Typography',
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

//  Font Type Primary
export const FontTypePrimary = Template.bind({});

FontTypePrimary.args = {
  children: 'Font Type Primary Button',
  fontType: 'primary',
};

//  Font Type Secondary
export const FontTypeSecondary = Template.bind({});

FontTypeSecondary.args = {
  children: 'Font Type Secondary Button',
  fontType: 'secondary',
};

//  Font Weight Regular
export const FontWeightRegular = Template.bind({});

FontWeightRegular.args = {
  children: 'Font Weight Regular Button',
  fontWeight: 'regular',
};

//  Font Weight Bold
export const FontWeightBold = Template.bind({});

FontWeightBold.args = {
  children: 'Font Weight Bold Button',
  fontWeight: 'bold',
};
