import React from 'react';

// //functional component with out state
// const SeachBar = () => {
//   return <input />;
// };

// ES6 class - state
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    // Only change state like this in the constructor.
    this.state = { term: ''};
  }

  render() {
    // Always use this.setState to chang the value of state outside the constructor.
    return (
      <div>
        <input
          value={this.state.term} // Controlled component
          onChange={event => this.setState({term: event.target.value})} />
        Value of this input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
