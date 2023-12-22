import React from "react";
import ReactDOM from "react-dom/client";

// Functional component using Arrow function.
const Title = () => (
  <h1 className="head" tabIndex="5">
    JSX Namaste React Title Compoenent!
  </h1>
);

// Functional component without using Arrow function.
const Title2 = function () {
  return (
    <h1 className="head" tabIndex="5">
      JSX Namaste React Title-2 Compoenent!
    </h1>
  )
};

// JS variable
const num = 1000;

// React Element - 1
const ele = <span>Hi Welcome -- </span>

// React Element
const rElement = (
  <h1>
    {ele}
    Hi I am react element!
  </h1>
);

const HeadingCmponent = () => (
  <div id="container">
    <Title />
    <Title2 />
    <h1>{ rElement }</h1>
    <h2>{num}</h2>
    <h3>{ 100 + 200 }</h3>
    <h1 className="head" tabIndex="5">
      JSX Namaste React Heading Compoenent!
    </h1>
  </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));

// Whateverhappen in react it will happen under this root

root.render(<HeadingCmponent />);


