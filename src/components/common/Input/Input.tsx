import React, { FC } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  disabled = false,
  name,
  required = false,
  ...rest
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classNames(styles.input, className)}
      disabled={disabled}
      name={name}
      required={required}
      {...rest}
    />
  );
};

export default Input;
