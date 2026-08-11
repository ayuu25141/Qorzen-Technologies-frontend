import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SmoothCursor } from "@/components/lightswind/smooth-cursor";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothCursor
      size={25}
      color="#155EEF"
      rotateOnMove={true}
      scaleOnClick={true}
      glowEffect={true}
    />

    <App />
  </StrictMode>
);