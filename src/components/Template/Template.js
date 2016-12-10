/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Template.scss';

class Template extends React.Component {
  static propTypes = {

  };

  front = <div className="tile is-ancestor is-vertical" style={{ minHeight: '16rem', justifyContent: 'space-around' }}>
    <h1 className="title is-1">Adam Dąbrowski</h1>
    <ul className="level">
      <li className="level-item has-text-centered title is-marginless">/contact</li>
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
  </div>;

  back = <div className="tile is-ancestor is-vertical" style={{ minHeight: '16rem', justifyContent: 'space-around' }}>
    <h2 className="title">Contact</h2>
    <textarea className="textarea" placeholder="Your message. :)" />
    <div className="control is-grouped">
      <p className="control has-icon is-expanded">
        <input className="input" type="email" placeholder="Your email" />
        <i className="fa fa-envelope" />
      </p>
      <button className="button is-primary">Send</button>
    </div>
  </div>;


  render() {
    return (
      <section className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container" style={{ maxWidth: '31rem' }}>
            <div className="box has-text-centered">
              { this.back }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(s)(Template);
