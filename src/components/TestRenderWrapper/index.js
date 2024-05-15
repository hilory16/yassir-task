import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { MemoryRouter as Router } from "react-router-dom";
import useTheme from "hooks/useTheme";

export function TestRenderWrapper({ children }) {
  const { theme } = useTheme();
  return (
    <Router>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    </Router>
  );
}

TestRenderWrapper.propTypes = {
  children: PropTypes.node,
};
