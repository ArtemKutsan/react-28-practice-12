// src/components/ClickCounter/index.jsx
// import styles from './ClickCounter.module.css';
import { useState, useRef, useEffect } from 'react';

function ClickCounter() {
  const [clickCount, setClickCount] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = '#4CAF50';
      // buttonRef.current.style.color = 'white';
      // buttonRef.current.style.padding = '1rem 1.5rem';
      // buttonRef.current.style.border = 'none';
      // buttonRef.current.style.borderRadius = '0.5rem';
      // buttonRef.current.style.cursor = 'pointer';
      // buttonRef.current.style.fontSize = '16px';
    }
  }, []);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
    console.log(buttonRef.current);
  };

  return (
    <div>
      <button ref={buttonRef} onClick={handleClick}>
        Кликнули: {clickCount}
      </button>

      <p>Всего кликов: {clickCount}</p>
    </div>
  );
}

export default ClickCounter;
