import styled from "styled-components";

export const SidebarWrapper = styled.div`
  width: 15.625rem;
  background: ${({ theme }) => theme.colors.primary};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1.875rem 1.25rem;

  .logo-container {
    width: 7.813rem;
    margin-bottom: 3.75rem;
  }

  .sidebar-menu-container {
    display: flex;
    flex-direction: column;
    gap: 2.188rem;

    .sidebar-link {
      display: flex;
      align-items: center;

      .sidebar-icon {
        margin-right: 1.25rem;
      }

      .sidebar-text {
        color: ${({ theme }) => theme.colors.white};
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        font-size: 1.25rem;
      }
    }
  }

  ${({ theme }) => theme.mediaQueries.allMedium} {
    overflow: hidden;
    transition: left ease 0.3s;
    width: 100%;
    top: 85px;

    ${({ show }) => {
      if (show === "show")
        return {
          position: "fixed",
          left: 0,
          padding: " 1.875rem 1.25rem",
          zIndex: 10,
        };

      return {
        left: "-100%",
        padding: 0,
        zIndex: 1,
      };
    }}
  }
`;
