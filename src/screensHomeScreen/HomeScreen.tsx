import Box from "@src/components/Box/Box";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import Background from "./patterns/Background/Background";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import Menu from "./patterns/Menu/Menu";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.primary.x100,
        flex: 1,
        minHeight: '100vh',      
        display: 'flex',           
        flexDirection: 'column',   
        justifyContent: 'space-between', 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Box 
        styleSheet={{ 
          width: '100%', 
          alignItems: 'center', 
          flexDirection: 'column',
          flex: 1 
        }}
      >
        <Background />
        <Menu />
        <Feed>
          <Feed.Header />
          <Feed.updates/>
          <Feed.Posts /> 
        </Feed>
      </Box>
    <Footer/>
    </Box>
  );
}