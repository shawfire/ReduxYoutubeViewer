// Create a new compoent.
//  This component should produce some HTML.
const App = function() {
  // JSX - What looks like HTML in our JavaScript
  //  this code gets transpiled with babel to produce JS
  //  i.e. babeljs.io/repl
  return <ol>
    <li>JavaScript</li>
    <li>JSX</li>
    <li>Babel</li>
    </ol>;
  // the above jsx converts to using babel:
  //  (thus the purpose of JSX is to make your HTML legible within JS.
  // return React.createElement(
  //     "ol",
  //     null,
  //     React.createElement(
  //       "li",
  //       null,
  //       "JavaScript"
  //     ),
  //     React.createElement(
  //       "li",
  //       null,
  //       "JSX"
  //     ),
  //     React.createElement(
  //       "li",
  //       null,
  //       "Babel"
      )}

// Note: Cmd Alt i - Opens up console window in Chrome

// Take this component's generated HTML and put it on the page (in the DOM)
