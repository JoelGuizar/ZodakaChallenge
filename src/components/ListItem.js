import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/main';

const ListItem = (props) => {
    const prof = props.user
    return (
      <div className="list-item">
        <div className="profile-block">
          <img src={prof.profile_image_url}/>
          <div className="profile-name">
            {prof.screen_name}
          </div>
          <div className="profile-desc">
            {prof.name}
            {prof.location}
            {prof.followers_count}
          </div>
        </div>
        <div className="text-block">
          <div className="">
            Time: {prof.created_at}
          </div>
          <div className="text">
            Text: {props.text}
          </div>
        </div>
      </div>
    )
}

export default connect(null, actions)(ListItem)
