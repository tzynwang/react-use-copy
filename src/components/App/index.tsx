import React, { memo, useRef } from 'react';
import useCopy from '@Hooks/useCopy';

function App(): React.ReactElement {
  // States
  const listRef = useRef<HTMLDivElement | null>(null);

  // Functions
  const handleCopyText = (): void => {
    useCopy('copy pure text', () => console.info('pure text copy success'));
  };
  const handleCopyLink = (): void => {
    useCopy(listRef.current, () =>
      console.info('list of anchors copy success')
    );
  };

  // Main
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-5xl text-center font-bold">copy testing</div>
        <div className="flex gap-4">
          <button onClick={handleCopyText} className="btn btn-secondary">
            copy pure text
          </button>
          <button onClick={handleCopyLink} className="btn btn-primary">
            copy list of anchors
          </button>
        </div>
        <div ref={listRef}>
          <ul className="list-disc">
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem/ClipboardItem"
                className="link"
              >
                MDN: ClipboardItem()
              </a>
            </li>
            <li>
              <a
                href="https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/"
                className="link"
              >
                The Surprising Truth About Pixels and Accessibility
              </a>
            </li>
            <li>
              <a href="https://axios-http.com/docs/req_config" className="link">
                axios Request Config
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default memo(App);
