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
        maxWidth: '450px',
        borderRadius: '32px', // Ajustado para um raio mais proporcional em telas pequenas
        padding: '24px',
        boxSizing: 'border-box',
        marginTop: '-50vh',
        marginBottom: '10vh',
        display: 'flex',
        flexDirection: 'column', // Garante o empilhamento vertical do Header e do Text
        gap: '16px',
        alignItems: 'flex-start',
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
        paddingBottom: '12px',
        marginBottom: '8px',
        width: '100%',
      }}
    >
      <Text tag="h1" variant="heading3"> {/* Heading3 reduz o risco de quebra feia no celular */}
        Entre em contato comigo:
      </Text>
    </Box>    
  );
};

ContatoInfo.Text = function ContatoText() {
  // Estilo genérico reutilizável para quebra de linha segura
  const safeTextStyle = {
    color: '#000000',
    wordBreak: 'break-word' as const,
    overflowWrap: 'anywhere' as const,
    flex: 1, // Permite que o texto ocupe o espaço restante ao lado do ícone sem estourar
  };

  return (
    <Box 
      styleSheet={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px', 
        width: '100%',
        padding: '0px', // Removido o padding duplicate de 32px
      }}
    >
      {/* E-mail */}
      <Box styleSheet={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px', width: '100%' }}>
        <Icon name="email" />
        <Text tag="p" variant="body1" styleSheet={safeTextStyle}>
          e-mail: renatoolyntho@gmail.com
        </Text>
      </Box>

      {/* LinkedIn */}
      <Box styleSheet={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px', width: '100%' }}>
        <Icon name="linkedin" />
        <Link href="https://www.linkedin.com/in/renato-yoshio-b48973300/" style={{ flex: 1, display: 'flex' }}>
          <Text tag="p" variant="body1" styleSheet={safeTextStyle}>
            LinkedIn: renato-olyntho
          </Text>
        </Link>
      </Box>

      {/* Celular */}
      <Box styleSheet={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px', width: '100%' }}>
        <Icon name="celular"/> 
        <Text tag="p" variant="body1" styleSheet={safeTextStyle}>
          Celular: (11) 9 98800-9028
        </Text>
      </Box>    
    </Box>
  );
};