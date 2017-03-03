import React from 'react';

// //functional component with out state
// const SeachBar = () => {
//   return <input />;
// };

// ES6 class - state
class SearchBar extends React.Component {
  render() {
    return <input onChange={(event) => console.log(event.target.value)} />;
  }
}

export default SearchBar;
