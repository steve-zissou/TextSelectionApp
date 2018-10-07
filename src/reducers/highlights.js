import { ADD_HIGHLIGHT } from '../actions/highlights';

export default function highlights(state = [], action) {
  switch (action.type) {
    case ADD_HIGHLIGHT:
      return [
        {
          id: action.id,
          text: action.text,
          endKey: action.endKey,
          endOffset: action.endOffset,
          startKey: action.startKey,
          startOffset: action.startOffset,
        },
        ...state,
      ];
    default:
      return state;
  }
}

// selectors
export function getAllHighlights(state) {
  return state;
}
