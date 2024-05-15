import styled, { css } from "styled-components";

export const SelectInputWrapper = styled.div`
  border-radius: 0.5rem;
  position: relative;

  &.focus {
    .react-select__control {
      border: 1px solid ${({ theme }) => theme.colors.primary} !important;
    }
  }

  &.input-error {
    .react-select__control {
      border: 1px solid ${({ theme }) => theme.colors.red} !important;
    }
  }

  &.valid {
    .react-select__single-value {
      padding-top: 0.75rem;
      margin: 0;
    }

    .valid-placeholder {
      transition: all ease 0.3s;
      padding-top: 1.031rem;
      opacity: 1;
    }
  }

  .valid-placeholder {
    position: absolute;
    top: 0;
    font-size: 11px;
    line-height: 8px;
    color: ${({ theme }) => theme.colors.primary};
    pointer-events: none;
    padding-left: 1.125rem;
    padding-top: 8px !important;
    z-index: 1;
    opacity: 0;
    margin-top: 0;
  }

  .react-select__value-container {
    width: 100%;
    height: 2.563rem;
    padding: 0 1rem;
    outline: none;
  }

  .react-select__control {
    height: 2.563rem;
    width: 100%;
    font-size: 14px;
    background: ${({ theme }) => theme.colors.transparent};
    border-radius: 0.5rem;
    box-shadow: none !important;
    border: 1px solid ${({ theme }) => theme.colors.grey1} !important;
  }

  .react-select__input-container {
    input {
      font-size: 14px;
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      outline: none;
      caret-color: ${({ theme }) => theme.colors.primary};
    }
  }

  .react-select__placeholder {
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: 14px;
    line-height: 11px;
    color: ${({ theme }) => theme.colors.black};
    white-space: nowrap;
  }

  .react-select__indicator {
    svg {
      path {
        stroke: ${({ theme }) => theme.colors.black};
        fill: ${({ theme }) => theme.colors.black};
        stroke-width: 0.1;
        stroke-miterlimit: 10;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
    }
  }

  .react-select__indicator-seperator {
    display: none !important;
  }

  #react-select-3-listbox {
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    border: 1px solid ${({ theme }) => theme.colors.grey1};
    border-radius: 0.5rem;
    text-transform: capitalize;
  }

  .react-select__single-value {
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    text-transform: capitalize;
    overflow: unset;
    transition: all ease 0.3s;
    margin: 0;
  }

  .react-select__menu {
    z-index: 2;
  }

  &.disabled {
    pointer-events: none;

    .react-select__control {
      border: 1px solid ${({ theme }) => theme.colors.black} !important;
    }

    .react-select__input-container {
      input {
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .react-select__single-value,
    .react-select__placeholder,
    .valid-placeholder {
      color: ${({ theme }) => theme.colors.red};
    }

    .react-select__control {
      background: ${({ theme }) => theme.colors.grey1};
    }
  }

  ${({ basic }) => {
    if (basic) {
      return css`
        border: none !important;

        .react-select__single-value {
          padding-top: 0 !important;
        }
      `;
    }

    return "";
  }}
`;

export const Label = styled.label`
  font-size: 14px;
`;
