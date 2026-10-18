import Box from "@src/components/Box/Box";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Background() {
  const theme = useTheme();
  
  // URL com caracteres especiais mantida intacta
  const imageUrl = "https://images.unsplash.com/photo-1559825481-12a05cc00344?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVuZG8lMjBkbyUyMG9jZWFub3xlbnwwfHwwfHx8MA%3D%3D"; 
  const bgColor = theme.colors.primary.x200;

  return (
    <Box
      tag="section"
      styleSheet={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: bgColor,
        zIndex: 0,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Box de Cima (esmaece para baixo) */}
      <Box
        styleSheet={{
          height: '45vh',
          width: '100%',
          // Aspas simples na URL garantem que a imagem renderize
          backgroundImage: `linear-gradient(to bottom, transparent 20%, ${bgColor} 100%), url('${imageUrl}')`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Box de Baixo (esmaece para cima) */}
      <Box
        styleSheet={{
          height: '45vh',
          width: '100%',
          // Aspas simples na URL garantem que a imagem renderize
          backgroundImage: `linear-gradient(to top, transparent 20%, ${bgColor} 100%), url('${imageUrl}')`,
          backgroundPosition: 'bottom center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </Box>
  );
}