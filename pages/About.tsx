import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import Link from "@src/components/Link/Link";

export default function AboutScreen() {
  const theme = useTheme();

  return (
   <div>
    <Box
    tag="main"
      styleSheet={{
        backgroundColor: theme.colors.primary.x500,
        alignItems: 'center',
      }}
    >
     <Text tag="h1" variant="heading1">
       Sobre
     </Text>
     <Link href="/">
       Voltar para Home
      </Link>
   </Box>
   </div>
  )
}