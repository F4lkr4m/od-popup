import React from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Checkbox from './Components/Checkbox/Checkbox';
import Input from './Components/Input/Input';
import TextButton from './Components/TextButton/TextButton';

function App() {
  return (
    <div className="App">
      <Button label='Кнопка!' size={'l'} disabled={true} contrast={true} />
      <TextButton label='Кнопка!' />
      <Input type="text" label="Текст" disabled={true} placeholder="Текст" error="kek" />
      <Checkbox label="78 000 рублей" disabled={true} />
      <Checkbox label="Второй" />
    
    </div>
  );
}

export default App;
