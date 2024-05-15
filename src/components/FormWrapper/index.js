import styled from "styled-components";

export const InputWrapper = styled.div`
  margin-bottom: ${(props) => props.mb || "30px"};

  &.minified-mb {
    margin-bottom: 20px;
  }

  &.reduced-mb {
    margin-bottom: 25px;
  }

  &.large-mb {
    margin-bottom: 80px;
  }

  &.margin-less {
    margin-bottom: 0;
  }

  ${(props) => `${props.theme.mediaQueriessmall}{
        margin-bottom:25px;
    }`}
`;

export const InputGroupWrapper = styled(InputWrapper)`
  display: flex;
  justify-content: space-between;

  & > div {
    width: calc(50% - 10px);
  }

  ${(props) => `${props.theme.mediaQueries.small}{
        flex-wrap:wrap;

        & > div:first-child{
            margin-bottom:25px;
        }

        & > div {
            width: 100%;
        }
    }`}
`;

export const InputErrorWrapper = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 14px;
  color: ${(props) => props.theme.colors[props.variant || "red"]};
  margin-top: 10px;
  padding-left: 2px;

  &.error-independent {
    position: absolute;
    bottom: -20px;
  }

  variant :first-letter {
    text-transform: capitalize;
  }
`;
