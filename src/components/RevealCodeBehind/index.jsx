/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef, useState } from 'react';
import Button from 'components/Button';

const RevealCodeBehind = () => {
  const codeBehingRef = useRef(null);
  const [codeBehindPos, setCodeBehindPost] = useState({ left: 100, top: 100 });

  const [isVisible, setIsVisible] = useState(false);

  const setIsCodeBehindVisible = (isCodeVisible) => {
    const { body } = document;

    body.style.overflow = isCodeVisible ? 'hidden' : 'auto';

    setIsVisible(isCodeVisible);
  };

  const setCodeBackgroundPosition = (x, y) => {
    if (codeBehingRef?.current?.style) {
      codeBehingRef.current.style.backgroundPosition = `-${x}px -${y}px`;
    }
  };

  useEffect(() => {
    setCodeBackgroundPosition(150, 150);
    document.addEventListener('mousemove', (event) => {
      setCodeBehindPost({ left: event.x - 100, top: event.y - 100 });
      setCodeBackgroundPosition(event.x, event.y);
    });
  }, []);

  return (
    <>
      <Button
        type="button"
        onClick={() => setIsCodeBehindVisible(true)}
        className="fixed ml-3"
      >
        Espiar o código desse site
      </Button>
      {isVisible && (
        <div
          role="noopener"
          onClick={() => setIsCodeBehindVisible(false)}
          ref={codeBehingRef}
          style={{
            width: '200px',
            height: '200px',
            position: 'absolute',
            borderRadius: '50%',
            backgroundImage: 'url(/code.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: '1280px 720px',
            backgroundPosition: '-140px -170px',
            ...codeBehindPos,
          }}
        />
      )}
    </>
  );
};

export default RevealCodeBehind;
