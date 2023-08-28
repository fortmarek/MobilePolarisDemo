import {createScreenshotTest} from '@shopify/react-native-testify';

import {DefaultBadge} from './Badge.examples';

createScreenshotTest('Badge')
  .add(DefaultBadge)
  .add('Polaris docs', () => <DefaultBadge />);
