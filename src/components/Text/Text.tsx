import { BaseComponent } from '@src/theme/BaseComponent';
import { StyleSheet } from '@src/theme/StyleSheet';
import { ThemeTypographyVariants } from '@src/theme/theme';
import { useTheme } from '@src/theme/ThemeProvider';
import React from 'react';

interface TextProps {
  variant?: ThemeTypographyVariants;
  tag?: 'p' | 'li' | 'h1' | 'h2' | 'h2' | 'a' | string; 
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}
const Text= React.forwardRef(({
  tag,
  styleSheet, 
  variant = 'body2',
  ...props
}: TextProps, ref) => {

  const theme = useTheme();
  const textVariant = theme.typography.variants[variant];

  return (
    <BaseComponent
      as={tag}
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet,
      }}
      {...props}
      ref={ref}
      
    />
  )
})

Text.defaultProps = {
  tag: 'p',
  variant: 'body2'
};
export default Text;