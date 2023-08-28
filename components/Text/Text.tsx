import {createText} from '@shopify/restyle';

import type {Theme} from '../theme';

/**
 * The `BaseText` component is a more permissive version of text that allows using any color from theme.
 * In comparison, `Text` only uses colors from text palette.
 * This component is intended to be used in rare cases when text is not a component on its own but rather a building block for other components.
 * Whenever possible, please use `<Text>` instead.
 *
 * @section Typography
 */
export const BaseText = createText<Theme>();
