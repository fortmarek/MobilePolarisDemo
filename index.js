/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {installTestify} from '@shopify/react-native-testify';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './components/theme';
import React from 'react';

installTestify({
  appWrapper: ({children}) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  },
  screenshotTestLoaderProvider: () => require('./screenshotTestLoader'),
});

AppRegistry.registerComponent(appName, () => App);
