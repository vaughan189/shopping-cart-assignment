import React from "react";
import { Card, CardMedia, Grid } from "@mui/material";

import "./index.scss";
import { Explore } from "./components/Explore";

export const Categories = (props) => {
  const { categoriesData } = props;
  return (
    <>
      {categoriesData.map((item, index) => {
        return (
          <CategoriesItem
            key={item.id}
            name={item.name}
            description={item.description}
            imageUrl={item.imageUrl}
            position={index % 2}
          />
        );
      })}
    </>
  );
};

export const CategoriesItem = (props) => {
  const { name, description, imageUrl, position } = props;
  return (
    <Card className="CategoriesItem" sx={{ minHeight: 260 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {position === 0 && (
          <>
            <Grid item xs={4} sm={4} md={4} xl={4}>
              <CardMedia
                rel="preload"
                component="img"
                height="400"
                image={imageUrl}
                alt={name}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} xl={6}>
              <Explore name={name} description={description} />
            </Grid>
          </>
        )}
        {position === 1 && (
          <>
            <Grid item xs={6} sm={6} md={6} xl={6}>
              <Explore name={name} description={description} />
            </Grid>
            <Grid item xs={4} sm={4} md={4} xl={4}>
              <CardMedia
                rel="preload"
                component="img"
                height="400"
                image={imageUrl}
                alt={name}
              />
            </Grid>
          </>
        )}
      </Grid>
    </Card>
  );
};
