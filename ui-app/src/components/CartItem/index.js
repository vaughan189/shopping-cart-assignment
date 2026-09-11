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

export const CartItem = (props) => {
  const { cartItem, deleteCartItem, addProductsToCart } = props;
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
              width: { xl: 100, md: 50, sm: 100, xs: 100 },
              height: { xl: 100, md: 50, sm: 100, xs: 100 },
            }}
            component="img"
            height="20"
            image={cartItem.imageURL}
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
                {cartItem.productName}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "flex-start",
                    width: { xl: "40%", md: "40%", sm: "40%", xs: "70%" },
                  }}
                >
                  <IconButton
                    id="subtract-Cart-Item"
                    aria-label="subtract"
                    size="small"
                    sx={{
                      height: "20px",
                      width: "20px",
                      borderRadius: { xl: 5, md: 5, sm: 0, xs: 0 },
                      color: "#FFFFFF",
                      backgroundColor: "#c73f6d",
                      "&.MuiButtonBase-root:hover": {
                        bgcolor: "#c73f6d",
                      },
                    }}
                    onClick={() => deleteCartItem(cartItem.id)}
                  >
                    <RemoveSharpIcon />
                  </IconButton>
                  <Typography
                    sx={{ width: "10px", fontFamily: "Dosis" }}
                    component="div"
                  >
                    {cartItem.quantity}
                  </Typography>
                  <IconButton
                    id="add-Cart-Item"
                    aria-label="add"
                    size="small"
                    sx={{
                      height: "20px",
                      width: "20px",
                      borderRadius: { xl: 5, md: 5, sm: 0, xs: 0 },
                      color: "#FFFFFF",
                      backgroundColor: "#c73f6d",
                      "&.MuiButtonBase-root:hover": {
                        bgcolor: "#c73f6d",
                      },
                    }}
                    onClick={() => addProductsToCart(cartItem)}
                  >
                    <AddSharpIcon />
                  </IconButton>
                  <Typography component="div" sx={{ fontFamily: "Dosis" }}>
                    X
                  </Typography>
                  <Typography component="div" sx={{ fontFamily: "Dosis" }}>
                    Rs.{cartItem.price}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography component="div" sx={{ fontFamily: "Dosis" }}>
                    Rs. {cartItem.price * cartItem.quantity}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};
