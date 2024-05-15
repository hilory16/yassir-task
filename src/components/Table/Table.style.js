import styled from "styled-components";

export const TableWrapper = styled.div`
  & {
    scrollbar-width: thin;
    width: 100%;
    overflow-x: auto;
    border-radius: 0 0.75rem 0 0.75rem;
  }
  &::-webkit-scrollbar {
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    outline: 0px solid white;
    border-radius: 8px;
    background-color: darkgrey;
    border-radius: 20px;
    border: 1px solid darkgrey;
  }

  .yassir-data-table {
    width: 100%;
    background: white;
    border-radius: 0.75rem;

    .sticky-col {
      position: -webkit-sticky;
      position: sticky;
    }

    .first-col {
      width: 5rem;
      min-width: 5rem;
      max-width: 5rem;
      left: 0px;
    }

    .yassir-table-thead {
      .yassir-table-tr {
        background: ${({ theme }) => theme.colors.lightPrimary};

        .yassir-table-th {
          padding: 1.25rem 1.25rem;
          text-align: center;
          cursor: pointer;
          white-space: nowrap;
          font-size: 0.875rem;
        }

        .yassir-table-th.sticky-col {
          background: ${({ theme }) => theme.colors.lightPrimary};
        }

        .yassir-table-th svg {
          margin-right: 0.125rem;
          transform: translateY(3px);
        }

        .yassir-table-th:first-child {
          border-radius: 0.75rem 0 0 0;
        }

        th:last-child {
          border-radius: 0 0.75rem 0 0;
        }
      }
    }

    .yassir-table-tr {
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey1};

      .yassir-table-td {
        padding: 1.25rem 1.25rem;
        text-align: center;
        text-transform: capitalize;
        font-size: 0.875rem;
        white-space: nowrap;
      }

      .yassir-table-td.sticky-col {
        background: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
