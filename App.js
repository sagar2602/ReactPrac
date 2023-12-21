import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement is an object => when we render it on DOM it becomes HTML element
// React.createElement =>  ReactElement-JS Object => HTMLElemnt(render)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

//JSX
// JSX => React.createElement =>  ReactElement-JS Object => HTMLElemnt(render)
const jsxheading = <h1> JSX Namaste React! </h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// Whateverhappen in react it will happen under this root

root.render(jsxheading);


