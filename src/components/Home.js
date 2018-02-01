import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/main';
import SearchBar from './SearchBar.js';
import List from './List.js';

class Home extends Component {
  render(){
    return (
      <div>
        <SearchBar />
        <List />
      </div>
    )
  }
}

function mapStateToProps(){
  return;
}

export default connect(null, actions)(Home)
