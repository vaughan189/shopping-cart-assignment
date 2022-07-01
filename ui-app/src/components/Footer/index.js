import { Box, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Typography
      sx={{
        bottom: 0,
        position: "fixed",
        color: "#000000",
        width: "100%",
        height: {xl: "4%", md: "4%", sm:"4%"},
        backgroundColor: "#ececec",
      }}
    >
      <Box
        sx={{
          marginLeft:{xl: "40%", md: "35%", sm:"20%"},
          padding: "auto",
        }}
      >
        <Typography sx={{ fontFamily: "Dosis" }}>
          Copyright © 201-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
        </Typography>
      </Box>
    </Typography>
  );
};
