/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { FormattedRelative } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>React.js News</h1>
          <ul className={s.news}>
            {this.props.news.map((item, index) => (
              <li key={index} className={s.newsItem}>
                <a href={item.link} className={s.newsTitle}>{item.title}</a>
                {' '}
                <span className={s.publishedDate}>
                  <FormattedRelative value={item.publishedDate} />
                </span>
                <span
                  className={s.newsDesc}
                  dangerouslySetInnerHTML={{ __html: item.contentSnippet }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
