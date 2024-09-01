/**
 * 주어진 메시지를 장식하여 콘솔에 출력합니다.
 * @param {string} message - 출력할 메시지
 * @param {string} [dividerChar='='] - 구분선에 사용할 문자
 * @returns {string} decoratedMessage - 구분선과 합쳐진 메시지
 */
function showDecoratedMessage(message, dividerChar = '=') {
  const divider = dividerChar.repeat(message.length + 20);
  const decoratedMessage = `
      ${divider}
      ${message}
      ${divider}
      `;
  console.log(decoratedMessage);
  return decoratedMessage;
}

module.exports = {
  showDecoratedMessage,
};
