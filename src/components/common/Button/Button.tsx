import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from './types';
import { Colors } from '@shared/types';

const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  color = Colors.BLACK,
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(
        'button',
        `button--${variant}`,
        `button--${color}`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
