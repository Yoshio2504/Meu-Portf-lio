import Box from "@src/components/Box/Box";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Background() {
  const theme = useTheme();
  const imageUrl = "https://cdn-blog.superprof.com/blog_br/wp-content/uploads/2021/08/computador-programacao.jpg";

  return (
    <Box
      tag="section"
      styleSheet={{
        backgroundColor: theme.colors.primary.x200,
        backgroundImage: `url(${imageUrl})`,
        width: '100%',
        height: '80vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    />
  );
}