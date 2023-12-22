import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// Build App Layout Component
const AppLayout = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


