import { Grid } from "@mui/material";
import React from "react";
import "./index.scss";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarLink text="Fruits and Vegetables" />
      <SidebarLink text="Bakery Cakes and Dairy" />
      <SidebarLink text="Beverages" />
      <SidebarLink text="Beauty and Hygiene" />
      <SidebarLink text="Baby Care" />
    </div>
  );
};

const SidebarLink = ({ text }) => {
  return (
    <Grid item className="link">
      <h2>{text}</h2>
    </Grid>
  );
};
