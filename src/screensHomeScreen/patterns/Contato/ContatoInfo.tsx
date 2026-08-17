import React from 'react';
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import { useTheme } from '@src/theme/ThemeProvider'; 
import Link from "@src/components/Link/Link";
import Button from '@src/components/Button/Button';

interface AboutMeProps {
  children: React.ReactNode;
}

export default function ContatoInfo({ children }: AboutMeProps) {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.warning.x100,
        width: '90%',
        borderRadius: '50px',
        padding: '16px',
        marginTop: '-50vh',
        marginBottom: '10vh',
        paddingBottom: '32px',
        paddingTop: '32px',
        paddingHorizontal: '32px',
        display: 'flex',
        gap: '16px',
      }}
    >
      {children}
    </Box>
  );
}

ContatoInfo.Header = function ContatoHeader() {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        color: theme.colors.neutral.x900,
        borderBottom: `1px solid ${theme.colors.neutral.x900}`,
        marginBottom: '24px',
      }}
    >
        <Text tag="h1" variant="heading1">
            Entre em contato comigo:
        </Text>
    </Box>    

  );
};

ContatoInfo.Text = function ContatoText() {
  return (
    <Box styleSheet={{ paddingHorizontal: '32px', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <Box styleSheet={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
          <Icon name="email" />
          <Text tag="h2" variant="body1" styleSheet={{ color: '#000000' }} >
            e-mail: renatoolyntho@gmail.com
          </Text>
        </Box>
        <Box styleSheet={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
          <Icon name="linkedin" />
          <Link href="https://www.linkedin.com/in/renato-yoshio-b48973300/">
             <Text tag="h2" variant="body1" styleSheet={{ color: '#000000' }} >
                LinkedIn: renato-olyntho
              </Text>
            </Link>
        </Box>
        <Box styleSheet={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
          <Icon name="celular"/> 
          <Text tag="h2" variant="body1" styleSheet={{ color: '#000000' }} >
            Celular: (11) 9 98800-9028
          </Text>
        </Box>    
    </Box>
  );
};