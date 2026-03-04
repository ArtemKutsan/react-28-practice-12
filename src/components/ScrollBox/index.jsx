// src/components/ClickCounter/index.jsx
// import styles from './ClickCounter.module.css';
import { useRef, useState } from 'react';

function ScrollBox() {
  const boxRef = useRef(null);
  const [showTopButton, setShowTopButton] = useState(false);

  const scrollToTop = () => {
    boxRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const box = boxRef.current;
    if (!box) return;
    setShowTopButton(box.scrollTop > 50);
  };

  const btnStyle = {
    position: 'fixed',
    right: '50%',
    bottom: '3.5rem',
    borderRadius: '50%',
    height: '3.5rem',
    width: '3.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid gray',
    cursor: 'pointer',
    backgroundColor: 'white',
    color: 'black',
  };

  return (
    <>
      <div
        ref={boxRef}
        onScroll={handleScroll}
        style={{
          width: '100%',
          // flex: 1,
          maxHeight: 'calc(100dvh - 12rem)',
          overflowY: 'auto',
          border: '1px solid #d4d4d4',
          padding: '0.5rem 1rem',
          position: 'relative',
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum minima sit accusamus ad
          architecto saepe ipsam exercitationem itaque a sequi. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eum minima sit accusamus ad architecto saepe ipsam
          exercitationem itaque a sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eum minima sit accusamus ad architecto saepe ipsam exercitationem itaque a sequi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum minima sit accusamus ad
          architecto saepe ipsam exercitationem itaque a sequi. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eum minima sit accusamus ad architecto saepe ipsam
          exercitationem itaque a sequi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum minima sit accusamus ad
          architecto saepe ipsam exercitationem itaque a sequi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum minima sit accusamus ad
          architecto saepe ipsam exercitationem itaque a sequi. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eum minima sit accusamus ad architecto saepe ipsam
          exercitationem itaque a sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eum minima sit accusamus ad architecto saepe ipsam exercitationem itaque a sequi. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Eum minima sit accusamus ad architecto
          saepe ipsam exercitationem itaque a sequi. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eum minima sit accusamus ad architecto saepe ipsam exercitationem itaque
          a sequi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum minima sit accusamus ad
          architecto saepe ipsam exercitationem itaque a sequi. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eum minima sit accusamus ad architecto saepe ipsam
          exercitationem itaque a sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eum minima sit accusamus ad architecto saepe ipsam exercitationem itaque a sequi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum minima sit accusamus ad
          architecto saepe ipsam exercitationem itaque a sequi. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eum minima sit accusamus ad architecto saepe ipsam
          exercitationem itaque a sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eum minima sit accusamus ad architecto saepe ipsam exercitationem itaque a sequi. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Eum minima sit accusamus ad architecto
          saepe ipsam exercitationem itaque a sequi. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eum minima sit accusamus ad architecto saepe ipsam exercitationem itaque
          a sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum minima sit
          accusamus ad architecto saepe ipsam exercitationem itaque a sequi.
        </p>
      </div>
      {showTopButton && (
        <button onClick={scrollToTop} style={btnStyle}>
          ↑
        </button>
      )}
    </>
  );
}

export default ScrollBox;
