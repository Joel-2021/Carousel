import { useEffect, useState } from "react";
import Img from "./components/Img";
import Carousel from "./components/Carousel";
import { Box, Container } from "@mui/material";
import Details from "./components/Details";
function App() {
  const [ImageIndex, setImageIndex] = useState(0);
  const SelectedImage = (data) => {
    setImageIndex(data);
  };
  return (
    <Container
      sx={{
        display: { lg: "flex", md: "flex", sm: "block", xs: "block" },
        justifyContent:'center',
        // alignItems:'center',
        padding: { lg: "3rem", md: "3rem", sm: "1rem", xs: "1rem" },
        gap: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Img index={ImageIndex} />
        <Carousel SelectedImage={SelectedImage} />
      </Box>
      <Details />
    </Container>
  );
}

export default App;
