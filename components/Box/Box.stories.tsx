// stories/Box.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Box} from './Box';

export default {
  title: 'components/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

export const Basic: ComponentStory<typeof Box> = args => (
  <Box
    width={300}
    height={300}
    backgroundColor="cardPrimaryBackground"
    {...args}
  />
);

Basic.args = {};
