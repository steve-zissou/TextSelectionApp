import uuid from 'uuid/v1';

export const ADD_HIGHLIGHT = 'ADD_HIGHLIGHT';

export function addHighlightAction(text) {
  return {
    id: uuid(),
    text,
    type: ADD_HIGHLIGHT,
  };
}
