import React from 'react';
import { DividerProps } from './types';

const Divider: React.FC<DividerProps> = ({
  color,
  thickness = '1px',
  style,
  className,
}) => {
  return (
    <hr
      className={className}
      style={{
        backgroundColor: color,
        height: thickness,
        ...style,
      }}
    />
  );
};

export default Divider;
