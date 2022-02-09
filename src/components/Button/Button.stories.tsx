import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonProps } from '../../utils/types';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

//  Background Primary
export const BackgroundPrimary = Template.bind({});

BackgroundPrimary.args = {
  children: 'Primary Button',
  background: 'primary',
};

//  Background Secondary
export const BackgroundSecondary = Template.bind({});

BackgroundSecondary.args = {
  children: 'Secondary Button',
  background: 'secondary',
};

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
