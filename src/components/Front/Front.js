import React, { Component } from 'react';

import Link from '../Link';

class Front extends Component {
  render() {
    return (
      <div className="tile is-ancestor is-vertical" style={{ minHeight: '16rem', justifyContent: 'space-around' }}>
        <h1 className="title is-1">Adam Dąbrowski</h1>
        <ul className="level">
          <li className="level-item has-text-centered title is-marginless"><Link to="/contact">/contact</Link></li>
          <li className="level-item has-text-centered is-disabled title is-marginless">/resume</li>
          <li className="level-item has-text-centered is-disabled title is-marginless">/portfolio</li>
        </ul>
        <ul className="level">
          <li className="level-item has-text-centered">
            <span className="icon is-large">
              <i className="fa fa-linkedin" />
            </span>
          </li>
          <li className="level-item has-text-centered">
            <span className="icon is-large">
              <i className="fa fa-dribbble" />
            </span>
          </li>
          <li className="level-item has-text-centered">
            <span className="icon is-large">
              <i className="fa fa-github" />
            </span>
          </li>
          <li className="level-item has-text-centered">
            <span className="icon is-large">
              <i className="fa fa-twitter" />
            </span>
          </li>
        </ul>
      </div>);
  }
}

export default Front;
