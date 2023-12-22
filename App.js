import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => (
  <h1 className="head" tabIndex="5">
    JSX Namaste React Title Compoenent!
  </h1>
);


const HeadingCmponent = () => (
  <div id="container">
    <Title />
    <h1 className="head" tabIndex="5">
      JSX Namaste React Heading Compoenent!
    </h1>
  </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));

// Whateverhappen in react it will happen under this root

root.render(<HeadingCmponent />);


