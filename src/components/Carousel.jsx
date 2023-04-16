import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box, Container, IconButton, styled } from "@mui/material";
import React, { useRef, useEffect, useState, useContext } from "react";
import images from "../data";
import { ImageContext } from "../ImageContext";
const CarouselItem = styled(Box)`
  margin: 10px 0;
  width: 100px;
  height: 100px;
  border-radius: 20px;
`;

const CarouselComponent = styled(Box)`
  position: relative;
  display: flex;
  gap: 1rem;
  overflow: hidden;
`;

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const itemsRef = useRef(null);
  const [itemsWidth, setItemsWidth] = useState(null);
  const { updateIndex, play } = useContext(ImageContext);

  useEffect(() => {
    const width = document.querySelector(".Items").clientWidth;
    setItemsWidth(width);
    updateIndex(currentImageIndex);
  }, [currentImageIndex]);

  useEffect(() => {
    let intervalId = null;

    const handleAutoScroll = () => {
      scrollRight();
    };

    if (play) {
      intervalId = setInterval(handleAutoScroll, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [play,currentImageIndex]);

  const scrollLeft = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
      itemsRef.current.scrollLeft -= itemsWidth;
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
      itemsRef.current.scrollLeft -= itemsWidth;
    }
  };

  const scrollRight = () => {
    if (currentImageIndex === images.length - 1) {
      itemsRef.current.scrollLeft = 0;
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
      itemsRef.current.scrollLeft += itemsWidth;
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ width: { lg: "550px", md: "500px", sm: "350px", xs: "300px" } }}
    >
      <IconButton onClick={scrollLeft} sx={{ marginRight: "10px" }}>
        <ArrowLeft />
      </IconButton>
      <CarouselComponent ref={itemsRef}>
        {images.map((img, index) => (
          <CarouselItem
            className="Items"
            key={img.src}
            component="img"
            src={img.src}
            sx={{
              filter:
                currentImageIndex === index ? "grayscale(0)" : "grayscale(1)",
              border: currentImageIndex === index && "2px solid black",
              transition: "opacity 0.5s, filter 0.5s",
            }}
          />
        ))}
      </CarouselComponent>
      <IconButton onClick={scrollRight}>
        <ArrowRight sx={{ marginLeft: "10px" }} />
      </IconButton>
    </Box>
  );
};


export default Carousel;
