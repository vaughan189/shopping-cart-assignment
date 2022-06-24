import { Button, Card, CardMedia, Grid } from "@mui/material";
import React from "react";

import "./index.scss";

export const Categories = (props) => {
  const { categoriesData } = props;
  return (
    <>
      {categoriesData.map((item) => {
        return (
          <CategoriesItem
            key={item.id}
            name={item.name}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        );
      })}
    </>
  );
};

const CategoriesItem = (props) => {
  const { name, description, imageUrl, position } = props;
  return (
    <Card className="CategoriesItem">
      {/* <Box>
        <CardContent>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
        </CardContent>
      </Box> */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} sm={6} md={6} xl={6}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} sm={12} md={12} xl={12}>
              {name}
            </Grid>
            <Grid item xs={12} sm={12} md={12} xl={12}>
              {description}
            </Grid>
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <Button variant="contained" color="primary">
                Explore {name}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={6} md={6} xl={6}>
          <CardMedia component="img" height="400" image={imageUrl} alt={name} />
        </Grid>
      </Grid>
    </Card>
  );
};
