import { BaseComponent } from '@src/theme/BaseComponent';
import { StyleSheet } from '@src/theme/StyleSheet';
import React from 'react';

interface BoxProps {
  tag?: any;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}

export default function Box({ styleSheet, children, tag = 'div', ...props }: BoxProps) {
  return (
    <BaseComponent as={tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  );
}