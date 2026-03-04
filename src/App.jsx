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
        <h1 className="container">React 28 Lesson</h1>

        <section>
          <div className="container">
            <h2>Задача 1: Хук useRef</h2>
            {/* <button ref={btnRef}>Click me</button> */}
            {/* <ClickCounter /> */}
            {/* <FleetButton /> */}
            {/* <ScrollBox /> */}
            <ToggleText />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
