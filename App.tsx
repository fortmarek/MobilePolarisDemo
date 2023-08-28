import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import StorybookUIRoot from './.ondevice/Storybook';
import {theme} from './components/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StorybookUIRoot />
    </ThemeProvider>
  );
}
