import React from "react";
import { Divider, Grid, Typography } from "@mui/material";

import "./index.scss";
import { Box } from "@mui/system";

export const Sidebar = (props) => {
  const { categoriesData, handleCategorySelection } = props;

  return (
    <Box
      component={"div"}
      className="sidebar"
      sx={{ position: "sticky", top: "1rem", height: "100%", width: "100%" }}
    >
      <Grid container direction="column">
        <Grid item xs={12} sm={12} md={12} xl={12}>
          <Typography component={"div"} sx={{ fontFamily: "Dosis" }}>
            {categoriesData.map((item) => (
              <Typography key={item.id}>
                <Typography
                  component={"a"}
                  onClick={() => handleCategorySelection(item.id)}
                >
                  {item.name}
                </Typography>
                <Divider />
              </Typography>
            ))}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
