import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/main';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      searchValue: ""
    }

  }

  handleSearchValue(searchValue){
    this.setState({searchValue})
    return;
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.fetchSearchResults(this.state.searchValue);
    this.setState({searchValue:""});
  }

  render(){
    return (
      <div className="searchBarContainer">
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            className="searchInput"
            placeholder="Search Twitter"
            autoFocus
            onChange={e => this.handleSearchValue(e.target.value)}
            value={this.state.searchValue}
          />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {searchResults: state.searchResults}
}

export default connect(mapStateToProps, actions)(SearchBar)
