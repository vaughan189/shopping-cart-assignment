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

export const ProductList = (props) => {
  const { productsData } = props;
  return (
    <Box sx={{ paddingLeft: "20px", paddingTop: "30px", paddingBottom: '20px' }}>
      <Grid container direction="row" spacing={2} alignItems="stretch">
        {productsData.map((item) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              xl={3}
              key={item.id}
              style={{ display: "flex" }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: { xl: 230, md: 230, sm: 300, xs: 350 },
                  padding: "15px",
                }}
              >
                <Typography
                  sx={{ fontWeight: "Bold" }}
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  {item.name}
                </Typography>
                <CardMedia
                  component="img"
                  sx={{ width: 200 }}
                  image={item.imageURL}
                  alt={item.name}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
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
                      }}
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontFamily: "Dosis" }}>
                      MRP Rs.{item.price}
                    </Typography>
                    <Button variant="contained">
                      <Typography sx={{ fontFamily: "Dosis" }}>
                        Buy Now
                      </Typography>
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
