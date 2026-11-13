import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import KepaPage from "./components/kepa/KepaPage.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <KepaPage />
  </StrictMode>
);
