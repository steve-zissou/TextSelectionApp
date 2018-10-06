import { ADD_HIGHLIGHT } from '../actions/highlights';

export default function highlights(state = [], action) {
  switch (action.type) {
    case ADD_HIGHLIGHT:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        },
      ];
    default:
      return state;
  }
}

// selectors
export function getAllHighlights(state) {
  return state;
}