function useCopy(
  target: unknown,
  successCallback?: () => void,
  failCallback?: (error: any) => void
): void {
  if (target === null) return;

  const toCopy =
    typeof target === 'string' ? (target as string) : (target as HTMLElement);

  if (typeof toCopy === 'string') {
    const textArea = document.createElement('textarea');
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';
    document.body.appendChild(textArea);
    textArea.value = toCopy;
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      if (successCallback) {
        successCallback();
      }
    } catch (error) {
      document.body.removeChild(textArea);
      if (failCallback) {
        failCallback(error);
      }
    }
  } else {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(toCopy);
    selection?.removeAllRanges();
    selection?.addRange(range);
    try {
      document.execCommand('copy');
      selection?.removeAllRanges();
      if (successCallback) {
        successCallback();
      }
    } catch (error) {
      if (failCallback) {
        failCallback(error);
      }
    }
  }
}

export default useCopy;
