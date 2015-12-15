'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

// This module contains some utilities for dealing with "container" (pane or pane axis) visibility.

import type {PaneItemContainer} from '../types/PaneItemContainer';

export function hide(container: PaneItemContainer): void {
  container.setFlexScale(0);
}
