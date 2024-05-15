import styled from "styled-components";

export const DashboardPageWrapper = styled.div`
  .page-title {
    margin-bottom: 1.875rem;
  }

  .table-wrapper {
    border-radius: 0.75rem 0 0 75rem;
    position: relative;
  }

  .serial-no {
    position: absolute;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 0.75rem 0 0 0.75rem;

    li {
      padding: 1.25rem 1.25rem;
      font-size: 0.875;

      .data {
        height: 1.938rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.875rem;
        font-weight: ${({ theme }) => theme.fontWeights.bold};
      }
    }

    li:first-child {
      border-radius: 0.75rem 0 0;
      background: ${({ theme }) => theme.colors.lightPrimary};

      .data {
        height: 1.338rem;
      }
    }
  }
`;

export const ColumnSelectionWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  align-items: center;
  width: 270px;
  padding: 0 1rem;

  li {
    width: calc(50% - 0.625rem);
    font-size: 0.75rem;
    white-space: nowrap;
    display: flex;
    align-items: center;

    .column-checkbox {
      margin-right: 5px;
      cursor: pointer;
    }

    label {
      cursor: pointer;
    }
  }
  .update-button-li {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    .update-button {
      font-size: 0.75rem;
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      padding: 0.5rem;
      border-radius: 0.5rem;
    }
  }
`;

export const FilterModalWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 50px;
  border-radius: 25px;
  background: ${({ theme }) => theme.colors.white};

  .form-wrapper {
    margin-top: 10px;
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .close-icon {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  ${({ theme }) => theme.mediaQueries.allMedium} {
    padding: 20px;
  }
`;

export const TableHeaderWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 1.25rem;
  border-radius: 1rem;
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;

  .title-block {
    display: flex;
    align-items: center;

    .count-badge {
      margin-left: 10px;
      width: 1.875rem;
      height: 1.875rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.colors.grey1};
    }
  }

  .table-general-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;

    .tb-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }
  }

  .search-input-container {
    width: 18.75rem;
  }

  .table-title {
    font-size: 1.1rem;
  }
`;
