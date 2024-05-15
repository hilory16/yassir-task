import { css } from 'styled-components';

export const variables = css`
   :root {
      /* Colors */
      --color-white: #fff;
      --color-black: #000;
      --color-red: red;
      --color-blue: #1354d3;
      --color-grey: #d7e0e9;
      --color-grey01: #8fa7bc;
      --color-transparent: transparent;

      /* Font Sizes */
      --font-size-small: 1.4rem;
      --font-size-medium: 1.6rem;

      @media (min-width: 1024px) {
         --font-size-small: 1.7rem;
         --font-size-medium: 1.9rem;
      }
   }
`;
