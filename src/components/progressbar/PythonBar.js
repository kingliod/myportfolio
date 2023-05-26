import React, { useState, useEffect, useRef } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const MyLinearProgress = () => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLoading(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setProgress1(0);
          setProgress2(0);
          setProgress3(0);
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
        setProgress1((prevProgress) => Math.min(prevProgress + 1, 85));
        setProgress2((prevProgress) => Math.min(prevProgress + 1, 80));
        setProgress3((prevProgress) => Math.min(prevProgress + 1, 95));
      }, 3);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isLoading]);

  //CSS PROGRESS BAR
  const linearProgressStyle = {
    backgroundColor: "#dcdcdc",
    "& .MuiLinearProgress-bar": { backgroundColor: "#2196f3" },
    height: 5,
    flexGrow: 1, 
    marginLeft: 1,
  };

  //CSS PROGRESS BAR BOX
  const linearProgressBox = {
    display: 'flex', alignItems: 'center',
    textAlign:"right"  
  };

  const barTypographyStyle = {
    opacity: 0.7,
    letterSpacing: ".6px",
    fontVariationSettings: "'wght' 70",
    textTransform: "none",
    lineHeight: "1.7",
    wordSpacing: "2px",
    width: 150
  }
  return (
    <Box ref={progressRef}>
    {isLoading && (
      <>
        <Typography variant="body1" 
        sx={{  
        letterSpacing: "4px",
        // mb: ".70em",
        }}>
        Python
        </Typography>

        <Box sx={{...linearProgressBox}}>
          <Typography variant="caption" sx={{...barTypographyStyle}}>Syntax and Basics:</Typography>
          <LinearProgress
            variant="determinate"
            value={progress1}
            sx={{... linearProgressStyle}}
          />
        </Box>
        <Box sx={{...linearProgressBox}}>
          <Typography variant="caption" sx={{...barTypographyStyle}}>Problem Solving:</Typography>
            <LinearProgress
            variant="determinate"
            value={progress2}
            sx={{... linearProgressStyle}}
             />
        </Box>
        <Box sx={{...linearProgressBox}}>
          <Typography variant="caption" sx={{...barTypographyStyle}}>Development & Tools:</Typography>
          <LinearProgress
            variant="determinate"
            value={progress3}
            sx={{ ...linearProgressStyle }}
            />
        </Box>

      </>
    )}
  </Box>
  );
};
// MAKE THE COMPONENT EXPORT SEPERATELY TO USE IN SPECIFIC SKILL
//try using star  ss
export default MyLinearProgress;
