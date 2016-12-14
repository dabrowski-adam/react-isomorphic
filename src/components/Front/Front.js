import React, { Component } from 'react';

import Link from '../Link';
import logo from '../../../public/logo-black.svg';

class Front extends Component {
  render() {
    return (
      <div className="tile is-vertical" style={{ justifyContent: 'space-around', height: '100%' }}>
        <h1 className="title is-1"><img src={logo} alt="Adam Dąbrowski" /></h1>
        <h2 className="subtitle is-3" style={{ fontFamily: 'Rubik', fontStyle: 'italic' }}>Software Developer</h2>
        <ul className="level">
          <li className="level-item has-text-centered title is-marginless"><Link to="/contact">/contact</Link></li>
          <li className="level-item has-text-centered is-disabled title is-marginless"><Link to="/resume" className="is-disabled">/resume</Link></li>
          <li className="level-item has-text-centered is-disabled title is-marginless"><Link to="/portfolio" className="is-disabled">/portfolio</Link></li>
        </ul>
        <ul className="level is-mobile">
          <li className="level-item has-text-centered">
            <Link to="https://linkedin.com/in/adam-dbrowski">
              <span className="icon is-large">
                <i className="fa fa-linkedin" />
              </span>
            </Link>
          </li>
          <li className="level-item has-text-centered">
            <Link to="https://dribbble.com/adamdabrowski">
              <span className="icon is-large">
                <i className="fa fa-dribbble" />
              </span>
            </Link>
          </li>
          <li className="level-item has-text-centered">
            <Link to="https://github.com/dabrowski-adam">
              <span className="icon is-large">
                <i className="fa fa-github" />
              </span>
            </Link>
          </li>
          <li className="level-item has-text-centered">
            <Link to="https://twitter.com/Ethesen">
              <span className="icon is-large">
                <i className="fa fa-twitter" />
              </span>
            </Link>
          </li>
        </ul>
      </div>);
  }
}

export default Front;
