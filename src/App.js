import "./App.css";
import Drawer from "./components/Drawer";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Drawer />
      </div>
    </ThemeProvider>
  );
}

export default App;
