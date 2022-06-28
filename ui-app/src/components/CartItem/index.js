import React from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import { Box } from "@mui/system";

export const CartItem = () => {
  return (
    <Card sx={{ margin: 1 }}>
      <CardActionArea>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <CardMedia
            sx={{
              width: { xl: 100, md: 150, sm: 100, xs: 150 },
              height: { xl: 100, md: 150, sm: 100, xs: 150 },
            }}
            component="img"
            height="20"
            image="/static/images/products/fruit-n-veg/kiwi-green.jpg"
            alt="green iguana"
          />
          <CardContent
            sx={{ width: { xl: "100%", md: "100%", sm: "100%", xs: "100%" } }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "Bold",
                  fontSize: {
                    xl: "1rem",
                    md: "1rem",
                    sm: "1rem",
                    xs: "1rem",
                  },
                }}
              >
                Fresho Kiwi - Green, 3 pcs
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <IconButton
                  aria-label="subtract"
                  sx={{
                    color: "#FFFFFF",
                    backgroundColor: "#c73f6d",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#c73f6d",
                    },
                  }}
                >
                  <RemoveSharpIcon />
                </IconButton>
                <Typography component="div">2</Typography>
                <IconButton
                  aria-label="add"
                  sx={{
                    color: "#FFFFFF",
                    backgroundColor: "#c73f6d",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#c73f6d",
                    },
                  }}
                >
                  <AddSharpIcon />
                </IconButton>
                <Typography component="div">x Rs.187</Typography>
                <Typography component="div">Rs.187</Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};
