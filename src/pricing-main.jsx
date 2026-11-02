import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PricingPage from "./components/pricing/PricingPage.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PricingPage />
  </StrictMode>
);
