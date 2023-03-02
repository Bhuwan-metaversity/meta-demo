import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { AnimatePresence, motion } from "framer-motion";
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
  let timer;
  useEffect(() => {
    timer = setTimeout(
      () =>
        setCounter((prev) =>
          prev >= Math.floor(items?.length) - 1 ? 0 : prev + 1
        ),
      timeOut
    );

    return () => {
      clearTimeout(timer);
    };
  }, [counter, items?.length, timeOut, setCounter, itemsPerPage]);
  const slides: any[] = [];

  const handleUpClick = () => {
    setCounter((o) => (o === 0 ? items.length - 1 : o - 1));
  };
  const handleDownClick = () => {
    if (counter === items.length - 1) {
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
        top={{ xs: 50, md: 200 }}
        right={{ xs: 5, md: 15 }}
        display={"flex"}
        flexDirection="column"
        zIndex={5}
      >
        <IconButton onClick={handleUpClick}>
          <ArrowUpward sx={{ fontSize: { xs: "small", md: "1.5rem" } }} />
        </IconButton>{" "}
        <IconButton onClick={handleDownClick}>
          <ArrowDownward sx={{ fontSize: { xs: "small", md: "1.5rem" } }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          rotate: "-90deg",
          top: 250,
          left: -100,
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <a href="https://twitter.com/MetaversityTech" target={"_blank"}>
          Linked In
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100087924176394"
          target={"_blank"}
          style={{ margin: "40px" }}
        >
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/company/metaversity-technologies"
          target={"_blank"}
        >
          Twitter
        </a>
      </Box>
      {/* <Box
        className={styles.slideshowSlider}
        sx={{ transform: `translate3d(0,${-counter * 100}%, 0)` }}
      > */}
      <AnimatePresence mode="sync">
        <motion.div
          key={counter}
          initial={{ y: 800 }}
          animate={{ y: 0 }}
          exit={{ opacity: 0, scale: 0.6, position: "absolute" }}
          transition={{ duration: 1.5 }}
        >
          {slides[counter]}
        </motion.div>
      </AnimatePresence>
      {/* {slides} */}
      {/* </Box> */}
    </Box>
  );
};

export default Vertical2by2Slider;
