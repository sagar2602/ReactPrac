import React from "react";
import ReactDOM from "react-dom/client";

//JSX
// JSX => React.createElement =>  ReactElement-JS Object => HTMLElemnt(render)
const jsxheading = (
  <h1 className="head" tabIndex="5">
    JSX Namaste React!
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Whateverhappen in react it will happen under this root

root.render(jsxheading);


