import styled, { css } from "styled-components";

export const Div = styled.div`
  ${({ fullWidth }) => fullWidth && "width: 100%;"}
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const Label = styled.label`
  pointer-events: none;
  color: #435a70;
  white-space: nowrap;
  margin-bottom: 0.3rem;
  font-size: 1rem;
  display: block;
  font-weight: 400;
  color: ${({ theme, error }) =>
    error ? theme.colors?.red : theme.colors?.black};
`;

export const AdornmentWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  position: absolute;
  padding-left: 10px;
  margin-right: 10px;

  &.end {
    right: 0px;
    top: 25%;
  }
`;

const inputFieldCss = css`
  width: 100%;
  border-radius: 100px;

  outline: none;
  font-size: 0.938rem;
  appearance: none;
  border-radius: 0;
  box-sizing: border-box;
  height: 2.5rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors?.white};

  &::-ms-clear {
    display: none;
  }

  &::-ms-expand {
    display: none;
  }

  &:-moz-ui-invalid {
    box-shadow: none;
  }

  &::placeholder {
    font-weight: 400;
    color: #8fa7bc;
    font-size: 0.813rem;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: #000 !important;
  }

  &:disabled {
    background-color: hsl(0, 0%, 95%);
  }
`;

export const InputField = styled.input`
  ${inputFieldCss};
  background-color: ${({ theme }) => theme.colors?.white};
`;

export const ErrorP = styled.p`
  margin: 0.1rem 0 0 0;
  color: ${({ theme }) => theme.colors?.red};
  font-size: 1.4rem;
  letter-spacing: -0.01rem;
  font-weight: 400;

  ${({ easyFlow }) =>
    easyFlow &&
    css`
      margin: 0;
      position: absolute;
      left: 65px;
      bottom: -21px;
      font-size: 11.5px;
    `}
`;

export const InputFieldWrapperDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  input {
    padding: 0 ${({ startadornment }) => (startadornment ? "1rem" : "1rem")};
    padding-left: ${({ startadornment }) =>
      startadornment ? "2.5rem " : "1rem"};
    border: 1px solid
      ${({ theme, error }) => (error ? theme.colors?.red : theme.colors?.grey1)};
  }
`;
