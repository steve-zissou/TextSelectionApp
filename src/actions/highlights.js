// 3rd Party
import uuid from 'uuid/v1';


export const ADD_HIGHLIGHT = 'ADD_HIGHLIGHT';

export function addHighlightAction(selection) {
  const {
    endKey, endOffset, startKey, startOffset, text,
  } = selection;

  return {
    endKey,
    endOffset,
    id: uuid(),
    startKey,
    startOffset,
    text,
    type: ADD_HIGHLIGHT,
  };
}
