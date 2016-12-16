/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import run from './run';
import build from './build';

/**
 * Compiles the project from source files into a distributable
 * format and copies it to the output (build) folder.
 */
async function deploy() {
  process.argv.push('--release');
  process.argv.push('--production');
  await run(require('./build'));

  if (process.argv.includes('--static')) {
    await run(render);
  }
}

export default deploy;
