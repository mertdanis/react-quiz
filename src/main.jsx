import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { MainContext } from "./contexts/MainContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <MainContext>
    <App />
  </MainContext>

  /* // </React.StrictMode>, */
);
