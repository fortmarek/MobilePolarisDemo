import React from 'react';
import {createScreenshotTest} from '@shopify/react-native-testify';
// import {Box} from './Box';
import {View} from 'react-native';

// <Box width={300} height={300} backgroundColor="cardPrimaryBackground" />
createScreenshotTest('Box').add('TestDefault', () => {
  return <View style={{width: 300, height: 300, backgroundColor: 'red'}} />;
});
