import { theme, GlobalStyles } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
