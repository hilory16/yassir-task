import { createGlobalStyle } from "styled-components";
import { override } from "styles/override";
import { ModalStyles } from "components/Modal/Modal.style";
import { normalize } from "./normalize";
import { variables } from "./variables";

const GlobalStyles = createGlobalStyle`
   ${normalize};
   ${variables};
   ${ModalStyles}
   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;600;700;800;900&display=swap');

   /**
   * We find it much easier to reason with border-box as the default box-sizing.
   */
   *,
   *::before,
   *::after {
      box-sizing: border-box;
   }

   html {
      /**
    * The default font size for browsers is 16px.
    * We apply a size of 62.5% so that, by default, all math with rems will use
    * 10px as a base instead of 16px.
    */
      font-size: 62.5%;
   }

   .container{
      padding:0 0.938rem;
      max-width:1400px;
      margin:0 auto;

   }

   body {
      margin: 0;
      min-height: 100%;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      font-family: "Poppins", sans-serif;
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      font-style: normal;
   }

   html,
   body {
      height: 100%;
      margin: 0;
      padding: 0;
      font-size:16px;
    

   }

   body{
      display: flex;
      flex: 1 0 auto;
      flex-direction: column;
   }

   u,
   a {
      @supports (text-underline-offset: 0.4rem) {
         text-underline-offset: 0.4rem;
         padding-bottom: 0.1rem;
      }
      @supports not (text-underline-offset: 0.4rem) {
         text-underline-position: under;
      }
   }

   a{
      text-decoration:none;
   }

   

   .link {
      color: inherit;
      text-decoration: none;
      outline: none;
   }
   .form-control,
   .form-select {
      font-size:initial;
   }
   input,select{
   }

   input[type=button], button {
      border: none;
      outline: none;
      background:transparent;
      border:none;
      cursor:pointer;
    }

    input[type="button"]:focus, button:focus{
      outline: none;
    }

    ${({ theme }) => theme.mediaQueries.allMedium} {
     html, body{
      font-size:14px;
     }
    }
  

   ${override}
`;

export { GlobalStyles };
