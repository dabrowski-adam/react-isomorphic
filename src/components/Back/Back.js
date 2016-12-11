import React, { Component } from 'react';

import Link from '../Link';

class Back extends Component {
  render() {
    return (
      <div className="tile is-ancestor is-vertical" style={{ minHeight: '16rem', justifyContent: 'space-around' }}>
        <h2 className="title">Contact<Link to="/"><i className="fa fa-undo pull-right" /></Link></h2>
        <textarea className="textarea" placeholder="Your message. :)" />
        <div className="control is-grouped">
          <p className="control has-icon is-expanded">
            <input className="input" type="email" placeholder="Your email" />
            <i className="fa fa-envelope" />
          </p>
          <button className="button is-primary">Send</button>
        </div>
      </div>
    );
  }
}

export default Back;
