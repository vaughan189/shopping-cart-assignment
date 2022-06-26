import React from "react";
import { Divider, Drawer } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import "./index.scss";

export const Sidebar = (props) => {
  const { categoriesData, filterSelection, setFilterSelection } = props;

  const handleCategorySelection = (id) => {
    if (filterSelection !== id) setFilterSelection(id);
    else if (filterSelection === id) setFilterSelection("");
  };

  return (
    <Drawer variant="permanent">
      <Toolbar />
      <List>
        {categoriesData.map((item) => (
          <>
            <ListItem key={item.id}>
              <ListItemButton onClick={() => handleCategorySelection(item.id)}>
                <ListItemText
                  sx={{ fontFamily: "Dosis" }}
                  primary={item.name}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Drawer>
  );
};
