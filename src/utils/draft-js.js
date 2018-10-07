/* eslint import/prefer-default-export: 0 */

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

// https://github.com/facebook/draft-js/issues/442
export function getTextSelection(content, selection) {
  const startKey = selection.getStartKey();
  const endKey = selection.getEndKey();
  const allBlocks = content.getBlockMap();

  const selectedBlocks = getBlocksBetween(allBlocks, startKey, endKey);
  return joinBlockText(
    selectedBlocks, startKey, endKey, selection.getStartOffset(), selection.getEndOffset(),
  );
}

export function isBlockInRange(content, block, startKey, endKey) {
  const allBlocks = content.getBlockMap();
  const blocks = getBlocksBetween(allBlocks, startKey, endKey);
  const blockIds = blocks.map(_block => _block.getKey());
  return blockIds.includes(block.getKey());
}

export function isValidSelection(text) {
  return text.replace(/(?:\r\n|\r|\n|\s)/g, '').length > 0;
}
