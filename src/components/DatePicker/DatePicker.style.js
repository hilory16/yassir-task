import styled from "styled-components";

export const DatePickerWrapper = styled.div`
  width: 100%;

  label {
    font-size: 0.875rem;
  }

  .react-datepicker-popper {
    z-index: 10;
  }

  .input-area {
    width: 100%;
    position: relative;
  }

  .valid-placeholder {
    position: absolute;
    top: 0;
    font-size: 11px;
    line-height: 8px;
    color: ${({ theme }) => theme.colors.primary};
    pointer-events: none;
    padding-left: 1.25rem;
    padding-top: 26px;
    opacity: 0;
  }

  .react-datepicker-wrapper {
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.transparent};
    padding: 0 1rem;
    height: 2.563rem;
    width: 100%;
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.grey1};
  }

  .react-datepicker__input-container {
    input {
      background: transparent;
      width: 100%;
      border: none;
      outline: none;
      font-size: 14px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.black};
      transition: all ease 0.3s;
      height: 2.563rem;
      width: 100%;

      ::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 11px;
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }

  .date-picker-custom-header {
    padding: 0.625rem  1rem;  1rem;  1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .calendar-arrow {
      cursor: pointer;
    }

    .calendar-arrow.arrow-left {
      svg {
        transform: rotate(180deg);
      }
    }

    .date-select {
      select {
        background: transparent;
        font-family: "BRFirma";
        font-weight: 400;
        text-align: center;
        font-size: 15px;
      }
    }
  }

  &.valid {
    .valid-placeholder {
      transition: all ease 0.3s;
      padding-top: 9px;
      opacity: 1;
    }

    .react-datepicker-wrapper {
      // border: 1px solid ${({ theme }) => theme.colors.primary};
    }

    .react-datepicker__input-container {
      input {
        padding-top: 15px;
      }
    }
  }

  &.focus {
    .react-datepicker-wrapper {
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }
  }

  &.disabled {
    pointer-events: none;

    .react-datepicker__input-container {
      input {
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .react-datepicker-wrapper {
      color: ${({ theme }) => theme.colors.black};
      border: 1px solid ${({ theme }) => theme.colors.grey1};
      background: ${({ theme }) => theme.colors.transparent};
    }

    input::placeholder {
      color: ${({ theme }) => theme.colors.black};
    }

    .valid-placeholder {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
