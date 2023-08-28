import {Box} from '../Box';
import React from 'react';
import {Text} from '../Text';

export interface BadgeProps {
  text: string;
}

/**
 * Add documentation for Badge
 */
export function Badge({text}: BadgeProps) {
  return (
    <Box
      flexDirection="row"
      alignSelf="flex-start"
      alignItems="center"
      justifyContent="center"
      paddingHorizontal="s"
      paddingVertical="s"
      borderRadius={10}
      backgroundColor="cardPrimaryBackground">
      <Text color="mainBackground">{text}</Text>
    </Box>
  );
}
