import { css } from '@emotion/core';

const breakpoints = {
  phoneSize: 617,
  desktopSize: 1200,
};

const phoneRule = `(max-width: ${breakpoints.phoneSize - 1}px)`;
const desktopRule = `(min-width: ${breakpoints.desktopSize}px)`;

const mediaQueries = {
// Doc for "specified size "  => sizeName: `@media screen and ${mediumRule} and ${mediumDownRule}`,
  phone: `@media screen and ${phoneRule}`,
  desktop: `@media screen and ${desktopRule}`,
};

const mediaQuery = (size) => (...args) => css`
  ${mediaQueries[size]} {
    ${css(...args)};
  }
`;
export const phoneQuery = mediaQuery('phone');
export const desktopQuery = mediaQuery('desktop');
