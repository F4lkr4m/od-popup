import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import RadioButton from '../RadioButton/RadioButton';
import Text from '../Text/Text';
import TextButton from '../TextButton/TextButton';
import cross from '../../Assets/cross.svg';
import './Popup.css';

interface PopupProps {
  onClose: () => void;
}

const Popup = (props: PopupProps) => {
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
          <Input label="Ваша зарплата в месяц" type="text" />
          <TextButton label="Рассчитать" />
        </div>
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
