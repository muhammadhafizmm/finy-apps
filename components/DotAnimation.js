import React from "react";
import {
  Box,
  HStack,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { theme } from "../pages/_app";

export default function DotAnimation({ size, color }) {
  const styles = {
    dot1: {
      position: "relative",
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: "5px",
      backgroundColor: `${color}`,
      color: `${color}`,
      display: " inline-block",
    },
    dot2: {
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: "5px",
      backgroundColor: `${color}`,
      color: `${color}`,
      display: "inline-block",
    },

    dot3: {
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: "5px",
      backgroundColor: `${color}`,
      display: "inline-block",
    },
  };
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation1 = prefersReducedMotion
    ? undefined
    : `${keyframe_dot1} infinite .8s linear`;
  const animation2 = prefersReducedMotion
    ? undefined
    : `${keyframe_dot2} infinite .8s linear`;
  const animation3 = prefersReducedMotion
    ? undefined
    : `${keyframe_dot3} infinite .8s linear`;
  return (
    <HStack spacing={`${size}px`} alignItems="flex-end">
      <Box style={styles.dot1} animation={animation1} />
      <Box style={styles.dot2} animation={animation2} />
      <Box style={styles.dot3} animation={animation3} />
    </HStack>
  );
}

const keyframe_dot1 = keyframes`
  0% {
    opacity: 1;
  }
  1% {
    opacity: 0;
  }
  32% {
    opacity: 0;
  }
  33% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;
const keyframe_dot2 = keyframes`
  0% {
    opacity: 1;
  }
  32% {
    opacity: 1;
  }
  33% {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  66% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;
const keyframe_dot3 = keyframes`
  0% {
    opacity: 1;
  }
  65% {
    opacity: 1;
  }
  66% {
    opacity: 0;
  }
  99% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
