import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/main';

const ListItem = (props) => {
    const prof = props.user
    return (
      <div className="list-item-container">
        <div className="list-item">
          <div className="profile-block">
            <img src={prof.profile_image_url}/>
            <div className="profile-name">
              {prof.screen_name}
            </div>
            <div className="profile-desc">
              <div>
                Name: {prof.name}
              </div>
              <div>
                From: {prof.location}
              </div>
              <div>
                Follower Count:{prof.followers_count}
              </div>
            </div>
          </div>
          <div className="text-block">
            <div className="time">
              Time: {props.time}
            </div>
            <div className="text">
              Tweet: {props.text}
            </div>
          </div>
        </div>
      </div>
    )
}

export default connect(null, actions)(ListItem)
