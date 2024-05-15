import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};

  .menu-btn{
    margin-top:6px;
    display:none;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:1.25rem 3.125rem;

    h2.header-title {
      font-size: 2.3rem;
    }

    .profile-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .user-image-container {
        width: 45px;
        height: 45px;
        margin-right: 1.25rem;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .notification-container {
        width: 30px;
        height: 30px;
        position: relative;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .notification-container::after {
        content: "";
        display: block;
        height: 0.75rem;
        width: 0.75rem;
        background: ${({ theme }) => theme.colors.red};
        border-radius: 50%;
        position: absolute;
        right: 5px;
        top:-2px;
      } {
      }
    }
  }

  ${({ theme }) => theme.mediaQueries.allMedium} {
   .header-content{
    padding:1.25rem 1.25rem;
   }

   .menu-btn{
      display:block;
    }
  }
`;
