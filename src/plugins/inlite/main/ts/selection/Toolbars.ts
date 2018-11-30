/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import Settings from '../api/Settings';

const addToEditor = (editor) => {
  editor.ui.registry.addContextToolbar('textselection', {
    predicate: (node) => {
      return !editor.selection.isCollapsed();
    },
    items: Settings.getTextSelectionToolbarItems(editor),
    position: 'selection'
  });
};

export default {
  addToEditor
};