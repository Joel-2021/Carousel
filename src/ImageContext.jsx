import React, { createContext, useState } from 'react';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [play,setPlay]=useState(false)
  const updateIndex = (newIndex) => {
    setIndex(newIndex);
  };
  const PlayPause=()=>{
    setPlay(!play)
  }
  return (
    <ImageContext.Provider value={{ index, updateIndex,play,PlayPause }}>
      {children}
    </ImageContext.Provider>
  );
};
