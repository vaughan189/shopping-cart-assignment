import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export const LowestPriceSection = () => {
  return (
    <Card sx={{ margin: 1, pointerEvents: "none" }}>
      <CardActionArea>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            padding: 1,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              objectFit: " contain",
              width: 152,
              height: 54,
            }}
            image="/static/images/lowest-price.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography
              sx={{
                fontFamily: "Dosis",
                fontSize: 16,
              }}
            >
              You won't find it cheaper anywhere
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};
