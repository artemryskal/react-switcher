import React, { useState, useRef, useEffect, type FC } from 'react';

import { Button } from '@/components/Button';

import css from './Switcher.module.scss';

export interface SwitcherItem {
  label: string;
}

export interface SwitcherProps {
  items: SwitcherItem[];
  initialValue?: number;
  onChange?: (value: number) => void;
}

export const Switcher: FC<SwitcherProps> = ({
  items,
  initialValue = 0,
  onChange,
}) => {
  const switchRef = useRef<HTMLDivElement>(null);
  const [variables, setVariables] = useState({
    '--thumb-offset': '0px',
    '--thumb-top-offset': '0px',
    '--thumb-width': '0px',
    '--thumb-height': '0px',
  });

  const calculateVars = (button: HTMLButtonElement) => {
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = button;

    setVariables({
      '--thumb-offset': `${offsetLeft}px`,
      '--thumb-top-offset': `${offsetTop}px`,
      '--thumb-width': `${offsetWidth}px`,
      '--thumb-height': `${offsetHeight}px`,
    });
  };

  const toggleActive = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (!switchRef.current) return;
    calculateVars(e.currentTarget);
    onChange?.(index);
  };

  useEffect(() => {
    if (switchRef.current) {
      const buttons = switchRef.current.querySelectorAll('button');
      calculateVars(buttons[initialValue]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={switchRef}
      className={css.Container}
      style={variables as React.CSSProperties}
    >
      {items.map((item, index) => (
        <Button
          key={index}
          theme="transparent"
          onClick={e => toggleActive(e, index)}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};
