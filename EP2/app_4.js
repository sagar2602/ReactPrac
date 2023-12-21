// // // import React from "react";
// // import ReactDOM from "react-dom/client";

// // /**
// //  * 
// //  * <div id=”parent”>
// //  *   <div id=”child”>
// //  *     <h1>Hi this is H1 Tag</h1>
// //  *   </div>
// //  * </div>
// //  * 
// //  * 
// //  */
// // import React from 'react';
// // // import React from 'react';

// // const ClickButton = () => {
// //   const handleButtonClick = () => {
// //     console.log("Button clicked!");
// //   };

// //   return (
// //     <div>
// //       <button onClick={handleButtonClick}>Click me</button>
// //     </div>
// //   );
// // };

// // export default ClickButton;



// // // Render YourComponent wherever you need it in your React application

// // // const parent = React.createElement(
// // //   "div",
// // //   { id: "parent" },
// // //   React.createElement(
// // //     "div",
// // //     { id: "child" },
// // //     React.createElement(
// // //       "button",
// // //       {},
// // //       "Mrt"
      
// // //     )
// // //   )
// // // );

// // // When more than 2 h1 tags available
// // // const parent = React.createElement(
// // //   "div",
// // //   { id: "parent" },
// // //   React.createElement(
// // //     "div",
// // //     { id: "child" },
// // //     [
// // //       React.createElement(
// // //         "h1",
// // //         {},
// // //         "Hi this is H1 Tag"
// // //       ),
// // //       React.createElement(
// // //         "h1",
// // //         {},
// // //         "Hi this is H1-1 Tag"
// // //       ),
// // //     ]
// // //   )
// // // );
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(parent);

// import React from 'react';
// import ReactDOM from 'react-dom';

// const ClickButton = () => {
//   const handleButtonClick = () => {
//     // ("Button clicked!");

//   };

//   return (
//     <div id="parent">
//       <div id="child">
//         <button className= "abc" onClick={handleButtonClick}>Click me</button>
//       </div>
//     </div>
//   );
// };

// const rootElement = document.getElementById('root');
// ReactDOM.render(<ClickButton />, rootElement);

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ClickButton = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    console.log("Button clicked!");
    setButtonClicked(true);
  };

  const buttonStyle = {
    backgroundColor: buttonClicked ? 'green' : 'blue',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
  };

  return (
    <div id="parent">
      <div id="child">
        <button style={buttonStyle} onClick={handleButtonClick}>
          Click me
        </button>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<ClickButton />, rootElement);
