import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import Link from "@src/components/Link/Link";
import Menu from "@src/screensHomeScreen/patterns/Menu/Menu";
import Background from "@src/screensHomeScreen/patterns/Background/Background";
import Feed from "@src/screensHomeScreen/patterns/Feed/Feed";
import AboutMe from "@src/screensHomeScreen/patterns/AboutMe/AboutMe";
import Footer from "@src/screensHomeScreen/patterns/Footer/Footer";


export default function AboutScreen() {
  const theme = useTheme();

  return (
    <>
      <Box>
        <Menu />
      </Box>

      <Box
        tag="main"
        styleSheet={{
          backgroundColor: theme.colors.primary.x100,
          flex: 1,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box
          styleSheet={{
            width: '100%',
            alignItems: 'center',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <Background />
          <AboutMe>
                    <AboutMe.Header />
                    <AboutMe.Text />
          </AboutMe>
        </Box>
      <Footer/>   
      </Box>
    </>
  );
}