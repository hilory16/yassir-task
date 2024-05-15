import { css } from "styled-components";

export const ModalStyles = css`
  .ReactModalPortal {
    z-index: 1000;

    .ReactModal__Overlay {
      background-color: rgba(0, 0, 0, 0.3) !important;

      .ReactModal__Content {
        padding: 20px !important;
        margin: 0 !important;
        transform: none !important;
        border-radius: 0 !important;
        background: transparent !important;
        border: none !important;
        inset: 0 !important;
        pointer-events: none;

        .modal-content {
          height: 100%;
          width: 100%;

          > * {
            pointer-events: auto;
          }
        }

        .modal-content.centered {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;
