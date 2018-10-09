// 3rd Party
import uuid from 'uuid/v1';
// custom
import { getRandomColour } from '../utils/colour';


export const ADD_HIGHLIGHT = 'ADD_HIGHLIGHT';

/**
 * Defines the shape of the action to add a highlight to the application state.
 * @param {object} selection The user selection to add.
 * @returns {object}
 */
export function addHighlightAction(selection) {
  const {
    endKey, endOffset, startKey, startOffset, text,
  } = selection;

  return {
    colour: getRandomColour(),
    endKey,
    endOffset,
    id: uuid(),
    startKey,
    startOffset,
    text,
    type: ADD_HIGHLIGHT,
  };
}
