import React, { Component } from 'react';

import Link from '../Link';

class Front extends Component {
  render() {
    return (
      <div className="tile is-ancestor is-vertical" style={{ minHeight: '16rem', justifyContent: 'space-around' }}>
        <h1 className="title is-1">Adam Dąbrowski</h1>
        <ul className="level">
          <li className="level-item has-text-centered title is-marginless"><Link to="/contact">/contact</Link></li>
          <li className="level-item has-text-centered is-disabled title is-marginless"><Link to="/resume" className="is-disabled">/resume</Link></li>
          <li className="level-item has-text-centered is-disabled title is-marginless"><Link to="/portfolio" className="is-disabled">/portfolio</Link></li>
        </ul>
        <ul className="level">
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
