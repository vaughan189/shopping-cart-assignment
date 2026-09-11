import React from "react";
import { Button, Grid } from "@mui/material";
import { useHistory } from "react-router-dom";

import "./index.scss";

export const Explore = (props) => {
  const { name, description } = props;
  let history = useHistory();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={12} sm={12} md={12} xl={12} className="categoryName">
        {name}
      </Grid>
      <Grid item xs={12} sm={12} md={12} xl={12}>
        {description}
      </Grid>
      <Grid item xs={12} sm={12} md={12} xl={12}>
        <Button
          id="explore-more-btn"
          variant="contained"
          color="primary"
          style={{ textTransform: "none" }}
          onClick={() => history.push("/products")}
        >
          Explore {name}
        </Button>
      </Grid>
    </Grid>
  );
};
