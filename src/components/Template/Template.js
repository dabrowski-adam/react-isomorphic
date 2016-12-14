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
    card: PropTypes.element.isRequired,
  };
  render() {
    const { card } = this.props;
    return (
      <section className="hero is-light is-fullheight" style={{ background: 'url(hero-l.jpg) center', backgroundSize: 'cover' }}>
        <div className="hero-body" style={{ justifyContent: 'center' }}>
          <div className="box has-text-centered" style={{ width: '35rem', minHeight: '19rem' }}>
            {card}
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(s)(Template);
