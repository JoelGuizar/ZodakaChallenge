import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/main';

const ListItem = (props) => {
    return (
      <li className="list-item">
        {props.title}
        {props.desc}
      </li>
    )
}

export default connect(null, actions)(ListItem)
