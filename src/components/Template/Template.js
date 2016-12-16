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
      <section className="hero is-dark is-fullheight" style={{ background: 'url(hero-l.jpg) center', backgroundSize: 'cover' }}>
        <div className="hero-body" style={{ justifyContent: 'center' }}>
          <div style={{ width: '35rem', height: '19rem', position: 'fixed', zIndex: '0', padding: '20px', background: '#BC87E1' }} />
          <div style={{ width: '35rem', height: '19rem', position: 'fixed', zIndex: '0', padding: '20px', filter: 'blur(6px)', background: 'url(bg.jpg) center', backgroundPosition: 'cover' }} />
          <div className="box has-text-centered" style={{ width: '35rem', minHeight: '19rem', zIndex: '1', position: 'fixed', boxShadow: '0px 5px 30px 0px rgba(0,0,0,0.65)', background: 'none' }}>
            {card}
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(s)(Template);
