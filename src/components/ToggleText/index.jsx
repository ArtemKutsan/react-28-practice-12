// src/components/ToggleText/index.jsx
import styles from './ToggleText.module.css';
import { useRef, useState } from 'react';

function ToggleText() {
  const textRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const [duration, setDuration] = useState(300);

  const toggle = () => {
    const textEl = textRef.current;
    if (!textEl) return;

    textEl.style.transitionDuration = duration + 'ms';

    if (visible) {
      textEl.style.maxHeight = '0px';
      textEl.style.opacity = '0';
    } else {
      textEl.style.maxHeight = textEl.scrollHeight + 'px';
      textEl.style.opacity = '1';
    }

    setVisible(!visible);
  };

  const changeDuration = (event) => {
    setDuration(Number(event.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={toggle}>{visible ? 'Скрыть' : 'Показать'}</button>

      <input type="number" value={duration} onChange={changeDuration} className={styles.input} />

      <p ref={textRef} className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nemo cum accusantium itaque
        asperiores sapiente temporibus eligendi hic voluptatum? Tempore, quod veniam consectetur ut
        minima mollitia reprehenderit labore adipisci at.
      </p>
    </div>
  );
}

export default ToggleText;
