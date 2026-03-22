import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
    styleSheet={{
      height: '100px',
      width: '100%',
      backgroundColor: theme.colors.primary.x700,
      fullWidth: true,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 'auto',

    }}
    >
      <Text 
      variant = "body1" 
      styleSheet={{ 
        color: theme.colors.neutral.x900,
        padding: '32px' }}>
        Feito por Renato Yoshio - 2026
      </Text>
    </Box>
  )
}