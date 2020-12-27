import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { c } from '../../helpers';
import guide from './index.mdx';
import s from './index.scss';

const InputCommon = props=> <input {...props} />;

function Input({
  variant = 'default',
  label,
  type,
  value,
  mask,
  style,
  className,
  classLabel,
  classInput,
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
      onBlur && onFocus();
      setFocus(true);
    },
    onBlur: ()=> {
      onBlur && onBlur();
      setFocus(false);
    },
    ...props,
    className: c(s.input, s[variant], classInput),
    autocomplete: 'new-password'
  };

  if (mask) {
    _props.mask = mask;
    _props.maskChar = null;
  }

  const Component = mask ? InputMask : InputCommon;

  if (variant === 'outline') {
    return (
      <div className={c(s.inputCase, className)}>
        <Component
          {..._props}
          placeholder={props.placeholder || label}
        />
      </div>
    );
  }

  return (
    <div
      style={style}
      className={c(s.inputCase, className, { [s.focus]: focus })}
    >
      <label className={c(s.label, classLabel, { [s.focusLabel]: focus || value })}>
        {label}
      </label>
      <Component {..._props} />
    </div>
  );
};

Input.guide = guide;

export default Input;
