import React, { useState } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Popup from './Components/Popup/Popup';

function App() {
  const [popup, setPopup] = useState(<></>);

  const openPopup = () => {
    setPopup(
      <Popup onClose={() => setPopup(<></>)} />
    );
  }

  return (
    <div className="App">
      <Button label='Налоговый вычет' onClick={openPopup} size={'l'} contrast={true} />
      {popup}
    </div>
  );
}

export default App;
