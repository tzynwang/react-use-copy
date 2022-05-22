function useCopy(
  target: unknown,
  successCallback?: () => void,
  failCallback?: (error: any) => void
): void {
  if (target === null) return;

  const toCopy =
    typeof target === 'string' ? (target as string) : (target as HTMLElement);

  if (typeof toCopy === 'string') {
    try {
      navigator.clipboard.writeText(toCopy);
      if (successCallback) {
        successCallback();
      }
    } catch (error: any) {
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
