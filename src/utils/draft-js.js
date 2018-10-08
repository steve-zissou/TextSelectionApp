/* eslint import/prefer-default-export: 0 */
/**
 * Helper functions for working with DraftJs.
 * Based on: // https://github.com/facebook/draft-js/issues/442
 */

/**
 * Get the blocks which are between the supplied start and end block keys.
 * @param {[ContentBlock]} blocks The array of all the blocks.
 * @param {string} startKey The key of the first block.
 * @param {string} endKey The key of the last block.
 */
function getBlocksBetween(blocks, startKey, endKey) {
  let lastWasEnd = false;

  return blocks
    .skipUntil(block => block.getKey() === startKey)
    .takeUntil((block) => {
      const result = lastWasEnd;
      if (block.getKey() === endKey) { lastWasEnd = true; }
      return result;
    });
}

/**
 * Join the text from the start offset of the start block to the end offset of the end block.
 * @param {[ContentBlock]} blocks The array of all the blocks.
 * @param {string} startKey The key of the first block.
 * @param {string} endKey The key of the last block.
 * @param {int} startOffset The text offset within the first block.
 * @param {int} endOffset The text offset within the last block.
 * @returns {string}
 */
function joinBlockText(blocks, startKey, endKey, startOffset, endOffset) {
  return blocks
    .map((block) => {
      const key = block.getKey();
      const text = block.getText();
      const start = (key === startKey) ? startOffset : 0;
      const end = (key === endKey) ? endOffset : text.length;
      return text.slice(start, end);
    })
    .join('\n');
}

/**
 * Get the current selected text.
 * @param {ContentState} content The current content state.
 * @param {SelectionState} selection The current selection state.
 * @returns {string}
 */
export function getTextSelection(content, selection) {
  const startKey = selection.getStartKey();
  const endKey = selection.getEndKey();
  const allBlocks = content.getBlockMap();

  const selectedBlocks = getBlocksBetween(allBlocks, startKey, endKey);
  return joinBlockText(
    selectedBlocks, startKey, endKey, selection.getStartOffset(), selection.getEndOffset(),
  );
}

/**
 * Check if a block is within a range of blocks.
 * @param {ContentState} content The current content state.
 * @param {ContentBlock} block The block to check.
 * @param {string} startKey The key of the first block.
 * @param {string} endKey The key of the last block.
 */
export function isBlockInRange(content, block, startKey, endKey) {
  const allBlocks = content.getBlockMap();
  const blocks = getBlocksBetween(allBlocks, startKey, endKey);
  const blockIds = blocks.map(_block => _block.getKey());
  return blockIds.includes(block.getKey());
}

/**
 * Check if a selection is valid (not empty).
 * @param {string} text The selection text to check.
 * @returns {bool}
 */
export function isValidSelection(text) {
  return text.replace(/(?:\r\n|\r|\n|\s)/g, '').length > 0;
}
