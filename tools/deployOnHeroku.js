/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import run from './run';

/**
 * Compiles the project from source files into a distributable
 * format and copies it to the output (build) folder.
 */
async function deployOnHeroku() {
  if (process.env.NODE_ENV === 'production') {
    process.argv.push('--release');
    await run(require('./build'));
  }
}

export default deployOnHeroku;
