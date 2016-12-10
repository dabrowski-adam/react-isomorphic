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
import s from './NotFound.scss';

class NotFound extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;
    return (
      <div>
        <section className="hero is-danger is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-1">{title}</h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withStyles(s)(NotFound);
