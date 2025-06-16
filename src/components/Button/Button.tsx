import React, { type FC } from 'react';
import clsx from 'clsx';

import css from './Button.module.scss';

export interface ButtonProps {
  children: React.ReactNode;
  theme?: 'normal' | 'active' | 'transparent';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({
  children,
  theme = 'normal',
  onClick,
}) => {
  return (
    <button className={clsx(css.Button, css[theme])} onClick={onClick}>
      {children}
    </button>
  );
};
