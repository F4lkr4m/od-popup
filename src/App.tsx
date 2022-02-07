import React from 'react';
import './App.css';
import Button from './Components/Button/Button';
import TextButton from './Components/TextButton/TextButton';

function App() {
  return (
    <div className="App">
      <Button label='Кнопка!' size={'l'} disabled={true} contrast={true} />
      <TextButton label='Кнопка!' />
    </div>
  );
}

export default App;
