import React, { useState, useEffect, useRef } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const MyLinearProgress = () => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLoading(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setProgress1(0);
          setProgress2(0);
        }
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let timer;

    if (isLoading) {
      timer = setInterval(() => {
        setProgress1((prevProgress) => Math.min(prevProgress + 1, 80));
        setProgress2((prevProgress) => Math.min(prevProgress + 1, 70));
      }, 3);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isLoading]);

  const linearProgressStyle = {
    backgroundColor: "#dcdcdc",
    "& .MuiLinearProgress-bar": { backgroundColor: "#2196f3" },
    height: 6.5,
  };

  return (
    <Box ref={progressRef}>
      {isLoading && (
        <>
          <LinearProgress
            variant="determinate"
            value={progress1}
            color="secondary"
            sx={linearProgressStyle}
          />
          <br />
          <LinearProgress
            variant="determinate"
            value={progress2}
            color="secondary"
            sx={linearProgressStyle}
          />
        </>
      )}
    </Box>
  );
};
// MAKE THE COMPONENT EXPORT SEPERATELY TO USE IN SPECIFIC SKILL
//try using star  ss
export default MyLinearProgress;
