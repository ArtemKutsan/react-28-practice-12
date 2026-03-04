import { useRef } from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
import FleetButton from './components/FleetButton';
import ScrollBox from './components/ScrollBox';
import ToggleText from './components/ToggleText';

function App() {
  const btnRef = useRef(null);

  console.log(btnRef); // button

  return (
    <>
      <main>
        <h1 className="container">React 27 Lesson + 28 Practice 12</h1>

        <section>
          <div className="container">
            {/* <h2>Задача 1: Хук useRef</h2>
            <button ref={btnRef}>Click me</button> */}
            {/* <h2>Задача 2: Хук useRef ClickCounter</h2>
            <ClickCounter /> */}
            {/* <h2>Задача 3: Хук useRef FleetButton</h2>
            <FleetButton /> */}
            {/* <h2>Задача 4: Хук useRef ScrollBox</h2>
            <ScrollBox /> */}
            <h2>Задача 5: Хук useRef ToggleText</h2>
            <ToggleText />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
