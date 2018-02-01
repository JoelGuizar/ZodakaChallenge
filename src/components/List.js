import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/main';
import ListItem from './ListItem';

class List extends Component {

  renderSearchResult(result,i){
    return (
      <ListItem
      time={result.created_at}
      text={result.text}
      key={result.id_str}
      user={result.user}
      />
    )
  }


  render(){
    if (!this.props.results) return <div></div>

    return (
      <div className='list'>
        Listtt
        {this.props.results.data.map((e,i) => this.renderSearchResult(e,i))}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {results: state.twitter.searchResults};
}

export default connect(mapStateToProps, actions)(List)
