// Create a new compoent.
//  This component should produce some HTML.
const App = function() {
  // JSX - What looks like HTML in our JavaScript
  //  this code gets transpiled with babel to produce JS
  //  i.e. babeljs.io/repl
  return <div>Hi!</div>;
  // the above jsx converts to using babel:
  //   return React.createElement(
  //    "div",
  //    null,
  //    "Hi!"
  // );
}

// Note: Cmd Alt i - Opens up console window in Chrome

// Take this component's generated HTML and put it on the page (in the DOM)
