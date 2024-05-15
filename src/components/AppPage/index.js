import styled from "styled-components";

export const DashboardWrapper = styled.div`
  padding-left: 15.625rem;

  .dashboard-content {
    min-height: calc(100vh - 90px);
    padding: 2.5rem 3.125rem;
    background: ${({ theme }) => theme.colors.grey1};

    h2.page-title {
      font-size: 1.8rem;
      font-weight: ${({ theme }) => theme.fontWeights.bold};
    }
  }

  ${({ theme }) => theme.mediaQueries.allMedium} {
    padding-left: 0;

    .dashboard-content {
      padding: 2.5rem 1.5rem;
    }
  }
`;
