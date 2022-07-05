import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, CardMedia, Grid } from "@mui/material";

import "./index.scss";

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
  let history = useHistory();
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
                component="img"
                height="400"
                image={imageUrl}
                alt={name}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} xl={6}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  xl={12}
                  className="categoryName"
                >
                  {name}
                </Grid>
                <Grid item xs={12} sm={12} md={12} xl={12}>
                  {description}
                </Grid>
                <Grid item xs={12} sm={12} md={12} xl={12}>
                  <Button
                    id="left-explore-btn"
                    variant="contained"
                    color="primary"
                    style={{ textTransform: "none" }}
                    onClick={() => history.push("/products")}
                  >
                    Explore {name}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
        {position === 1 && (
          <>
            <Grid item xs={6} sm={6} md={6} xl={6}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  xl={12}
                  className="categoryName"
                >
                  {name}
                </Grid>
                <Grid item xs={12} sm={12} md={12} xl={12}>
                  {description}
                </Grid>
                <Grid item xs={12} sm={12} md={12} xl={12}>
                  <Button
                    id="right-explore-btn"
                    variant="contained"
                    color="primary"
                    style={{ textTransform: "none" }}
                    onClick={() => history.push("/products")}
                  >
                    Explore {name}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} sm={4} md={4} xl={4}>
              <CardMedia
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
