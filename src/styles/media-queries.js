/* eslint-disable import/prefer-default-export */
import { css } from '@emotion/core';

const breakpoints = {
  phoneSize: 376,
};

const phoneRule = `(max-width: ${breakpoints.phoneSize - 1}px)`;

const mediaQueries = {
  phone: `@media screen and ${phoneRule}`,
};

const mediaQuery = (size) => (...args) => css`
  ${mediaQueries[size]} {
    ${css(...args)};
  }
`;
export const phoneQuery = mediaQuery('phone');

