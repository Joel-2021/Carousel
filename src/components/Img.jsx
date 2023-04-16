import { Box, styled } from "@mui/material";
import React, { useContext } from "react";
import images from "../data";
import { ImageContext } from "../ImageContext";
const Image = styled(Box)`
  border-radius: 30px;
  // width:550px;
  // height: 400px;
  margin: 10px;
`;
const Img = () => {
  const { index } = useContext(ImageContext);
  console.log(index);
  return (
    <Image
      component="img"
      src={images[index].src}
      sx={{ width: { lg: "550px", md: "500px", sm: "350px", xs: "300px" },
      height: { lg: "400px", md: "400px", sm: "350px", xs: "300px" }
    }}
    />
  );
};

export default Img;
