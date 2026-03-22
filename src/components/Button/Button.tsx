import { useTheme } from "@src/theme/ThemeProvider";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { colorVariantBy, Variant } from "./colorVariantBy";
import Background from "@src/screensHomeScreen/patterns/Background/Background";
import { ButtonSize, buttonSize } from "./ButtonSize";

interface ButtonProps extends ButtonBaseProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;
}
export default function Button({ styleSheet, children, fullWidth, colorVariant, variant, size }: ButtonProps) {
  const theme = useTheme();
  return (
    <ButtonBase
      styleSheet={{
        alignSelf: 'flex-start',
        AlignItems: 'center',
        justifyContent: 'center',
        ...buttonSize[size],
        ...colorVariantBy(theme, colorVariant, variant),
        ...(fullWidth &&{
          alignSelf: 'initial',
        }),
        ...styleSheet,
      }}
    >
      {children}
    </ButtonBase>
  );
}

Button.defaultProps = {
  fullWidth: false,
  size : 'md',
  children: null,
  variant: 'contained',
  colorVariant: 'primary',
  BackgroundColor: 'inherit',
};
Button.Base = ButtonBase;