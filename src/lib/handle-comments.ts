const COMMENT_SYMBOL = '#';

export function isCommentLineStr(lineStr: string): boolean {
  return lineStr.length === 0 || lineStr.charAt(0) === COMMENT_SYMBOL;
}
