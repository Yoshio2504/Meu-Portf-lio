import Box from "@src/components/Box/Box";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Background() {
  const theme = useTheme();
  const imageUrl = "https://images.unsplash.com/photo-1559825481-12a05cc00344?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVuZG8lMjBkbyUyMG9jZWFub3xlbnwwfHwwfHx8MA%3D%3D";

  return (
    <Box
      tag="section"
      styleSheet={{
        backgroundColor: theme.colors.primary.x200,
        backgroundImage: `url(${imageUrl})`,
        width: '100%',
        height: '120vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        marginBottom: '-50vh'
      }}
    />
  );
}