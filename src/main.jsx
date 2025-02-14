import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App";
import ViewName from "./components/ViewName";
import store from "./store/store";
import "./index.scss";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ViewName />
  </Provider>
);
