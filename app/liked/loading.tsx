"use client";

import { PropagateLoader } from "react-spinners";

import Box from "@/components/Box";

const Loading = () => {
  return ( 
    <Box className="h-full flex items-center justify-center">
      <PropagateLoader color="#1e40af" size={30} />
    </Box>
  );
}

export default Loading;
