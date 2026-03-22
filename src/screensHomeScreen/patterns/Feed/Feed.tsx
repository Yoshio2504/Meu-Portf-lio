import React from 'react';
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import { useTheme } from '@src/theme/ThemeProvider'; 
import Link from "@src/components/Link/Link";
import Button from '@src/components/Button/Button';

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  const theme = useTheme();
  
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.primary.x300,
        width: '90%',
        borderRadius: '50px',
        padding: '16px',  
        marginTop: '-70vh',
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

Feed.Header = () => {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        color: theme.colors.neutral.x900,
        borderBottom: `1px solid ${theme.colors.neutral.x900}`,
        marginBottom: '24px',
      }}
    >
      <Box
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px',
          marginTop: '-10px',
        }}
      >
        <Box>
          <img
            style={{
              width: '128px',
              height: '128px',
              borderRadius: '100%',
              alignSelf: 'center',
            }}
            src="https://raw.githubusercontent.com/Yoshio2504/imagem1/refs/heads/main/imagem_2026-03-09_205219430.png"
            alt="Imagem de perfil"
          />
          <Text tag="h1" variant="heading4" styleSheet={{ alignSelf: 'center' }}>
            Renato Yoshio
          </Text>
          <Text tag="p" variant="body2" styleSheet={{ alignSelf: 'center' }}>
            Desenvolvedor Front-end
          </Text>
          <Box styleSheet={{ 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'row', 
            gap: '8px', 
            marginTop: '1px' }}>
            <Icon name="email" styleSheet={{ alignSelf: 'center' }} />
            <Text tag="p" variant="body2" styleSheet={{ alignSelf: 'center' }}>
              renatoyoshio@gmail.com
            </Text>
          </Box>
        </Box>
        
        <Box
          styleSheet={{
            flexDirection: 'row', 
            gap: '16px',          
            marginBottom: '16px', 
            alignSelf: 'center',
          }}
        >
          <Link href="https://www.linkedin.com/in/renato-yoshio-b48973300/" styleSheet={{ alignSelf: 'start' }}>
            <Icon name="linkedin" />
          </Link>
          <Link href="https://twitter.com/renatoyoshioo" styleSheet={{ alignSelf: 'start' }}>
            <Icon name="twitter" />
          </Link>
          <Link href="https://www.instagram.com/renatoyoshioo/" styleSheet={{ alignSelf: 'start' }}>
            <Icon name="instagram" />
          </Link>
          <Link href="https://github.com/Yoshio2504" styleSheet={{ alignSelf: 'start' }}>
            <Icon name="github"/>
          </Link>
        </Box> 
        
          <Box>
            <Box  styleSheet={{flex:1, justifyContent: 'space-between', gap: '16px', flexDirection: 'column', display: {xs: 'none', md: 'flex'}, padding: '16px'  }}> 
              <Button fullWidth colorVariant="primary" size="xl">
                Meu Feed
              </Button>
              <Button fullWidth colorVariant="neutral" size="xl">
                Botão 2
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
  );
};

Feed.Posts = () => {
  return (
    <Box>
      <Text>
        Feed Posts
      </Text>
    </Box>
  );
};