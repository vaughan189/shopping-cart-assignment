import { Box, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Typography
      sx={{
        color: "#000000",
        position: "fixed",
        bottom: " 0px",
        width: "100%",
        height: "5%",
        backgroundColor: "#bebdbd",
      }}
    >
      <Box
        sx={{
          marginLeft: "16%",
          padding: "16px",
        }}
      >
        <Typography>
          Copyright © 201-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
        </Typography>
      </Box>
    </Typography>
  );
};
