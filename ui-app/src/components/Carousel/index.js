import React from "react";
import Carousel from "react-material-ui-carousel";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import "./index.scss";

export const Carousal = (props) => {
  const { bannerData } = props;

  return (
    <Carousel className="CarouselItem">
      {bannerData.map((item, i) => (
        <CarouselItem
          key={i}
          item={item}
          bannerImageAlt={item.bannerImageAlt}
          bannerImageUrl={item.bannerImageUrl}
        />
      ))}
    </Carousel>
  );
};

export const CarouselItem = (props) => {
  const { bannerImageUrl, bannerImageAlt } = props;
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={bannerImageUrl}
          alt={bannerImageAlt}
        />
      </CardActionArea>
    </Card>
  );
};
