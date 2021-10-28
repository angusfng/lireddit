import { Box } from "@chakra-ui/react";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  variant?: "small" | "regular";
}

const Wrapper = ({ children, variant }: WrapperProps) => {
  return (
    <Box
      maxW={variant === "small" ? "400px" : "800px"}
      w="100%"
      mx="auto"
      mt={8}
    >
      {children}
    </Box>
  );
};

export default Wrapper;
