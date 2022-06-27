import React from "react";
import { Divider, Drawer } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import "./index.scss";
import { Box } from "@mui/system";

export const Sidebar = (props) => {
  const { categoriesData, handleCategorySelection } = props;

  return (
    <Drawer variant="permanent">
      <Toolbar />
      <List>
        {categoriesData.map((item) => (
          <Box key={item.id}>
            <ListItem key={item.id}>
              <ListItemButton onClick={() => handleCategorySelection(item.id)}>
                <ListItemText
                  sx={{ fontFamily: "Dosis" }}
                  primary={item.name}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Drawer>
  );
};
