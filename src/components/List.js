import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/main';
import ListItem from './ListItem';

class List extends Component {

  renderSearchResult(result,i){
    return (
      <ListItem title={result.title} desc={result.desc} key={i}/>
    )
  }


  render(){
    if (!this.props.results) return <div></div>

    return (
      <ul className='list'>
        Listtt
        {this.props.results.map((e,i) => this.renderSearchResult(e,i))}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {results: state.twitter.searchResults};
}

export default connect(mapStateToProps, actions)(List)
