import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import RadioButton from '../RadioButton/RadioButton';
import Text from '../Text/Text';
import TextButton from '../TextButton/TextButton';
import cross from '../../Assets/cross.svg';
import './Popup.css';
import Checkbox from '../Checkbox/Checkbox';
import { useState } from 'react';

interface PopupProps {
  onClose: () => void;
}

const Popup = (props: PopupProps) => {
  const [inputValue, setInputValue] = useState('');
  const [deductionArray, setDeductionArray] = useState(Array<number>());

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const calcDeduction = () => {
    const array = [];
    if (!isNaN(Number(inputValue)) && inputValue.length !== 0 && Number(inputValue) > 1000) {
      const deduciton = Number(inputValue) * 12 * 0.13;
      let maxDeduction = 260000;
      while (maxDeduction - deduciton > 0) {
        array.push(deduciton);
        maxDeduction -= deduciton;
      }
      array.push(maxDeduction);
    }
    setDeductionArray(array);
  }

  return (
    <div className="popup-wrapper">
      <div className="popup">
        <div className="popup__close-button">
          <TextButton icon={cross} onClick={props.onClose} />
        </div>
        <div className="popup__textbox">
          <Text type="h1" text="Налоговый вычет" />
          <Text type="h2" secondary={true} text="Используйте налоговый вычет чтобы погасить ипотеку досрочно. 
          Размер налогового вычета составляет не более 13% от своего официального годового дохода." />
        </div>
        <div className="popup__inputbox">
          <Input label="Ваша зарплата в месяц" onChange={inputChangeHandler} type="text" />
          <TextButton onClick={calcDeduction} label="Рассчитать" />
        </div>
        <div></div>
        {deductionArray.length !== 0 && 
          <div className="popup__checkbox-group">
            <Text type="h2" text="Итого можете внести в качестве досрочных:" />
            {deductionArray.map((item, index) => {
              return <><Checkbox label={<><Text type="h2" text={String(Math.floor(item))}/>&nbsp;<Text type="h2" text={ ` в ${index + 1}ый год`} secondary={true} /></>} />
              <div className="popup__separate-line"></div></>
            })}
          </div>}
        <div className="popup__radiobox">
          <Text type="h2" text="Что уменьшаем?" />
          <div className="popup__radiobutton-wrapper">
            <RadioButton label="Платеж" checked={true} />
            <RadioButton label="Срок" />
          </div>
        </div>
        <Button label="Добавить" stretched={true} />
      </div>
    </div>);
}

export default Popup;
