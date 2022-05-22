async function useClipboardCopy(target: unknown): Promise<void> {
  const content = target as BlobPart;
  const blob = new Blob([content], { type: 'text/html' });
  const richInput = new ClipboardItem({ 'text/html': blob });
  try {
    await navigator.clipboard.write([richInput]);
  } catch (error: any) {
    console.info(error.message);
  }
}

export default useClipboardCopy;
