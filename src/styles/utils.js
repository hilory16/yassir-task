import styled from "styled-components";

export const TableControl = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  height: 2.5rem;
  padding: 0 16px;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  white-space: nowrap;

  .trigger-text {
    margin-left: 10px;
    font-size: 0.875rem;
  }

  > * {
    pointer-events: none;
  }
`;
