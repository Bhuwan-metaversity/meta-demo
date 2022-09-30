import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as styles from "./slider.module.css";

export interface VSProps {
  items: any[];
  timeOut: number;
  itemsPerPage: number;
  // counter: number
  // setCounter: React.Dispatch<React.SetStateAction<number>>
}

const Vertical2by2Slider: React.FC<VSProps> = ({
  items,
  timeOut,
  itemsPerPage = 2,
}) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setTimeout(
      () =>
        setCounter((prev) =>
          prev >= Math.floor(items?.length) - 1 ? 0 : prev + 1
        ),
      timeOut
    );

    return () => {};
  }, [counter, items?.length, timeOut, setCounter, itemsPerPage]);
  const slides: any[] = [];

  const handleUpClick = () => {
    setCounter((o) => (o === 0 ? items.length : o - 1));
  };
  const handleDownClick = () => {
    if (counter === items.length) {
      setCounter(0);
    } else {
      setCounter((o) => o + 1);
    }
  };
  for (let index = 0; index < items?.length; index++) {
    slides.push(
      <Box className={styles.slide} key={`slides${index}/${items.length}`}>
        {items[index]}
      </Box>
    );
  }
  return (
    <Box className={styles.slideshow}>
      <Box
        position="absolute"
        top={0}
        right={0}
        display={"flex"}
        flexDirection="column"
        zIndex={5}
      >
        <IconButton onClick={handleUpClick}>
          <ArrowUpward />
        </IconButton>{" "}
        <IconButton onClick={handleDownClick}>
          <ArrowDownward />
        </IconButton>
      </Box>
      <Box
        className={styles.slideshowSlider}
        sx={{ transform: `translate3d(0,${-counter * 100}%, 0)` }}
      >
        {slides}
      </Box>
    </Box>
  );
};

export default Vertical2by2Slider;
