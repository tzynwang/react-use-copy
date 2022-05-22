import React, { memo, useRef } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import useCopy from '@Hooks/useCopy';
import tailwindConfig from './../../../tailwind.config';

function App(): React.ReactElement {
  // States
  const listRef = useRef<HTMLDivElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const multiStylesSpanRef = useRef<HTMLDivElement | null>(null);
  const lineBreakRef = useRef<HTMLDivElement | null>(null);
  const { theme } = resolveConfig(tailwindConfig);

  // Functions
  const handleCopyText = (): void => {
    useCopy('copy pure text');
  };
  const handleCopyLink = (): void => {
    useCopy(listRef.current);
  };
  const handleCopySpan = (): void => {
    useCopy(spanRef.current);
  };
  const handleCopyMultiStyles = (): void => {
    useCopy(multiStylesSpanRef.current);
  };
  const handleCopyLineBreak = (): void => {
    useCopy(lineBreakRef.current);
  };

  // Main
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-5xl text-center font-bold">copy testing</div>
        <div className="flex flex-wrap gap-4 justify-center">
          <button onClick={handleCopyText} className="btn btn-secondary">
            copy pure text
          </button>
          <button onClick={handleCopyLink} className="btn btn-primary">
            copy list of anchors
          </button>
          <button onClick={handleCopySpan} className="btn">
            copy span with bold text
          </button>
          <button onClick={handleCopyMultiStyles} className="btn">
            copy span with multiple styles
          </button>
          <button onClick={handleCopyLineBreak} className="btn btn-secondary">
            copy span with line break
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
        <div className="text-center">
          <span ref={spanRef} className="font-bold ResetBgColor">
            Just a span element copy target 😏
          </span>
        </div>
        <div ref={multiStylesSpanRef}>
          <span className="ResetBgColor">A sentence </span>
          <span
            style={{
              // @ts-ignore: Unreachable code error
              color: theme?.colors?.sky[800],
              // @ts-ignore: Unreachable code error
              backgroundColor: theme?.colors?.sky[200]
            }}
          >
            with different background-color
          </span>
          <span className="ResetBgColor"> in </span>
          <span
            style={{
              // @ts-ignore: Unreachable code error
              color: theme?.colors?.rose[800],
              // @ts-ignore: Unreachable code error
              backgroundColor: theme?.colors?.rose[200],
              textDecoration: 'line-through'
            }}
          >
            multiple parts.
          </span>
        </div>
        <div ref={lineBreakRef}>
          <div className="ResetBgColor" style={{ whiteSpace: 'pre-line' }}>
            {'Now'}
            {'\n'}
            {'we have some'}
            {'\n'}
            {'line break.'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(App);
