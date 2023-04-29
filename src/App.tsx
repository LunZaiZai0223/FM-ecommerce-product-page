import React from "react";

// plugins
import { ThemeProvider } from "styled-components";

// components
import RootLayout from "./layouts/RootLayout";

// styles
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RootLayout />
    </ThemeProvider>
  );
}

export default App;
