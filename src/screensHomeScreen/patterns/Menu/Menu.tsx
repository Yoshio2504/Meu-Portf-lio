import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";
import Link from "@src/components/Link/Link";


export default function Menu() {
  const theme = useTheme();
  const baseSize = '40px';
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Box
    styleSheet={{
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      padding: '16px',
      zIndex: 1000,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginTop: '10px',
      color: theme.colors.primary.x500,

    }}>
      <Text variant="heading2"
      styleSheet={{
        width: baseSize,
        height: baseSize,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        RY
      </Text>
      <Button.Base onClick={() => setIsMenuOpen(!isMenuOpen)}
      styleSheet={{
        borderRadius: '100%',
        backgroundColor: theme.colors.primary.x100,
        width: baseSize,
        height: baseSize,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        hover: {
        color: theme.colors.primary.x300,
      },
      focus: {  
        color: theme.colors.primary.x700,
      },
      }}>
        <Icon name="menu" />
      </Button.Base>
      {isMenuOpen && (
        <Box
          styleSheet={{
            position: 'absolute',
            top: '60px',
            right: '10px',
            boxShadow:'0px 4px 12px rgb(0, 0, 0)',
            backgroundColor: theme.colors.primary.x100,
            borderRadius: '8px',  
            padding: '16px',
            display: 'flex',
            flexDirection: 'column', 
            gap: '8px',
            width: '200px', 
            }}>
            <Link href="/" colorVariant="primary">
              Home
            </Link>
            <Link href="/About" colorVariant="primary">
              Sobre
            </Link>
            <Link href="/Contact" colorVariant="primary">
              Contato
            </Link>
          </Box>
      )}
    </Box>
  )
}