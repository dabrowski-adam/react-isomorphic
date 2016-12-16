import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Link from '../Link';
import logo from '../../../public/logo-white.svg';
import s from './Front.css';

@withStyles(s)
class Front extends Component {
  render() {
    return (
      <div className="tile is-vertical" style={{ justifyContent: 'space-around', height: '100%' }}>
        <h1 className="title is-1"><img src={logo} alt="Adam Dąbrowski" /></h1>
        <h2 className="subtitle is-3" style={{ fontFamily: 'Rubik, sans-serif', fontStyle: 'italic', fontWeight: '300' }}>Software Developer</h2>
        <ul className="level is-mobile">
          <li className="level-item has-text-centered title is-marginless"><Link to="/contact">/contact</Link></li>
          <li className="level-item has-text-centered is-disabled title is-marginless"><Link to="/resume" className="is-disabled" style={{ textDecoration: 'line-through' }}>/resume</Link></li>
          <li className="level-item has-text-centered is-disabled title is-marginless"><Link to="/portfolio" className="is-disabled" style={{ textDecoration: 'line-through' }}>/portfolio</Link></li>
        </ul>
        <ul className="level is-mobile">
          <li className="level-item has-text-centered">
            <a rel="external" href="https://linkedin.com/in/adam-dabrowski">
              <span className="icon is-large">
                <i className="fa fa-linkedin" />
              </span>
            </a>
          </li>
          <li className="level-item has-text-centered">
            <a rel="external" href="https://dribbble.com/adamdabrowski">
              <span className="icon is-large">
                <i className="fa fa-dribbble" />
              </span>
            </a>
          </li>
          <li className="level-item has-text-centered">
            <a rel="external" href="https://github.com/dabrowski-adam">
              <span className="icon is-large">
                <i className="fa fa-github" />
              </span>
            </a>
          </li>
          <li className="level-item has-text-centered">
            <a rel="external" href="https://twitter.com/Ethesen">
              <span className="icon is-large">
                <i className="fa fa-twitter" />
              </span>
            </a>
          </li>
        </ul>
      </div>);
  }
}

export default Front;
