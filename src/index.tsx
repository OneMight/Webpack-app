import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { fontTheme } from "./app/themes/themes";
import { ThemeProvider } from "@mui/material/styles";
const root = document.getElementById("root");
if (!root) {
  throw new Error("root not found");
}
const container = createRoot(root);
container.render(
  <Provider store={store}>
    <ThemeProvider theme={fontTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
);
