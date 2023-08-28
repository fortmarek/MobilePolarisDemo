// eslint-disable-next-line shopify-mobile/no-restricted-imports
import React from 'react';
import type {PropsWithChildren} from 'react';

interface Props extends PropsWithChildren {
  titles: string[];
  category: string;
}

export function ColorTable({titles, children, category}: Props) {
  return (
    <>
      <h3>{category}</h3>
      <table>
        <thead>
          <td>Token</td>
          <td>Color value</td>
        </thead>
        {children}
      </table>
    </>
  );
}
