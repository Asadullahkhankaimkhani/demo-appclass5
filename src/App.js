
import { useState } from 'react';
import './App.css';
import counterContext from './CounterContext';
import Parent from './Parent'

function App() {
  let countvalue = useState(0);
  
  return (
  <counterContext.Provider value={countvalue} >
  <div>
      <Parent />
    </div>
    </counterContext.Provider>
  )
}

export default App;
