import React, { useState, useRef } from 'react';
import Menu from '../Menu';
import Input from '../Input';
import Popover from '../Popover';
import Guide from './Guide';
import s from '../../../common/Dropdown/index.scss';
import c from 'clsx';

function Dropdown ({
  label,
  data = [],
  value,
  onChange
}) {
  const [activeLabel, setActiveLabel] = useState('');
  const [visible, setVisible] = useState(false);

  function _onChange (value, label) {
    setActiveLabel(label);
    setVisible(false);
    onChange(value);
  }

  const content = (
    <Menu
      variant="vertical"
      active={value}
      onChange={_onChange}
    >
      {data.map(item => (
        <Menu.Item value={item.value}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Popover
      visible={visible}
      onDismiss={()=> setVisible(false)}
      content={content}
      className={s.content}
      hasWidthCaption={true}
    >
      <div
        className={c(s.dropdownCaption, {
          [s.dropdownActive]: visible,
          [s.dropdownSelect]: !!value
        })}
      >
        <div
          className={s.dropdownHandler}
          onClick={()=> setVisible(!visible)}
        />

        <Input
          variant="outline"
          label={label || 'Select value'}
          classFieldset={c({ [s.dropdownFocus]: visible })}
          value={activeLabel}
        />

        <div className={s.dropdownIcon}>
          <div className={s.line} />
          <div className={s.line} />
        </div>
      </div>
    </Popover>
  );
}

Dropdown.Guide = Guide;

export default Dropdown;
