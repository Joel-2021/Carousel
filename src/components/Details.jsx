import { Box, Typography, styled, IconButton } from "@mui/material";
import React, { useContext, useState } from "react";
import images from "../data";
import { ImageContext } from "../ImageContext";
import { PauseCircle, PlayCircle } from "@mui/icons-material";
const Detail = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;
const Details = () => {
  const { index, PlayPause, play } = useContext(ImageContext);
  return (
    <Detail sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
      <Typography variant="h5" color="grey" gutterBottom>
        {images[index].title}
      </Typography>
      <Typography variant="subtitle1" color="grey" gutterBottom>
        {images[index].description}
      </Typography>
      <IconButton onClick={() => PlayPause()}>
        {play ? (
          <PauseCircle
            sx={{ width: "100px", height: "100px", color: "black" }}
          />
        ) : (
          <PlayCircle
            sx={{ width: "100px", height: "100px", color: "black" }}
          />
        )}
      </IconButton>
    </Detail>
  );
};

export default Details;
