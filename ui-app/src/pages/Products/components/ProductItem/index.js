import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const ProductItem = (props) => {
  const { item, addProductsToCart } = props;
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      xl={3}
      key={item.id}
      sx={{ display: "flex" }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: { xl: "100%", md: "100%", sm: "100%", xs: "100%" },
          padding: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography
            sx={{
              fontWeight: "Bold",
              fontSize: {
                xl: "1.25rem",
                md: "1.25rem",
                sm: "1rem",
                xs: "1rem",
              },
            }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {item.name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "row",
              sm: "row",
              md: "column",
              xl: "column",
            },
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: { xl: 200, md: 150, sm: 100, xs: 150 } }}
            image={item.imageURL}
            alt={item.name}
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              sx={{
                height: "78px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "4",
                WebkitBoxOrient: "vertical",
                fontFamily: "Dosis",
                lineHeight: 1.3,
                borderRadius: "5px",
                backgroundColor: "rgb(200, 200, 200)",
                padding: 1,
                width: {
                  xl: "100%",
                  md: "100%",
                  sm: "156px",
                  xs: "156px",
                },
              }}
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {item.description}
            </Typography>
            <Box
              sx={{
                marginTop: 3,
                display: {
                  xl: "none",
                  md: "none",
                  sm: "none",
                  xs: "flex",
                },
              }}
            >
              <Button
                variant="contained"
                fullWidth={true}
                onClick={() => addProductsToCart(item)}
              >
                <Typography sx={{ fontFamily: "Dosis" }}>
                  Buy Now @ Rs.{item.price}
                </Typography>
              </Button>
            </Box>
          </CardContent>
          <Box
            sx={{
              display: {
                xl: "flex",
                md: "flex",
                sm: "none",
                xs: "none",
              },
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontFamily: "Dosis" }}>
              MRP Rs.{item.price}
            </Typography>
            <Button
              variant="contained"
              onClick={() => addProductsToCart(item)}
            >
              <Typography sx={{ fontFamily: "Dosis" }}>Buy Now</Typography>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: {
              xl: "none",
              md: "none",
              sm: "flex",
              xs: "none",
            },
          }}
        >
          <Button
            variant="contained"
            fullWidth={true}
            onClick={() => addProductsToCart(item)}
          >
            <Typography sx={{ fontFamily: "Dosis" }}>
              Buy Now @ Rs.{item.price}
            </Typography>
          </Button>
        </Box>
      </Card>
    </Grid>
  );
};
