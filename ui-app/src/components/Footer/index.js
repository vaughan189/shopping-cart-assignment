import { Box, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Typography
      sx={{
        color: "#000000",
        width: "100%",
        height: "5%",
        backgroundColor: "#ececec",
      }}
    >
      <Box
        sx={{
          marginLeft: "18%",
          padding: "16px",
        }}
      >
        <Typography sx={{ fontFamily: "Dosis" }}>
          Copyright © 201-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
        </Typography>
      </Box>
    </Typography>
  );
};
