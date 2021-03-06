/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @format
 */

import type {VsAdapterType} from './types';

export const VsAdapterTypes = Object.freeze({
  HHVM: 'hhvm',
  PYTHON: 'python',
  REACT_NATIVE: 'react_native',
  NODE: 'node',
  JAVA: 'java',
});

// This is to work around flow's missing support of enums.
(VsAdapterTypes: {[key: string]: VsAdapterType});
