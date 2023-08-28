import {Box} from '../Box';
import React, {PropsWithChildren} from 'react';
import {Text} from '../Text';

export interface BadgeProps extends PropsWithChildren {}

/**
 * Add documentation for Badge
 */
export function Badge({children}: BadgeProps) {
  return (
    <Box
      flexDirection="row"
      alignSelf="flex-start"
      alignItems="center"
      justifyContent="center"
      paddingHorizontal="s"
      paddingVertical="s"
      borderRadius={20}
      backgroundColor="cardPrimaryBackground">
      <Text color="mainBackground">{children}</Text>
    </Box>
  );
}
