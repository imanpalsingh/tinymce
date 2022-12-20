import { Assert, UnitTest } from '@ephox/bedrock-client';
import { Fun, Optional } from '@ephox/katamari';
import { Html, Insert, SugarElement } from '@ephox/sugar';

import { CellData } from 'ephox/snooker/api/Generators';
import * as TableFill from 'ephox/snooker/api/TableFill';

UnitTest.test('CloneFormatsTest', () => {
  const doc = SugarElement.fromDom(document);
  const noCloneFormats = Optional.some([] as string[]);
  const cloneTableFill = TableFill.cellOperations(Fun.noop, doc, Optional.none());
  const noCloneTableFill = TableFill.cellOperations(Fun.noop, doc, noCloneFormats);

  const cellElement = SugarElement.fromTag('td');
  const cellContent = SugarElement.fromHtml('<strong><em contenteditable="false">stuff</em></strong>');
  Insert.append(cellElement, cellContent);
  const cell: CellData = {
    element: cellElement,
    colspan: 1,
    rowspan: 1
  };

  const clonedCell = cloneTableFill.cell(cell);

  Assert.eq('', '<td><strong><br></strong></td>', Html.getOuter(clonedCell));

  const noClonedCell = noCloneTableFill.cell(cell);
  Assert.eq('', '<td><br></td>', Html.getOuter(noClonedCell));
});
