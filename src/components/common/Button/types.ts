import React from 'react';
import { Colors } from '@shared/types';

export type ButtonVariant = 'contained' | 'outlined' | 'text';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: Colors;
  children: React.ReactNode;
}
