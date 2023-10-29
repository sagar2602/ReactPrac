/**
 * 
 * <div id=”parent”>
 *   <div id=”child”>
 *     <h1>Hi this is H1 Tag</h1>
 *   </div>
 * </div>
 * 
 * 
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement(
      "h1",
      {},
      "Hi this is H1 Tag"
    )
  )
);

// When more than 2 h1 tags available
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     [
//       React.createElement(
//         "h1",
//         {},
//         "Hi this is H1 Tag"
//       ),
//       React.createElement(
//         "h1",
//         {},
//         "Hi this is H1-1 Tag"
//       ),
//     ]
//   )
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);