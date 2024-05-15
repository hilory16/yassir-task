import styled, { css } from "styled-components";

const buttonSize = css`
  ${(props) => {
    switch (props.size) {
      case "sm":
        return { width: "fit-content", padding: "0 25px" };

      default:
        return { width: "100%", padding: "19px 25px" };
    }
  }}
`;
const templates = {
  google: "secondary",
  apple: "text",
};

const buttonBackground = css`
  ${({ variant, theme, template, border }) => {
    switch (variant) {
      case "white":
        return {
          background: theme.colors.btnText,
          color: theme.colors.primary,
          ...(border && {
            border: `1px solid ${theme.colors[border]}`,
          }),
        };

      case "transparent":
        return {
          background: theme.colors.transparent,
          color: theme.colors.primary,
          ...(border && {
            border: `1px solid ${theme.colors[border]}`,
          }),
        };

      case "border":
        return {
          background: theme.colors.btnText,
          color: theme.colors.primary,
          boxShadow: "0px 15px 33px rgba(0, 0, 0, 0.11)",
        };

      case "grey":
        return {
          background: theme.colors.btnText,
          color: "#778699",
          boxShadow: "0px 15px 33px rgba(0, 0, 0, 0.11)",
          ...(border && {
            border: `1px solid ${theme.colors[border]}`,
          }),
        };

      default:
        return {
          background: theme.colors[templates[template] || "primary"],
          color: theme.colors.white,
          ...(border && {
            border: `1px solid ${theme.colors.grey1}`,
          }),
        };
    }
  }}
`;

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 19px 25px;
  height: 50px;
  border-radius: 15px;
  outline: none;
  transition: all ease 0.1s;
  font-weight: 600;
  font-size: 15px;
  line-height: 12px;
  ${buttonBackground}
  ${buttonSize}

    :focus {
    outline: none;
  }

  .btn-text {
    font-weight: 600;
    font-size: 15px;
    line-height: 12px;
  }

  .btn-content {
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    pointer-events: none;
  }

  img {
    margin-right: 15px;
  }

  :disabled {
    color: ${({ theme }) => theme.colors.grey1};
    background: ${({ theme }) => theme.colors.grey1};
    cursor: not-allowed;
  }

  :hover {
    opacity: 0.8;
  }
`;
