/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

const register = function (editor) {
  editor.ui.registry.addButton('nonbreaking', {
    icon: 'non-breaking',
    tooltip: 'Nonbreaking space',
    onAction: () => editor.execCommand('mceNonBreaking')
  });

  editor.ui.registry.addMenuItem('nonbreaking', {
    icon: 'non-breaking',
    text: 'Nonbreaking space',
    onAction: () => editor.execCommand('mceNonBreaking')
  });
};

export default {
  register
};