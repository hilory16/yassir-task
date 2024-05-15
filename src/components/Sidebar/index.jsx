import { Link } from "react-router-dom";
import { string } from "prop-types";
import {
  Element4,
  Reserve,
  CalendarTick,
  MoneySend,
  Setting3,
  Logout,
} from "iconsax-react";
import { Image } from "components/Image";
import useTheme from "hooks/useTheme";
import { sidebarLinks } from "utils/constants/sidebar-links";
import { SidebarWrapper } from "./Sidebar.style";

export default function Sidebar({ show }) {
  const { theme } = useTheme();

  const iconColor = theme.colors.white;

  const dashboardIcons = {
    Dashboard: <Element4 size="32" color={iconColor} />,
    Reservations: <Reserve size="32" color={iconColor} />,
    Bookings: <CalendarTick size="32" color={iconColor} />,
    Payouts: <MoneySend size="32" color={iconColor} />,
    Settings: <Setting3 size="32" color={iconColor} />,
    Logout: <Logout size="32" color={iconColor} />,
  };

  return (
    <SidebarWrapper show={show}>
      <div className="logo-container">
        <Image
          src="https://yassir.com/images/common/logo-yassir-forward-light.svg"
          alt="Logo"
        />
      </div>

      <ul className="sidebar-menu-container">
        {sidebarLinks.map(({ text, link }) => (
          <Link key={text} to={link}>
            <li className="sidebar-link">
              <span className="sidebar-icon">{dashboardIcons[text]}</span>
              <span className="sidebar-text">{text}</span>
            </li>
          </Link>
        ))}
      </ul>
    </SidebarWrapper>
  );
}

Sidebar.propTypes = {
  show: string,
};
