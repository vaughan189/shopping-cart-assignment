import React from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";

import "./index.scss";
import { Box } from "@mui/system";

export const Sidebar = (props) => {
  const { categoriesData, handleCategorySelection } = props;

  return (
    <Box
      component={"div"}
      className="sidebar"
      sx={{
        position: "fixed",
        top: { xl: "7rem", md: "7rem", sm: "5.5rem" },
        height: "100%",
        width: { xl: "260px", md: "200px", sm: "140px" },
        marginLeft: { xl: 0, md: 0, sm: "-24px" },
      }}
    >
      <Grid container direction="column">
        <Grid item xs={12} sm={12} md={12} xl={12}>
          <Typography component={"div"} sx={{ fontFamily: "Dosis" }}>
            {categoriesData.map((item) => (
              <Typography key={item.id} style={{ cursor: "pointer" }}>
                <Typography
                  component={"a"}
                  onClick={() => handleCategorySelection(item.id)}
                >
                  <Button variant="text" color="secondary" disableElevation>
                    {item.name}
                  </Button>
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
