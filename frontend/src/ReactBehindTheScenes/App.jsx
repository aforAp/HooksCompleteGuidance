import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import './index.css';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';
function App() {
  log('<App /> rendered');


  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    console.log('the previouschosenCount is:', chosenCount);
    setChosenCount(newCount);
    setChosenCount((prevChosenCount) => {
      console.log('the chosenCount is:', prevChosenCount + 1);
      return newCount;
    });
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSetCount={handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount}/>
        <Counter initialCount={0} key={0} />
      </main>
    </>
  );
}

export default App;
