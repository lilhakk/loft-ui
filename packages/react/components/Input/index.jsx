import React, { useRef, useState } from 'react';
import InputMask from 'react-input-mask';
import Guide from './Guide';
import c from 'clsx';
import s from '../../../common/Input/index.scss';

const InputCommon = props=> <input {...props} />;

function Input({
  variant = 'line',
  label,
  type,
  value,
  mask,
  style,
  className,
  classLabel,
  classInput,
  classFieldset,
  onFocus,
  onBlur,
  onChange,
  ...props
}) {
  const [focus, setFocus] = useState(false);

  const _props = {
    type,
    value,
    onChange: e=> onChange && onChange(e.target.value),
    onFocus: ()=> {
      onFocus && onFocus();
      setFocus(true);
    },
    onBlur: ()=> {
      onBlur && onBlur();
      setFocus(false);
    },
    ...props,
    className: c(s.input, classInput),
    autocomplete: 'new-password'
  };

  if (mask) {
    _props.mask = mask;
    _props.maskChar = null;
  }

  const Component = mask ? InputMask : InputCommon;

  if (variant === 'outline') {
    return (
      <div
        style={style}
        className={c(s.inputOutline, className, {
          [s.inputValue]: !!value,
          [s.inputFocus]: focus
        })}
      >
        <fieldset className={c(s.inputOutlineFieldset, classFieldset)}>
          <legend className={s.inputLegend}>{label}</legend>
        </fieldset>
        <label className={s.inputLabel}>{label}</label>
        <Component {..._props} />
      </div>
    );
  }

  return (
    <div
      style={style}
      className={c(s.inputLine, className, {
        [s.inputValue]: !!value,
        [s.inputFocus]: focus
      })}
    >
      <label className={c(s.inputLabel, classLabel)}>
        {label}
      </label>
      <Component {..._props} />
    </div>
  );
};

Input.Guide = Guide;

export default Input;
