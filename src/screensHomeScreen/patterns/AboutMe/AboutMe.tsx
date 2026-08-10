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

export default function AboutMe({ children }: AboutMeProps) {
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

AboutMe.Header = function AboutMeHeader() {
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
            Quem sou eu?
        </Text>
    </Box>    

  );
};

AboutMe.Text = function AboutMeText() {
  return (
    <Box styleSheet={{ paddingHorizontal: '32px' }}>
      <Text tag="h2" variant="body1" styleSheet={{ color: '#000000' }}  >
        (Esse texto é ficticio e serve apenas para testes durante a construção do portfolio)
        Desenvolvedor Front-end apaixonado por transformar layouts em experiências digitais fluidas, acessíveis e de alta performance. Minha trajetória no código começou pela curiosidade de entender como a tecnologia ganha vida na tela e, hoje, meu foco é criar interfaces modernas que unam apelo visual com uma excelente usabilidade.
        Atualmente, desenvolvo aplicações utilizando JavaScript (ES6+), TypeScript, React e Tailwind CSS, sempre atento às boas práticas de arquitetura de software, responsividade e otimização. Acredito que um bom front-end vai além de renderizar componentes: trata-se de garantir velocidade, acessibilidade e uma navegação sem atrito para o usuário final.
        Além de escrever código, gosto de acompanhar tendências de UI/UX design, aperfeiçoar meus fluxos de trabalho e transformar ideias em protótipos funcionais. Quando não estou no VS Code, costumo dedicar meu tempo a tomar um bom café, estudar novas tecnologias e jogar com os amigos.
      </Text>
    </Box>
  );
};