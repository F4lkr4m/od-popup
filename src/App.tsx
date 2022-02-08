import React from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Popup from './Components/Popup/Popup';

function App() {
  return (
    <div className="App">
      <Button label='Налоговый вычет' size={'l'} contrast={true} />
      <Popup />
    </div>
  );
}

export default App;
