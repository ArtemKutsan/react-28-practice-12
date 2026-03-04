// src/components/FleetButton/index.jsx
// import styles from './FleetButton.module.css';
import { useRef, useEffect } from 'react';

function FleetButton() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const fleetButton = buttonRef.current;
    if (fleetButton) {
      fleetButton.style.backgroundColor = '#4CAF50';
      fleetButton.style.position = 'absolute';
      fleetButton.style.left = '50%';
      fleetButton.style.top = '50%';
    }
  }, []);

  const runAway = () => {
    const fleetButton = buttonRef.current;
    if (!fleetButton) return;

    const maxX = window.innerWidth - fleetButton.offsetWidth;
    const maxY = window.innerHeight - fleetButton.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    fleetButton.style.left = `${randomX}px`;
    fleetButton.style.top = `${randomY}px`;
  };

  return (
    <div>
      <button ref={buttonRef} onMouseEnter={runAway}>
        Click me
      </button>
    </div>
  );
}

export default FleetButton;
