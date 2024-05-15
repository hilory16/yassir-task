import { CloseSquare, HambergerMenu } from "iconsax-react";
import { string, func } from "prop-types";
import { Image } from "components/Image";
import useTheme from "hooks/useTheme";
import UserImage from "assets/images/user.png";
import BellIcon from "assets/icons/bell.svg";
import { HeaderWrapper } from "./Header.style";

export default function Header({ setShow, show }) {
  const { theme } = useTheme();

  return (
    <HeaderWrapper>
      <div className="header-content">
        <button type="button" className="menu-btn" aria-label="menu">
          {show === "show" ? (
            <CloseSquare
              size="30"
              color={theme.colors.black}
              onClick={() => setShow("hide")}
            />
          ) : (
            <HambergerMenu
              size="30"
              color={theme.colors.black}
              onClick={() => setShow("show")}
            />
          )}
        </button>
        <h2 className="header-title">Dashboard</h2>

        <div className="profile-container">
          <div className="user-image-container">
            <Image src={UserImage} alt="profile picture" />
          </div>
          <div className="notification-container">
            <Image src={BellIcon} alt="profile picture" />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  setShow: func,
  show: string,
};
