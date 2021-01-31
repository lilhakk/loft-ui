import React, { useEffect, useRef, useState } from 'react';
import Input from '../Input';
import Popvoer from '../Popover';
import Menu from '../Menu';
import Guide from './Guide';
import c from 'clsx';
import s from '../../../common/AutoComplete/index.scss';
import sInput from '../../../common/Input/index.scss';

function AutoComplete ({
  label = 'Select value',
  data = [],
  value = {},
  onChange
}) {
  const _data = useRef();
  const [inputValue, setInputValue] = useState('');
  const [showPopover, setShowPopover] = useState(false);

  _data.current = data.filter(item => {
    return inputValue
      ? !!item.label.match(new RegExp('^' + inputValue, 'gi'))
      : true;
  });

  function _onChange (value, label) {
    onChange({ value, label });
    setShowPopover(false);
  }

  function onDismiss () {
    setInputValue('');
    setShowPopover(false);
  }

  const content = (
    <Menu
      variant="vertical"
      active={value.value}
      onChange={_onChange}
    >{
      _data.current.map(item=> (
        <Menu.Item value={item.value}>{item.label}</Menu.Item>
      ))
    }</Menu>
  );

  return (
    <Popvoer
      content={content}
      hasWidthCaption={true}
      visible={showPopover}
      className={s.popover}
      onDismiss={onDismiss}
    >
      <Input
        variant="outline"
        label={label}
        value={showPopover ? inputValue : value.label}
        className={c({ [sInput.inputFocus]: showPopover })}
        onFocus={()=> setShowPopover(true)}
        onChange={t=> setInputValue(t)}
      />
    </Popvoer>
  );
}

AutoComplete.Guide = Guide;

export default AutoComplete;
